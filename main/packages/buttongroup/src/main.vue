<template>
  <div :class="['lkButtonGroup']">
    <ul :style="{ background: line ? '' : 'rgba(0, 0, 0, 0.1)' }">
      <li
        v-for="(item, index) in data"
        ref="lis"
        :key="item.value"
        class="lkButtonGroup--li"
        :style="handleLight(index)"
        @click="handleClick(item, index, $event)"
      >
        {{ item.label }}
      </li>
      <div ref="move" :class="[line ? 'lkButtonGroup--line' : 'lkButtonGroup--square', 'lkButtonGroup--move']"></div>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'lkButtongroup',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    colorHover: {
      tyep: String,
      default: '#000'
    },
    colorText: {
      tyep: String,
      default: '#555'
    },
    current: {
      tyep: Number,
      default: 0
    },
    line: Boolean
  },
  data() {
    return {
      currentLine: 0
    };
  },
  computed: {
    handleLight() {
      return function (index) {
        return {
          color: !this.line ? this.colorText : this.currentLine === index ? this.colorHover : this.colorText
        };
      };
    }
  },
  watch: {
    data: {
      handler(val) {
        if (Array.isArray(val) && val.length > 0) {
          this.handleNodes(this.current);
        }
      },
      immediate: true
    }
  },
  methods: {
    handleClick(item, index, e) {
      this.currentLine = index;
      this.handleNodes(index);
      this.$emit('click', item, e);
    },
    handleNodes(index) {
      this.$nextTick(() => {
        const li = this.$refs.lis[index];
        const liHeight = li && li.offsetHeight;
        const liWidth = li && li.offsetWidth;
        const liLeft = li && li.offsetLeft;
        const back = this.$refs.move;
        back.style.cssText = `height:${liHeight}px;width:${liWidth}px;left:${liLeft}px`;
      });
    }
  }
};
</script>
