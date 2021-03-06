# 测试报告

### 声明
- 报告提供的数据仅供`内部参考`，不能给客户看，也不作为对外项目的可展示数据
- 报告结果为`多次测试`的平均数，测试项包括`DOM渲染时间`、`CPU 使用率`、`内存使用率` 等
- 测试中的使用率数据均为异步获取本地系统信息，受多方因素影响，存在一定误差
- 页面是否卡顿和本身所处的`项目环境`、`电脑配置`、`浏览器性能`等等有直接关系，组件库的组件只占其中的一部分
- 组件库本身不支持超大数据的直接渲染，请采用`分页`、`懒加载`等方式优化用户体验，建议数据会考虑用户的真实体验
- 详细自动化测试代码已经提交到[release-ggq-performance-testing](http://git.51baiwang.com/BaiwangFE/bwUI/tree/release-ggq-performance-testing)分支，如果想`更详细的测试`或者有`更好的测试方案`，请在此分支自行测试

### 测试机器说明
MAC 配置: `内存`16 GB 2133 MHz LPDDR3 `处理器`2.8 GHz Intel Core i7

WINDOWS 配置：`内存`2GB `处理器`2.8 GHz Intel Core i7-7700HQ

### Table test
测试模板,Table测试标准的4列属性,测试最大条数性能
```code
<template>
    <div>
        <b-table border width=1000 :columns='columns2' :data='data4'></b-table>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                data4: [],
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 200
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 300
                    },
                    {
                        title: 'Sex',
                        key: 'sex',
                        width: 300
                    },
                    {
                        title: 'hobby',
                        key: 'hobby',
                        width: 200
                    }
                ]
            }
        },
        mounted: function () {
            var arr = []
            var test = {
                name: '欧阳',
                age: 12,
                sex: '男',
                hobby: 'Swimming'
            }
            // 修改最大值测试最大条数
            for (var i = 0; i < 100; i++) {
                arr.push(test)
            }
            this.data4 = arr
        }
    }
</script>
<style>
</style>

```
#### Mac 测试

浏览器 `Chrome(75.0.3770.100)`，建议条数 < 300

| 数据条数    |   DOM渲染时间[ms]    | CPU 使用率[%]     | 内存使用率[%]    |
|---------- |-------------  |-------- |-------- |
| 50  | 112| 0.31 |0.42 |
| 100  | 161| 1.1 |0.61 |
| 300  | 277| 1.4 |0.93 |
| 500  | 716| 1.7 |1.22 |
| 1000  | 1618| 2.7 |1.64 |

#### Windows 测试
浏览器 `ie11(11.0.130)`，建议条数 < 100
| 数据条数    |   DOM渲染时间[ms]    | CPU 使用率[%]     | 内存使用率[%]    |
|---------- |-------------  |-------- |-------- |
| 50  | 800| 2 |1 |
| 100  | 1848| 4.1 |2.2 |
| 300  | 9971| 6.6 |4 |
| 500  | 17471| 11 |8 |

浏览器 `ie9`，建议条数 < 50
| 数据条数    |   DOM渲染时间[ms]    | CPU 使用率[%]     | 内存使用率[%]    |
|---------- |-------------  |-------- |-------- |
| 50  | 1500| 4 |2 |
| 100  | 2848| 7 |3 |
| 300  | 19872| 17 |13 |


### Tree test
测试模板,多级父子节点不会有大的性能问题，所以测试同一层级全部渲染条数
```code
<template>
    <div>
        <b-tree :data='data4' show-checkbox></b-tree>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                data4: []
            }
        },
        mounted: function () {
            var arr = []
            var test = {
                name: 'root',
                expand: true,
                id: 1
            }
            // 修改最大值测试最大条数
            for (var i = 0; i < 100; i++) {
                arr.push(test)
            }
            this.data4 = arr
        }
    }
</script>
<style>
</style>

```
#### Mac 测试

浏览器 `Chrome(75.0.3770.100)`，建议条数 < 1000

| 数据条数    |   DOM渲染时间[ms]    | CPU 使用率[%]     | 内存使用率[%]    |
|---------- |-------------  |-------- |-------- |
| 100  | 98| 0.6 |0.12 |
| 300  | 247| 1.8 |0.24 |
| 500  | 418| 3.3 |0.61 |
| 1000  | 664| 4.5 |1.32 |
| 2000  |  1492 | 6.4 |1.98 |
| 5000  |  4112 | 16.5 |3.52 |


#### Windows 测试
浏览器 `ie11(11.0.130)`，建议条数 < 100
| 数据条数    |   DOM渲染时间[ms]    | CPU 使用率[%]     | 内存使用率[%]    |
|---------- |-------------  |-------- |-------- |
| 100  | 921| 2 |2 |
| 300  | 4372| 6 |3.6 |
| 500  | 6821| 8.9 |6 |
| 1000  | 21994| 36 |16 |


浏览器 `ie9`，建议条数 < 50
| 数据条数    |   DOM渲染时间[ms]    | CPU 使用率[%]     | 内存使用率[%]    |
|---------- |-------------  |-------- |-------- |
| 50  | 674| 2.6 |1.8 |
| 100  | 1222| 4 |3 |
| 300  | 5112| 9 |6.9|
