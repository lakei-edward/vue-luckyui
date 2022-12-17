import Contextmenu from './src/main.vue';
/* istanbul ignore next */
Contextmenu.install = function (Vue) {
  Vue.component(Contextmenu.name, Contextmenu);
};
export default Contextmenu;
