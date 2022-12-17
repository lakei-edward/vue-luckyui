<template>
  <button
    :type="nativeType"
    :disabled="disabled"
    :class="[
      type ? 'lk-button--' + type : '',
      size ? 'lk-button--' + size : '',
      size ? 'is-button--' + size : '',
      type === 'text' ? '' : 'lk-button',
      {
        'is-round': round,
      }
    ]"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span class="spans" v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'lkButton',
  props: {
    nativeType: {
      type: String,
      default: 'button'
    },
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    round: Boolean,
    circle: Boolean,
    disabled: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
