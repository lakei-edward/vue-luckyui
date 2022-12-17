<template>
  <div
    v-show="visible"
    ref="lkPopupmenu"
    :class="[{ lkPopupmenu: data.length > 0 && Object.keys(coord).length > 0 }]"
    :style="handleCoord"
  >
    <ul>
      <li
        v-for="(item, index) in data"
        :key="item.id"
        :id="`lkPopupmenu--li${index}`"
        @click="handleClick(item, $event)"
      >
        {{ item.label }}
        <template v-if="item.icon">
          <span class="lkPopupmenu--icon">{{ item.icon }}</span>
        </template>
        <template v-if="item.dot">
          <span class="lkPopupmenu--dot"></span>
        </template>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'lkPopupmenu',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    target: {
      type: HTMLElement
    },
    coord: {
      type: Object,
      require: true,
      default() {
        return {};
      }
    },
    visible: Boolean
  },
  data() {
    return {};
  },
  watch: {
    target(val) {
      if (val) {
        document.onclick = (e) => {
          const t = this.$refs.lkPopupmenu; // 最外层元素
          this.$nextTick(() => {
            if (!e.path.includes(t) && !e.path.includes(this.target)) {
              this.$emit('update:visible', false);
            }
          });
        };
      } else {
        document.onclick = null;
      }
    }
  },
  computed: {
    handleCoord() {
      return {
        left: `${this.coord && this.coord.x - 20}px`,
        top: `${this.coord && this.coord.y + 20}px`
      };
    }
  },
  methods: {
    handleClick(val, event) {
      this.$emit('update:visible', false);
      this.$emit('click', val, event);
    }
  }
};
</script>
