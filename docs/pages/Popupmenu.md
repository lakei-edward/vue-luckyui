# Popupmenu

### 弹出菜单

<br />

不妨试着单击一下

<br />
<br />

<popupmenu></popupmenu>

<br />
<br />


#### 代码
<br />

打开菜单时，如果想通过点击**菜单和按钮(click me)以外**其他任意区域取消菜单显示的话，需要传递一个`target` 参数，该参数是一个`HTMLElement` 类型数据。

<br />

```js
<template>
  <div>
    <lkButton @click="handleClick(0, $event)"> - click me - </lkButton>
    <lkButton @click="handleClick(1, $event)"> - click me - </lkButton>
    <lk-popupmenu
      :visible.sync="visibility"
      :coord="coord"
      :target="target"
      :data="popupmenuData"
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
          { label: "Github⭐",link:"https://github.com/lakei-edward", id: 4, icon: "Star" },
          { label: "线上活动", id: 2, dot: true },
          { label: "设计大赛", id: 0, icon: "Hot" },
          { label: "专题策划", id: 1 },
          { label: "个人博客", link:"http://43.142.176.173/lakeiedward/",id: 3, icon: "New" },
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
    handleClick(e) {
      this.visibility = true;
      this.coord.x = e.pageX;
      this.coord.y = e.pageY;
      this.target = e.target;
      this.data = this.popupmenuData[index];
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
```

### Attributes

| 参数     | 说明         | 类型    | 可选值                                      | 默认值 |
| :------- | :----------- | :------ | :------------------------------------------ | :----- |
| visibility  | 控制显隐 | boolean | —                                           | false  |
| target    | 点击除菜单其他区域，取消菜单显示 | HTMLElement | —                                           | —  |
| data    | 弹出菜单数据 | object | —                                           | —  |
| coord    | 坐标 | object | —                                           | —  |

### Events
| 参数     | 说明        | 回调参数 |
| :------- | :----------- | :------ | :------------------------------------------ | :----- |
| chick  | 单击弹出菜单的每一项触发 | 选中当前行的数据  |

<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 30%;
}
table th:nth-of-type(3) {
    width: 10%;
}
</style>