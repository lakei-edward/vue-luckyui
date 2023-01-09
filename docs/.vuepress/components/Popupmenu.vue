<template>
  <div>
    <div>
      <component v-if="lkButton" :is="lkButton" @click="handleClick(0, $event)">
        - click me -
      </component>
    </div>

    <br />

    <div>
      <span>#点击菜单和按钮(click me)以外取消菜单显示</span>
    </div>
    <br />
    <div>
      <component v-if="lkButton" :is="lkButton" @click="handleClick(1, $event)">
        - click me -
      </component>
    </div>
    <component
      v-if="lkPopupmenu"
      :is="lkPopupmenu"
      :visible.sync="visibility"
      :target="target"
      :data="data"
      :coord="coord"
      @click="popupmenuClick"
    >
    </component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visibility: false,
      target: null,
      coord: {
        x: null,
        y: null,
      },
      data: [],
      popupmenuData: [
        [
          {
            label: "Github⭐",
            link: "https://github.com/lakei-edward",
            id: 4,
            icon: "Star",
          },
          { label: "线上活动", id: 2, dot: true },
          { label: "设计大赛", id: 0, icon: "Hot" },
          { label: "专题策划", id: 1 },
          {
            label: "个人博客",
            link: "http://43.142.176.173/lakeiedward/",
            id: 3,
            icon: "New",
          },
        ],
        [
          { label: "精彩案例", id: 0, icon: "Hot" },
          { label: "共创故事", id: 1, icon: "New" },
          { label: "我要共创", id: 2, dot: true },
        ],
      ],
      lkButton: null,
      lkPopupmenu: null,
    };
  },
  mounted() {
    import("vue-luckyui").then((res) => {
      this.lkButton = res.default.Button;
      this.lkPopupmenu = res.default.popupMenu;
    });
  },
  methods: {
    handleClick(index, e) {
      console.log(e.target);
      this.data = this.popupmenuData[index];
      this.visibility = true;
      this.coord.x = e.pageX;
      this.coord.y = e.pageY;
      if (index) {
        this.target = e.target;
      } else {
        this.target = null;
      }
    },
    // 点击事件
    popupmenuClick(val) {
      if (val.link) {
        window.open(val.link);
      }
    },
  },
};
</script>