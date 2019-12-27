# Tabs 标签页
-----
选项卡切换组件。

### 何时使用
提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

### 基础用法

基础样式，```line```类型

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" @on-click="onClick">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2">
                标签三的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
     <b-tabs value ="0" @on-click="onClick">
        <b-tabPane label="标签一" name="0" >
            标签一的内容
        </b-tabPane>
        <b-tabPane label="标签二" name="1">
            标签二的内容
        </b-tabPane>
        <b-tabPane label="标签三" name="2">
            标签三的内容
        </b-tabPane>
    </b-tabs>
```
:::
</div>
--------
### 禁用功能

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" @on-click="onClick">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
        <b-tabs value ="0" @on-click="onClick">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
```
:::
</div>
-----
### 图标功能

通过设置属性```icon```，可以展示一个图标。

<div class="example">
    <div class="example-box">
         <b-tabs value ="0" @on-click="onClick">
             <b-tabPane label="云开票" name="0" icon="yunkaipiao" >
                 标签一的内容
             </b-tabPane>
             <b-tabPane label="云归集" name="1" icon="yunguiji">
                 标签二的内容
             </b-tabPane>
             <b-tabPane label="云单据" name="2" icon="yundanju">
                 标签三的内容
             </b-tabPane>
         </b-tabs>
    </div>

::: code
```html
      <b-tabs value ="0" @on-click="onClick">
           <b-tabPane label="云开票" name="0" icon="yunkaipiao" >
               标签一的内容
           </b-tabPane>
           <b-tabPane label="云归集" name="1" icon="yunguiji">
               标签二的内容
           </b-tabPane>
           <b-tabPane label="云单据" name="2" icon="yundanju">
               标签三的内容
           </b-tabPane>
       </b-tabs>
```
:::
</div>

### 迷你型

设置属性 ```size``` 为 ```small``` 可以显示为迷你型，只在 ```type``` 为 ```line``` 时有效。

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" type="line" size="small">
            <b-tabPane label="标签一" name="0">
                 标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                 标签二的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
     <b-tabs value ="0" type="line" size="small">
         <b-tabPane label="标签一" name="0">
              标签一的内容
         </b-tabPane>
         <b-tabPane label="标签二" name="1">
              标签二的内容
         </b-tabPane>
     </b-tabs>
```
:::
</div>


### 卡片样式

设置属性 ```type``` 为 ```card``` 可以显示卡片样式，常用于容器顶部。

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" type="card" @on-click="onClick">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
        <b-tabs value ="0" type="card" @on-click="onClick">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
```
:::
</div>


### 禁用动画

通过设置属性 ```animated``` 为 ```false``` 可以禁用动画。

```card```类型

<br />

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" type="card" @on-click="onClick" :animated="false">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
        <b-tabs value ="0" type="card" @on-click="onClick" :animated="false">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
```
:::
</div>

```line```类型

<br />

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" @on-click="onClick" :animated="false">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
        <b-tabs value ="0" @on-click="onClick" :animated="false">
            <b-tabPane label="标签一" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" disabled>
                标签三的内容
            </b-tabPane>
        </b-tabs>
```
:::
</div>

### 分层用法

