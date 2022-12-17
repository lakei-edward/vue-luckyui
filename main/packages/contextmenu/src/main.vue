<template>
	<div
		v-show="visible"
		:class="[disabled ? 'lk-cntextmenu-disabled' : 'lk-cntextmenu']"
		:style="setStyle"
	>
		<template v-if="!disabled">
			<slot :info="ctxmenu.context"></slot>
		</template>
		<template v-else>
			<div>{{ disabledText }}</div>
		</template>
	</div>
</template>
<script>
export default {
  name: 'lkContextmenu',
  props: {
    ctxmenu: {
      type: Object,
      default() {
        return {};
      }
    },
    hoverColor: {
      type: String,
      default: '#eee'
    },
    disabledText: {
      type: String,
      default: '禁止'
    },
    visible: Boolean,
    disabled: Boolean
  },
  data() {
    return {};
  },
  watch: {
    ctxmenu: {
      handler() {
        if (this.disabled) {
          this.$nextTick(() => {
            const _destroyde = document.getElementsByClassName(
              'lk-cntextmenu-disabled'
            )[0];
            _destroyde.style.opacity = 0.8;
            setTimeout(() => {
              _destroyde.style.opacity = 0;
            }, 1000);
          });
        }
      },
      deep: true
    }
  },
  mounted() {
    window.addEventListener('click', () => {
      this.$emit('update:visible', false);
    });
  },
  computed: {
    setStyle() {
      return {
        left: `${this.ctxmenu.x}px`,
        top: `${this.ctxmenu.y}px`,
        '--backgroynd-color': this.hoverColor
      };
    }
  },

  methods: {
    disableCommond() {
      window.addEventListener('contextmenu', (e) => {
        e.preventDefault();
      });
      window.addEventListener('keydown', (e) => {
        if (e.code === 'F12') {
          e.preventDefault();
        }
      });
    }
  }
};
</script>
