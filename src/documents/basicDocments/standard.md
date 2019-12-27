# 组件开发规范【持续补充中】

----

### 建议

在开始组件库开发之前，至少要先阅读并且练习一遍 vue的一些[基础知识](https://cn.vuejs.org/v2/guide/),以及遵守 vue 的开发
[风格指南](https://cn.vuejs.org/v2/style-guide/)

### 新功能开发流程
功能开发 => 浏览器兼容测试 => 关联测试 => 编写测试用例 => 提交到 develop 分支 =>发布新版本

--- 功能开发：首先评审需求是否有进入组件库的必要性以及实现可行性等，评审后开始功能开发，并且编写示例文档

--- 浏览器兼容测试：ie9-11、Edge、Chrome、Firefox、Safari等进行功能兼容性测试

--- 关联测试：主要是测试是否影响本组件的其他功能以及其他引用此组件的地方的功能是否正常

--- 编写测试用： vue + jest 组件测试

--- 合并版本：由组件编写人以上流程均已完成后组件库负责人进行代码review以及功能评审,之后即可合并进入主分支

--- 发布版本：编写版本更新日志，发布版本分支`release-formal-publish`，发布流程详见此分支 [`README`](http://git.51baiwang.com/BaiwangFE/bwUI/tree/release-formal-publish)，并且在[`发版平台`](http://build.baiwang-inner.com:5000/#/modulars/frontend)发布更新文档

### 组件样式
所有组件样式不建议用 scoped 属性，而是添加统一前缀 【$css-prefix-组件名-属性的模式】，以下是组件样式示例：
组件所有的颜色要用颜色表里的变量名来写，便于以后定制化 UI。

// page组件  示例
```bash
$loading:$css-prefix+'loading';

.#{$loading} {
  &-parent {
    &-relative {
      position: relative !important;
    }

    &-hidden {
      overflow: hidden !important;
    }
  }

  &-mask {
    position: absolute;
    z-index: 2000;
    background-color: rgba(255, 255, 255, .9);
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: opacity .3;
  }

}
```

### 开发规范
- 所有组件的`组件名`、`样式名`均以`prefix`为公用前缀，不要用`bw-`，组件库不要和业务相关，就是单纯的组件库,示例
```bash
    <div :class="[prefixCls + '-simple-pager']" :title="currentPage + '/' + pageCount">
        <input
            type="text"
            :value="currentPage"
            @keydown="keyDown"
            @keyup="keyUp"
            @change="keyUp">
        <span>/</span>
        {{ pageCount }}s
    </div>
    ...
    import { prefix } from '../../utils/common'

    const prefixCls = prefix + 'page'
    ...
    wrapCls () {
        return [
            `${prefixCls}`,
            `${prefixCls}-normal`,
            {
                [`${this.className}`]: !!this.className,
                [`${prefixCls}-mini`]: !!this.mini
            }
        ]
    }
```
### 测试
- UI 测试采用常见的的jest + vue/test-utils单元测试，测试用例编写以后，执行 npm run test 进行测试
- 组件新增功能测试如果不是重大版本更新不允许`不兼容`更新，另外兼容组件功能更新必须在更新日志中标明