<template>
    <div :class="wrapperClasses">
        <div :class="spinnerClasses">
            <b-spin fix>
                <b-icon type="loading" size="18" :class="iconClasses"></b-icon>
                <div v-if="text" :class="textClasses">{{text}}</div>
            </b-spin>

        </div>
    </div>
</template>

<script>
    import BSpin from '../spin'
    import BIcon from '../icon'
    import { prefix } from '../../utils/common'
    const prefixCls = `${prefix}scroll`

    export default {
        name: prefixCls + 'loading',
        props: ['text', 'active', 'spinnerHeight'],
        components: { BSpin, BIcon },
        computed: {
            wrapperClasses () {
                return [
                    `${prefixCls}-loader-wrapper`,
                    {
                        [`${prefixCls}-loader-wrapper-active`]: this.active
                    }
                ]
            },
            spinnerClasses () {
                return `${prefixCls}-spinner`
            },
            iconClasses () {
                return `${prefixCls}-spinner-icon`
            },
            textClasses () {
                return `${prefixCls}-loader-text`
            }
        }
    }
</script>
