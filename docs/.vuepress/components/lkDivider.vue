<template>
  <component
    v-if="lkDivider"
    :is="lkDivider"
    :color="color"
    :long="long"
    :space="space"
    :position="position"
    :vertical="vertical"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "#aaa",
    },
    long: {
      type: String,
      default: "12",
    },
    space: {
      type: Number,
      default: 24,
    },
    position: {
      type: String,
      default: "center",
      validator(val) {
        return ["left", "center", "right"].indexOf(val) !== -1;
      },
    },
    vertical: Boolean,
  },
  data() {
    return {
      lkDivider: null,
    };
  },
  mounted() {
    import("vue-luckyui").then((res) => {
      this.lkDivider = res.default.Divider;
    });
  },
};
</script>
<style scoped lang='scss'></style>