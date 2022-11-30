<template>
  <div :class="['lkButtonGroup']">
    <ul :style="{ background: line ? '' : 'rgba(0, 0, 0, 0.1)' }">
      <li
        v-for="(item, index) in data"
        :key="item.value"
        class="lkButtonGroup--li"
        :style="handleLight(index)"
        @click="handleClick(item, index, $event)"
      >
        {{ item.label }}
      </li>
      <div :class="[line ? 'lkButtonGroup--line' : 'lkButtonGroup--square', 'lkButtonGroup--move']"></div>
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
          this.handleNodes(0);
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
        const li = document.getElementsByClassName('lkButtonGroup--li')[index];
        const liHeight = li && li.offsetHeight;
        const liWidth = li && li.offsetWidth;
        const liLeft = li && li.offsetLeft;
        const back = document.getElementsByClassName('lkButtonGroup--move')[0];
        back.style.cssText = `height:${liHeight}px;width:${liWidth}px;left:${liLeft}px`;
      });
    }
  }
};
</script>
