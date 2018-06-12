import ListTree from './tree' // 导入组件
const tree = {
  install (Vue, options) {
    // const LTree = Vue.extend({
    //   template: "<p><a :href='url'>{{author}} & {{name}}</a></p>",
    //   data: function () {
    //     return {
    //       author: 'vamous',
    //       url: 'http://blog.csdn.net/Dear_Mr/article/details/72614370'
    //     }
    //   },
    //   props: ['name']
    // })

    const LTree = Vue.extend(ListTree)
    const listtree = new LTree({propsData: {list: options.list}})
    Vue.nextTick(() => {
      listtree.$mount('.tre')
    })
    // Vue.component(ListTree.name, ListTree)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(tree)
}
export default tree
