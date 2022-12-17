# Contextmenu

### 右键菜单
<br />

可以在下方`li` 标签内尝试轻轻的点击你的右键💡

<br />

<Contextmenu></Contextmenu>

#### 代码
<br />

当我们使用右键菜单组件时，只需要在需要的地方绑定右键事件，传递两个参数`visible` 和 `ctxmenu` 即可；

<br />

使用`ctxmenu` 参数向组件内传递一些必要的信息；其中 `x`  `y` 的坐标为必传项；`context` 为向组件内传递选中节点的信息，右键时通过作用域插槽的`scope.info` 可以获取到该节点的内容,用来一些操作等

```js
<template>
  <div>
    <ul>
      <li
        v-for="(item, index) in data"
        :key="item.id"
        @contextmenu.prevent="contextmenuEvent(item, index, $event)"
      >
        {{ item.label }}
      </li>
    </ul>
    <lk-contextmenu :visible.sync="visibility" :ctxmenu="menuInfo">
      <template v-slot="scope">
        <div @click="insert(scope.info)">😀 新增</div>
        <div @click="remove(scope.info)">😳 删除</div>
        <lk-divider></lk-divider>
        <div @click="back">😏 后退一步</div>
        <div @click="print">😋 打印</div>
        <div @click="refresh">🤣 重新加载</div>
      </template>
    </lk-contextmenu>
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
    };
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
```

### Attributes

| 参数     | 说明         | 类型    | 可选值                                      | 默认值 |
| :------- | :----------- | :------ | :------------------------------------------ | :----- |
| visibility  | 控制显隐 | boolean | —                                           | false  |
| ctxmenu    | 上下文信息 | object | —                                           | —  |
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