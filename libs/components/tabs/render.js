/**
 * @author 靳宏灿
 * @date 2019/7/26
 * @time 下午5:54
 * @Description:  tabLabel 的 render
*/
export default {
    name: 'RenderCell',
    functional: true,
    props: {
        render: Function
    },
    render: (h, ctx) => {
        return ctx.props.render(h)
    }
}
