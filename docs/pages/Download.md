# Download

### 说明
<br />

本组件方法根据html2canvas进行封装；使得使用的时候省去大量的时间去配置繁琐的html2canvans。

### 正常下载

<br />

可以扫描下方二维码，查看**手机版的文档**；

在输入框中输入文字或者地址，即可刷新二维码，再点击下载图片到本地，即可把二维码保存到本地中。

<br />

  <download></download>

#### 代码

<br />


下载图片使用`vue-luckyui` 提供的全局`$downLoadImage`方法；第一个参数为`HTMLElement`类型元素；第二个参数为下载图片的标题，第三个参数为图片的清晰度，数值越高越清晰。

<br />

使用方法：`this.$downLoadImage(HTMLElement,title[,sharpness])`


```js
<template>
  <div>
    <div class="code">
      <div id="qrcode"></div>
    <div class="code_dis">扫一扫</div>
    <lk-button size="large" @click="downLoadImage"> 下载图片到本地 </lk-button>
  </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  methods: {
    //下载二维码
    downLoadImage() {
      const qrcode = document.getElementsByClassName("code")[0];
      this.$downLoadImage(qrcode, "二维码");
    },
  },
};
</script>
```

### 清晰度

<br />

第三个参数为图片的清晰度，数值越高越清晰。

#### sharpness默认清晰度

<br />


  <download :sharpness="2"></download>

```js
const container = document.getElementsByClassName("content__default")[0];
this.$downLoadImage(container, "Download页面");
```


#### sharpness=5 清晰度

<br />

  <download :sharpness="5" ></download>

```js
const container = document.getElementsByClassName("content__default")[0];
this.$downLoadImage(container, "Download页面", 5);
```

### methods
| 参数     | 说明        | 参数 |
| :------- | :----------- | :------ | :------------------------------------------ | :----- |
| $downLoadImage  | 下载html元素到本地 | (HTMLElement,title[,sharpness])  |

<style>
table th:first-of-type {
    width: 20%;
}
table th:nth-of-type(2) {
    width: 30%;
}
table th:nth-of-type(3) {
    width: 40%;
}
</style>