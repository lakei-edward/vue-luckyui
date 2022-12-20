<template>
  <div>
    <ul>
      <li
        class="ctx"
        v-for="(item, index) in data"
        :key="item.id"
        @contextmenu.prevent="contextmenuEvent(item, index, $event)"
      >
        {{ item.label }}
      </li>
    </ul>
    <!-- <lk-contextmenu :visible.sync="visibility" :ctxmenu="menuInfo">
      <template v-slot="scope">
        <div @click="insert(scope.info)">😀 新增</div>
        <div @click="remove(scope.info)">😳 删除</div>
        <lk-divider></lk-divider>
        <div @click="back">😏 后退一步</div>
        <div @click="print">😋 打印</div>
        <div @click="refresh">🤣 重新加载</div>
      </template>
    </lk-contextmenu> -->

    <component
      v-if="lkContextmenu"
      :is="lkContextmenu"
      :visible.sync="visibility"
      :ctxmenu="menuInfo"
    >
      <template v-slot="scope">
        <div @click="insert(scope.info)">😀 新增</div>
        <div @click="remove(scope.info)">😳 删除</div>
        <component v-if="lkDivider" :is="lkDivider" :space="10"> </component>
        <div @click="back">😏 后退一步</div>
        <div @click="print">😋 打印</div>
        <div @click="refresh">🤣 重新加载</div>
      </template>
    </component>
  </div>
</template>
<script>
export default {
  props: {},
  data() {
    return {
      data: [
        { id: 1, label: "春暖花开" },
        { id: 2, label: "雨后春笋" },
        { id: 3, label: "各有千秋" },
      ],
      menuInfo: {
        x: null,
        y: null,
        index: 0,
        context: null,
      },
      visibility: false,
      lkContextmenu: null,
      lkDivider: null,
    };
  },
  mounted() {
    import("vue-luckyui").then((res) => {
      this.lkContextmenu = res.default.Contextmenu;
      this.lkDivider = res.default.Divider;
    });
  },
  methods: {
    back() {
      window.history.back(-1);
    },
    print() {
      window.print();
    },
    refresh() {
      location.reload();
    },
    insert(item) {
      this.data.push({ label: `${item.label}-副本` });
    },
    remove(item) {
      const index = this.data.findIndex((v) => v.label === item.label);
      this.data.splice(index, 1);
    },
    contextmenuEvent(item, index, e) {
      this.visibility = true;
      this.menuInfo.x = e.pageX;
      this.menuInfo.y = e.pageY;
      this.menuInfo.context = item;
      this.menuInfo.context.index = index;
    },
  },
};
</script>
<style scoped>
.ctx {
  cursor: pointer;
  list-style-type: circle;
}
</style>