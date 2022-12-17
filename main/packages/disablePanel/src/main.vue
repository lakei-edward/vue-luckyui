<template>
  <div></div>
</template>
<script>
export default {
  name: 'lkDisablePanel',
  props: {
    contextmenu: {
      type: Boolean,
      default: false
    },
    keydown: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    contextmenu: {
      handler(val) {
        if (val) {
          document.oncontextmenu = function (e) {
            e.preventDefault();
          };
        } else {
          document.oncontextmenu = null;
        }
      },
      immediate: true
    },
    keydown: {
      handler(val) {
        if (val) {
          document.onkeydown = function (e) {
            if (e.code === 'F12') {
              e.preventDefault();
            }
          };
        } else {
          document.onkeydown = null;
        }
      },
      immediate: true
    }
  }
};
</script>