当`Tabs`中的`name`和`TabPane`中的`tab`对应的时候，`Tabs`和`TabPane`划分到同一组

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" name="tabsLv0" type="card">
            <b-tabPane label="标签一" name="0" tab="tabsLv0" >
                <b-tabs value="0"  name="tabsLv1">
                    <b-tabPane label="标签一" name="0" tab="tabsLv1">
                         标签一的内容
                     </b-tabPane>
                     <b-tabPane label="标签二" name="1" tab="tabsLv1">
                         标签二的内容s
                     </b-tabPane>
                     <b-tabPane label="标签三" name="2" tab="tabsLv1">
                         标签三的内容
                     </b-tabPane>
                </b-tabs>
            </b-tabPane>
            <b-tabPane label="标签二" name="1" tab="tabsLv0">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2" tab="tabsLv0">
                标签三的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
    <b-tabs value ="0" name="tabsLv0" type="card">
        <b-tabPane label="标签一" name="0" tab="tabsLv0" >
            <b-tabs value="0"  name="tabsLv1">
                <b-tabPane label="标签一" name="0" tab="tabsLv1">
                     标签一的内容
                 </b-tabPane>
                 <b-tabPane label="标签二" name="1" tab="tabsLv1">
                     标签二的内容s
                 </b-tabPane>
                 <b-tabPane label="标签三" name="2" tab="tabsLv1">
                     标签三的内容
                 </b-tabPane>
            </b-tabs>
        </b-tabPane>
        <b-tabPane label="标签二" name="1" tab="tabsLv0">
            标签二的内容
        </b-tabPane>
        <b-tabPane label="标签三" name="2" tab="tabsLv0">
            标签三的内容
        </b-tabPane>
    </b-tabs>
```
:::
</div>

### 表单元素自动获取焦点

当`capture-focus`值为`true`时，`tabs`内部的表单元素自动获取焦点

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" :captureFocus="true">
            <b-tabPane label="标签一" name="0" >
                <input />
                <input />
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                <input />
                <input />
            </b-tabPane>
            <b-tabPane label="标签三" name="2">
                <input />
                <input />
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
     <b-tabs value ="0" :captureFocus="true">
         <b-tabPane label="标签一" name="0" >
             <input />
             <input />
         </b-tabPane>
         <b-tabPane label="标签二" name="1">
             <input />
             <input />
         </b-tabPane>
         <b-tabPane label="标签三" name="2">
             <input />
             <input />
         </b-tabPane>
     </b-tabs>
```
:::
</div>

### 附加内容功能。示例：通过改变value的值改变tabs页码

设置`slot` `extra`可以在组件右侧添加内容

<div class="example">
    <div class="example-box">
        <b-tabs v-model="tabsValue" >
            <b-button size="small" slot="extra" @on-click="changeTabs">附加按钮：切换tabs页码</b-button>
            <b-tabPane label="标签一" name="user" >
                用户信息
            </b-tabPane>
            <b-tabPane label="标签二" name="role">
                角色信息
            </b-tabPane>
            <b-tabPane label="标签三" name="org">
                机构信息
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
     <b-tabs v-model="tabsValue" >
         <b-button size="small" slot="extra" @on-click="changeTabs">附加按钮：切换tabs页码</b-button>
         <b-tabPane label="标签一" name="user" >
             用户信息
         </b-tabPane>
         <b-tabPane label="标签二" name="role">
             角色信息
         </b-tabPane>
         <b-tabPane label="标签三" name="org">
             机构信息
         </b-tabPane>
     </b-tabs>
     <script>
         export default {
             data () {
                 return {
                     tabsValue:'user',
                     tabsValueList:['user','role','org'],
                 }
             },
             methods: {
                 changeTabs(){
                     let tabIndex = this.tabsValueList.indexOf(this.tabsValue);
                     this.tabsValue = (tabIndex + 1) >= this.tabsValueList.length ? this.tabsValueList[0] : this.tabsValueList[tabIndex + 1];
                 }
             }
         }
     </script>
```
:::
</div>


### 自定义标签页

设置 label 为 Render 函数后，可以自定义标签页的内容。如：角标数量提示

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" @on-click="onClick">
            <b-tabPane :label="waitcheckLabel" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" name="2">
                标签三的内容
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
     <b-tabs value ="0" @on-click="onClick">
        <b-tabPane :label="waitcheckLabel" name="0" >
            标签一的内容
        </b-tabPane>
        <b-tabPane label="标签二" name="1">
            标签二的内容
        </b-tabPane>
        <b-tabPane label="标签三" name="2">
            标签三的内容
        </b-tabPane>
    </b-tabs>
    <script>
        export default {
            data () {
                return {
                    tab0: true,
                    tab1: true,
                    tab2: true,
                    tab3: true,
                    tab4: true,
                    waitcheckLabel: (h) => {
                        return h('div', [
                            h('span', '待审核'),
                            h('b-badge', {
                                props: {
                                    count: 3
                                }
                            })
                        ])
                    }
                }
            },
            methods: {
                handleTabRemove (name) {
                    this['tab' + name] = false;
                },
                onClick(name){
                    console.log('name',name)
                }
            }
        }
    </script>
```
:::
</div>

