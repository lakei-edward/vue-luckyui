# Divider

### 基础用法
<br />

<div>
  <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
  <lk-divider ></lk-divider>
  <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
  <lk-divider color="#ff001245"></lk-divider>
</div>

```js
<span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
<lk-divider ></lk-divider>
<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
<lk-divider color="#ff001245"></lk-divider>
```

### 垂直分割
<br />
<div>
  <span>雨纷纷</span>
  <lk-divider vertical></lk-divider>
  <span>旧故里</span>
  <lk-divider vertical ></lk-divider>
  <span>草木深</span>
</div>

```js
<span>雨纷纷</span>
<lk-divider vertical></lk-divider>
<span>旧故里</span>
<lk-divider vertical></lk-divider>
<span>草木深</span>
```

### 设置文案
<br />

<div>
  <span>中间</span>
  <lk-divider position="center">vue-luckyui</lk-divider>
  <span>靠右</span>
  <lk-divider position="right">vue-luckyui</lk-divider>
  <span>靠左</span>
  <lk-divider position="left">vue-luckyui</lk-divider>
</div>

```js
<div>
  <span>中间</span>
  <lk-divider position="center">vue-luckyui</lk-divider>
  <span>靠右</span>
  <lk-divider position="right">vue-luckyui</lk-divider>
  <span>靠左</span>
  <lk-divider position="left">vue-luckyui</lk-divider>
</div>
```


### Attributes

| 参数     | 说明         | 类型    | 可选值                            | 默认值 |
| :------- | :----------- | :- | :----------------------------------- | :----- |
| vertical    | 方向         | string  | vertical                      | —      |
| position    | 设置文案的位置 | string | left/center/right              | —   |
| color       | 颜色       | string | —                                 | —   |
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