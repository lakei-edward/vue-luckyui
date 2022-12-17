import ButtonGroup from './src/main.vue';
console.log(ButtonGroup);
ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup);
};
export default ButtonGroup;
