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
        <div @click="insert(scope.info)">π ζ°ε’</div>
        <div @click="remove(scope.info)">π³ ε ι€</div>
        <lk-divider></lk-divider>
        <div @click="back">π ειδΈζ­₯</div>
        <div @click="print">π ζε°</div>
        <div @click="refresh">π€£ ιζ°ε θ½½</div>
      </template>
    </lk-contextmenu> -->

    <component
      v-if="lkContextmenu"
      :is="lkContextmenu"
      :visible.sync="visibility"
      :ctxmenu="menuInfo"
    >
      <template v-slot="scope">
        <div @click="insert(scope.info)">π ζ°ε’</div>
        <div @click="remove(scope.info)">π³ ε ι€</div>
        <component v-if="lkDivider" :is="lkDivider" :space="10"> </component>
        <div @click="back">π ειδΈζ­₯</div>
        <div @click="print">π ζε°</div>
        <div @click="refresh">π€£ ιζ°ε θ½½</div>
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
        { id: 1, label: "ζ₯ζθ±εΌ" },
        { id: 2, label: "ι¨εζ₯η¬" },
        { id: 3, label: "εζεη§" },
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
      this.data.push({ label: `${item.label}-ε―ζ¬` });
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