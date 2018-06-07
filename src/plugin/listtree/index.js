import ListTree from './tree' // 导入组件
const tree = {
  install (Vue, options) {
    Vue.component(ListTree.name, ListTree)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(tree)
}
export default tree
