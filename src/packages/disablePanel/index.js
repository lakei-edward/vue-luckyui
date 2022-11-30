import diasblePanel from './src/main.vue';
/* istanbul ignore next */
diasblePanel.install = function (Vue) {
  Vue.component(diasblePanel.name, diasblePanel);
};
export default diasblePanel;
