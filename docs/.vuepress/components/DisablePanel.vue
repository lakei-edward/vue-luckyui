<template>
  <div>
    <!-- <lk-disable-panel :contextmenu="true" :keydown="true"></lk-disable-panel> -->
    <lk-Buttongroup :current="1" :data="disablePanelData" @click="handleClickPanel"></lk-Buttongroup>
    <lk-disable-panel :contextmenu="contextmenu" :keydown="keydown"></lk-disable-panel>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
       disablePanelData: [
        { name: 'all', label: '全部禁用' },
        { name: 'keydown', label: '禁用F12' },
        { name: 'contextmenu', label: '禁用右键' },
        { name: 'open', label: '全部开启' }
      ],
      contextmenu: false,
      keydown: true
    };
  },
  methods: {
    // 按钮组点击事件
    handleClickPanel(val) {
      if (val.name === 'all') {
        this.contextmenu = true;
        this.keydown = true;
      } else if (val.name === 'keydown') {
        this.keydown = true;
        this.contextmenu = false;
      } else if (val.name === 'contextmenu') {
        this.contextmenu = true;
        this.keydown = false;
      } else {
        this.contextmenu = false;
        this.keydown = false;
      }
    },
  },
};
</script>