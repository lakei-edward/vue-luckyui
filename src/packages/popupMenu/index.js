import popupMenu from './src/main.vue';
/* istanbul ignore next */
popupMenu.install = function (Vue) {
  Vue.component(popupMenu.name, popupMenu);
};
export default popupMenu;
