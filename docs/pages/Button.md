# Button

封装组件第一步，我想都会从`Button` 入手吧😬

### 不同尺寸
<br/>

<div>
  <lk-button size="large"> 大型按钮 </lk-button>
  <lk-button> 默认按钮 </lk-button>
  <lk-button size="small"> 小型按钮 </lk-button>
  <lk-button size="mini"> 超小按钮 </lk-button>
</div>

```js
<lk-button> 默认按钮 </lk-button>
<lk-button size="small"> 中型按钮 </lk-button>
<lk-button size="mini"> 小型按钮 </lk-button>
```

### 常规按钮
<br/>

<div>
  <lk-button plain> 常规按钮 </lk-button>
  <lk-button type="primary" plain> 主要按钮 </lk-button>
  <lk-button type="success" plain> 成功按钮 </lk-button>
  <lk-button type="warning" plain> 警告按钮 </lk-button>
  <lk-button type="danger" plain> 危险按钮 </lk-button>
  <lk-button type="info" plain> 提示按钮 </lk-button>
</div>

```js
<lk-button plain>常规按钮</lk-button>
<lk-button type="primary" plain>主要按钮</lk-button>
<lk-button type="success" plain>成功按钮</lk-button>
<lk-button type="warning" plain>警告按钮</lk-button>
<lk-button type="danger" plain>危险按钮</lk-button>
<lk-button type="info" plain>提示按钮</lk-button>
```

### 圆角按钮
<br/>

<div>
  <lk-button round> 圆角按钮 </lk-button>
  <lk-button type="primary" round> 主要按钮 </lk-button>
  <lk-button type="success" round> 成功按钮 </lk-button>
  <lk-button type="warning" round> 警告按钮 </lk-button>
  <lk-button type="danger" round> 危险按钮 </lk-button>
  <lk-button type="info" round> 提示按钮 </lk-button>
</div>

```js
<lk-button round> 圆角按钮 </lk-button>
<lk-button type="primary" round> 主要按钮 </lk-button>
<lk-button type="success" round> 成功按钮 </lk-button>
<lk-button type="warning" round> 警告按钮 </lk-button>
<lk-button type="danger" round> 危险按钮 </lk-button>
<lk-button type="info" round> 提示按钮 </lk-button>
```

### 文字按钮
<br/>

<div>
  <lk-button type="text"> 默认按钮 </lk-button>
  <lk-button type="text" disabled> 默认按钮 </lk-button>
</div>

```js
<lk-button type="text"> 默认按钮 </lk-button>
<lk-button type="text" disabled> 默认按钮 </lk-button>
```

### 禁用状态
<br/>

<div>
  <lk-button disabled> 默认按钮 </lk-button>
  <lk-button round disabled> 默认按钮 </lk-button>
</div>

```js
<lk-button disabled> 默认按钮 </lk-button>
<lk-button disabled round > 默认按钮 </lk-button>
```

### Attributes

| 参数     | 说明              | 类型    | 可选值                                      | 默认值 |
| :------- | :----------- | :------ | :------------------------------------------ | :----- |
| type     | 类型         | string  | primary / success / warning / danger / info/text | —      |
| size    | 尺寸          | string | large / small / mini                         | —     |
| round    | 是否朴素圆角 | boolean | —                                           | false  |
| disabled | 是否朴素禁用 | boolean | —                                           | false  |

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