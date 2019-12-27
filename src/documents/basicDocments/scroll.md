# Scroll 无限滚动

### 底部触发

<div class='example'>
    <div class='example-box'>
        <b-scroll :on-reach-bottom="handleReachBottom">
            <b-card dis-hover v-for="(item, index) in list1" :key="index" style="margin: 32px 0">
                Content {{ item }}
            </b-card>
        </b-scroll>
    </div>

::: code

```html
    <b-card title='我是卡片' icon='yonghuzhongxin'>
        <div>哈哈哈，我是 Body!</div>
    </b-card>
```

:::
</div>

### 顶部触发

<div class='example'>
    <div class='example-box'>
        <b-scroll :on-reach-top="handleReachTop">
            <b-card dis-hover v-for="(item, index) in list2" :key="index" style="margin: 32px 0">
                Content {{ item }}
            </b-card>
        </b-scroll>
    </div>

::: code

```html
    <b-card title='我是卡片' icon='yonghuzhongxin'>
        <div>哈哈哈，我是 Body!</div>
    </b-card>
```

:::
</div>

### 边缘触发

<div class='example'>
    <div class='example-box'>
        <b-scroll :on-reach-edge="handleReachEdge">
            <b-card dis-hover v-for="(item, index) in list3" :key="index" style="margin: 32px 0">
                Content {{ item }}
            </b-card>
        </b-scroll>
    </div>

::: code

```html
    <b-card title='我是卡片' icon='yonghuzhongxin'>
        <div>哈哈哈，我是 Body!</div>
    </b-card>
```

:::
</div>

<script>
    export default {
        data () {
            return {
                list1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }
        },
        methods: {
            handleReachBottom () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const last = this.list1[this.list1.length - 1];
                        for (let i = 1; i < 11; i++) {
                            this.list1.push(last + i);
                        }
                        resolve();
                    }, 2000);
                });
            },
            handleReachTop () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        const first = this.list2[0];
                        for (let i = 1; i < 11; i++) {
                            this.list2.unshift(first - i);
                        }
                        resolve();
                    }, 2000);
                });
            },
            handleReachEdge (dir) {
                return new Promise(resolve => {
                    setTimeout(() => {
                        if (dir > 0) {
                            const first = this.list3[0];
                            for (let i = 1; i < 11; i++) {
                                this.list3.unshift(first - i);
                            }
                        } else {
                            const last = this.list3[this.list3.length - 1];
                            for (let i = 1; i < 11; i++) {
                                this.list3.push(last + i);
                            }
                        }
                        resolve();
                    }, 2000);
                });
            }
        }
    }
</script>

### props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| height | 滚动区域的高度，单位px | String/Number  |  | 300 |
| loading-text | 加载文字 | String |  | 加载中 |
| on-reach-top | 滚动至顶部时触发，需返回 Promise | Function |
| on-reach-bottom | 滚动至底部时触发，需返回 Promise | Function |
| on-reach-edge | 滚动至顶部或底部时触发，需返回 Promise | Function |
| distance-to-edge | 从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。 | Number/Array | | [20, 20] |