# Buttongroup

### 基础用法

<br />

你更喜欢看哪个动漫呢？

<br />

<Buttongroup></Buttongroup>

```js
<template>
  <div>
    <lk-Buttongroup
      :data="data"
      @click="handleClick"
    ></lk-Buttongroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [{ label: "天气之子" }, { label: "你的名字" }],
    };
  },
  methods: {
    // 按钮组点击事件
    handleClick(val) {
      console.log(val);
    },
  },
};
</script>
```

### 默认选择

<br />

我选择《你的名字》这部动漫

<br />

<Buttongroup :current = "1"></Buttongroup>

```js
<template>
  <div>
    <lk-Buttongroup
      :data="data"
      :current="1"
    ></lk-Buttongroup>
  </div>
</template>
```


### 文本按钮组

<br />

<div>
  <Buttongroup line colorHover ="#0e67b1"></Buttongroup>
</div>

```js
<template>
  <div>
    <lk-Buttongroup
      line
      :data="data"
      colorHover ="#0e67b1"
      @click="handleClick"
    ></lk-Buttongroup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [{ label: "天气之子" }, { label: "你的名字" }],
    };
  },
  methods: {
    // 按钮组点击事件
    handleClick(val) {
      console.log(val);
    },
  },
};
</script>
```

### Attributes

| 参数     | 说明         | 类型    | 可选值                                      | 默认值 |
| :------- | :----------- | :------ | :------------------------------------------ | :----- |
| data    | 按钮组数据 | object | —                                           | —     |
| colorHover  | 切换文本颜色，仅对line有效 | string | —                                           | #000  |
| colorText  | label字体颜色 | string | —                                           | #555  |
| current  | 默认选择 | number | —                                           | 0  |
| line    | 类型 | boolean | —                                           | false  |

### Events
| 参数     | 说明        | 回调参数 |
| :------- | :----------- | :------ | :------------------------------------------ | :----- |
| chick  | 单击按钮时触发 | 选中按钮的数据  |

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