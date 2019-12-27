/**
 * modal
 * author by @zhengshuai
 */
import Modal from './Confirm.js'
const defaults = {
    same: false
}

// modal 实例 单一
let modalInstance
let isSameModal

const getModalInstance = ({render = undefined, same = false}) => {
    isSameModal = defaults.same || same
    if (!modalInstance) {
        const params = {
            closable: false,
            maskClosable: false,
            footerHide: true,
            center: false,
            render: render
        }
        if (isSameModal) {
            modalInstance = Modal.SameInstance(params)
        } else {
            modalInstance = Modal.Instance(params)
        }
    }
    return modalInstance
}

// 创建 modal 弹框
const confirmModal = options => {
    const {render, same} = options
    options.showCancel = !same
    let instance = getModalInstance({render, same})
    options.onRemove = () => {
        modalInstance = null
    }
    instance.show(options)
}

// info 提示
Modal.info = options => {
    options.icon = 'info'
    confirmModal(options)
}

// success 提示
Modal.success = options => {
    options.icon = 'success'
    confirmModal(options)
}

// warning 提示
Modal.warning = options => {
    options.icon = 'warning'
    confirmModal(options)
}

// error 提示
Modal.error = options => {
    options.icon = 'error'
    confirmModal(options)
}

// confirm 提示
Modal.confirm = options => {
    options.icon = 'confirm'
    confirmModal(options)
}

Modal.remove = function () {
    if (!modalInstance) {
        return false
    }
    const instance = getModalInstance({same: isSameModal})
    instance.remove()
}

Modal.config = function (options) {
    defaults.same = options.same || false
}

export default Modal