### 内嵌 select 和 datepicker

内嵌 select 和 datepicker 时，需要添加 transfer 属性

<div class="example">
    <div class="example-box">
        <b-tabs value ="1" @on-click="onClick">
            <b-tabPane label="标签一" name="0" >
                <b-select v-model="value" width='200' transfer :options='selectOptions'></b-select>
                <b-datepicker type='date' label='日期' transfer width='160'></b-datepicker>
            </b-tabPane>
            <b-tabPane label="标签二" name="1">
                <b-select v-model="value" width='200' transfer :options='selectOptions'></b-select>
                <b-datepicker type='date' label='日期' transfer width='160'></b-datepicker>
            </b-tabPane>
            <b-tabPane label="标签三" name="2">
                <b-select v-model="value" width='200' transfer :options='selectOptions'></b-select>
                <b-datepicker type='date' label='日期' transfer width='160'></b-datepicker>
            </b-tabPane>
        </b-tabs>
    </div>

::: code
```html
     <b-tabs value ="1" @on-click="onClick">
        <b-tabPane label="标签一" name="0" >
            <b-select v-model="value" width='200' transfer :options='selectOptions'></b-select>
            <b-datepicker type='date' label='日期' transfer width='160'></b-datepicker>
        </b-tabPane>
        <b-tabPane label="标签二" name="1">
            <b-select v-model="value" width='200' transfer :options='selectOptions'></b-select>
            <b-datepicker type='date' label='日期' transfer width='160'></b-datepicker>
        </b-tabPane>
        <b-tabPane label="标签三" name="2">
            <b-select v-model="value" width='200' transfer :options='selectOptions'></b-select>
            <b-datepicker type='date' label='日期' transfer width='160'></b-datepicker>
        </b-tabPane>
    </b-tabs>
    <script>
         export default {
             data () {
                 return {
                     value:'',
                     selectOptions:[{
                        label:'增专',
                        value:'004'
                    },{
                        label:'增普',
                        value:'007'
                    },{
                        label:'机动车',
                        value:'005'
                    },{
                        label:'电子票',
                        value:'025'
                    }]
                 }
             }
         }
    </script>
```
:::
</div>


### 可关闭

