import Button from './src/main.vue';
/* istanbul ignore next */
Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};
export default Button;
