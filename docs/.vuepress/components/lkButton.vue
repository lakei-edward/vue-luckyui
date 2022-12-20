<template>
  <component
    v-if="lkButton"
    :is="lkButton"
    :round="round"
    :circle="circle"
    :disabled="disabled"
    :nativeType="nativeType"
    :type="type"
    :icon="icon"
    :size="size"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    nativeType: {
      type: String,
      default: "button",
    },
    type: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
  },
  data() {
    return {
      lkButton: null,
    };
  },
  mounted() {
    import("vue-luckyui").then((res) => {
      this.lkButton = res.default.Button;
    });
  },
};
</script>