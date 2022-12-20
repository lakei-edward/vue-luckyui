// import vue from 'vue/dist/vue.esm.browser'
// import luckyui from "vue-luckyui";
import "vue-luckyui/lib/index.min.css"
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
  // isServer
}) => {
  // Vue.use(luckyui);
  // (() => {
  //   function block() {
  //     if (
  //       window.outerHeight - window.innerHeight > 200 ||
  //       window.outerWidth - window.innerWidth > 200
  //     ) {
  //       document.body.innerHTML =
  //         "检测到非法调试,请关闭后刷新重试!";
  //     }
  //     setInterval(() => {
  //       (function () {
  //         return false;
  //       }
  //         ["constructor"]("debugger")
  //         ["call"]());
  //     }, 50);
  //   }
  //   try {
  //     block();
  //   } catch (err) {}
  // })();

  // (function() {var a = new Date(); debugger; return new Date() - a > 100;}())
  // window.Vue = vue // 使页面中可以使用Vue构造函数 （使页面中的vue demo生效）
  // Vue.mixin({
  //   mounted() {
  //     // 不加 setTimeout 会有报错，但不影响效果
  //     setTimeout(() => {
  //       try {
  //         docsearch({
  //           appId: "L5IPNV5K3M",
  //           apiKey: "99246631cb7cd16c6c522081f0397cca",
  //           indexName: "oliver556",
  //           container: '.search-box',
  //           debug: false
  //         });
  //       } catch(e) {
  //         console.log(e);
  //       }
  //     }, 100)
  //   },
  // });
}
