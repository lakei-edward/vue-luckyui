import luckyui from "vue-luckyui";
import "vue-luckyui/lib/index.min.css"
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  // isServer
}) => {
  Vue.use(luckyui);
}