<div class="example">
    <div class="example-box">
        <b-tabs value ="0" type="card" closable @on-tab-remove="handleTabRemove">
            <b-tabPane label="标签一" v-if="tab0" name="0" >
                标签一的内容
            </b-tabPane>
            <b-tabPane label="标签二" v-if="tab1" name="1">
                标签二的内容
            </b-tabPane>
            <b-tabPane label="标签三" v-if="tab2" name="2" >
                标签三的内容
            </b-tabPane>
            <b-tabPane label="标签四" v-if="tab3" name="3" disabled>
                标签四的内容
            </b-tabPane>
            <b-tabPane label="标签五" v-if="tab4" name="4" >
                标签五的内容
            </b-tabPane>
        </b-tabs>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true,
                tab3: true,
                tab4: true,
                tabsValue:'user',
                tabsValueList:['user','role','org'],
                value:'',
                style:{
                    width:'100px',
                    height:'100px',
                    background:'#00ff00',
                    position:'relative'
                },
                ifSmall:true,
                selectOptions:[{
                   label:'增专',
                   value:'004'
               },{
                   label:'增普',
                   value:'007'
               },{
                   label:'机动车',
                   value:'005'
               },{
                   label:'电子票',
                   value:'025'
               }],
                waitcheckLabel: (h) => {
                    return h('div', [
                        h('span', '待审核'),
                        h('b-badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            },
            onClick(name){
                console.log('name',name)
            },
            switchStyle(){
                if(this.ifSmall){
                    this.style = {
                         width:'300px',
                         height:'300px',
                         background:'red',
                          position:'relative'
                     };
                    this.ifSmall = false;
                } else {
                    this.style = {
                         width:'100px',
                         height:'100px',
                         background:'#00ff00',
                          position:'relative'
                     };
                    this.ifSmall = true;
                }
            },
            changeTabs(){
                let tabIndex = this.tabsValueList.indexOf(this.tabsValue);
                this.tabsValue = (tabIndex + 1) >= this.tabsValueList.length ? this.tabsValueList[0] : this.tabsValueList[tabIndex + 1];
            }
        }
    }
</script>
    </div>

::: code
```html
     <b-tabs value ="0" type="card" closable @on-tab-remove="handleTabRemove">
         <b-tabPane label="标签一" v-if="tab0" name="0" >
             标签一的内容
         </b-tabPane>
         <b-tabPane label="标签二" v-if="tab1" name="1">
             标签二的内容
         </b-tabPane>
         <b-tabPane label="标签三" v-if="tab2" name="2" >
             标签三的内容
         </b-tabPane>
         <b-tabPane label="标签四" v-if="tab3" name="3" disabled>
             标签四的内容
         </b-tabPane>
         <b-tabPane label="标签五" v-if="tab4" name="4" >
             标签五的内容
         </b-tabPane>
     </b-tabs>
    <script>
        export default {
            data () {
                return {
                    tab0: true,
                    tab1: true,
                    tab2: true,
                    tab3: true,
                    tab4: true,
                    waitcheckLabel: (h) => {
                        return h('div', [
                            h('span', '待审核'),
                            h('b-badge', {
                                props: {
                                    count: 3
                                }
                            })
                        ])
                    }
                }
            },
            methods: {
                handleTabRemove (name) {
                    this['tab' + name] = false;
                },
                onClick(name){
                    console.log('name',name)
                }
            }
        }
    </script>
```
:::
</div>


### Tabs Props
| 参数 | 说明 | 类型 | 可选值 |默认值 |
| ---- | ---- | ---- | ---- | ---- |
| value | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据  | String  | --- |默认为第一项的 name |
| type | 页签的基本样式，可选值为 line 和 card  | String  | --- |line |
| size | 尺寸，可选值为 default 和 small，仅在 type="line" 时有效  | String  | --- |default |
| closable | 是否可以关闭页签，仅在 type="card" 时有效  | Boolean  | --- |false |
| animated | 是否开启动画  | Boolean  | --- |true |
| before-remove | 关闭前的函数，返回 ```Promise``` 可阻止标签关闭,回调函数的默认值为tab的index  | Function  | --- | --- |
| name | 当嵌套使用`Tabs`，指定`name` 区分层级  | String  | --- | --- |
| capture-focus | Tabs 内的表单类组件是否自动获得焦点  | Boolean  | --- | false |

### Tabs events
| 事件 | 说明 | 返回值 | 
| ---- | ---- | ---- | ---- | ---- |
|on-tab-remove|tab 被关闭时触发|name|
|on-click|tab 被点击时触发|name|


### Tabs Slot
| 名称 | 说明  |
| ---- | ---- |
|extra|附加内容|


### TabPane Props
| 参数 | 说明 | 类型 | 可选值 |默认值 |
| ---- | ---- | ---- | ---- | ---- |
| name | 用于标识当前面板，对应 value，默认为其索引值  | String  | --- |--|
| label | 选项卡头显示文字  | String  | --- |空|
| disabled | 是否禁用该选项卡  | Boolean  | --- |false|
| icon | 选项卡图标  | String  | --- |空|
| closable | 是否可以关闭页签，仅在 type="card" 时有效  | Boolean  | --- |false |
| tab | 当嵌套使用 Tabs，设置该属性指向对应 Tabs 的 name 字段  | String  | --- |---s |
| index | 在 `TabPane` 使用 `v-if` 时，并不会按照预先的顺序渲染，这时可设置 `index`，并从小到大排序(需大于 0)  | Number  | --- |--- |






