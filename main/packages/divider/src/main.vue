<template>
  <div class="lk-divider" :style="setStyle" :class="[vertical ? 'lk-divider--vertical' : 'lk-divider']">
    <div :class="['lk-divider-position', 'lk-divider-' + position]">
      <slot v-if="!vertical"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lkDivider',
  props: {
    color: {
      type: String,
      default: '#aaa'
    },
    long: {
      type: String,
      default: '12'
    },
    space: {
      type: Number,
      default: 24
    },
    position: {
      type: String,
      default: 'center',
      validator(val) {
        return ['left', 'center', 'right'].indexOf(val) !== -1;
      }
    },
    vertical: Boolean
  },
  computed: {
    setStyle() {
      if (this.vertical) {
        return {
          background: this.color,
          height: `${this.long}px`
        };
      }
      return {
        background: this.color,
        padding: 0,
        margin: `${this.space}px 0`
      };
    }
  }
};
</script>
