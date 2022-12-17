<template>
  <div>
    <div>
      <lkButton @click="handleClick(0, $event)"> - click me - </lkButton>
    </div>

    <br />

    <div>
      <span>#点击菜单和按钮(click me)以外取消菜单显示</span>
    </div>
    <br />
    <div>
      <lkButton @click="handleClick(1, $event)"> - click me - </lkButton>
    </div>
    <lk-popupmenu
      :visible.sync="visibility"
      :target="target"
      :data="data"
      :coord="coord"
      @click="popupmenuClick"
    ></lk-popupmenu>
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
            link: "http://43.142.176.173/lakeiedward/",
            id: 4,
            icon: "Star",
          },
          { label: "线上活动", id: 2, dot: true },
          { label: "设计大赛", id: 0, icon: "Hot" },
          { label: "专题策划", id: 1 },
          {
            label: "个人博客",
            link: "https://github.com/lakei-edward",
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
    };
  },
  methods: {
    handleClick(index, e) {
      this.data = this.popupmenuData[index];
      this.visibility = true;
      this.coord.x = e.pageX;
      this.coord.y = e.pageY;
      if (index) {
        this.target = e.target;
      }else{
        this.target =null
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