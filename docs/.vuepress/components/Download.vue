<template>
  <div>
    <template v-if="!sharpness">
      <div>
        <input
          type="text"
          class="input"
          placeholder="二维码内容"
          @blur="changeContent"
        />
      </div>
      <div class="code">
        <div id="code_box"></div>
        <div class="code_dis">扫一扫</div>
      </div>
      <div class="download">
        <!-- <lk-button size="large" @click="downLoadImage">
          下载图片到本地
        </lk-button> -->
        <component
          v-if="lkButton"
          :is="lkButton"
          size="large"
          @click="downLoadImage"
        >
          下载图片到本地
        </component>
      </div>
    </template>
    <template v-else>
      <!-- <lk-button size="large" @click="downloadSceen">
        下载 Dowmload 页面
      </lk-button> -->
      <component
        v-if="lkButton"
        :is="lkButton"
        size="large"
        @click="downloadSceen"
      >
        下载 Dowmload 页面
      </component>
    </template>
  </div>
</template>
<script>
// import QRCode from "qrcodejs2";
export default {
  props: {
    sharpness: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      mycode: null, //theme-container
      lkButton: null,
      DownLoadImage: null,
    };
  },
  mounted() {
    if (!this.sharpness) {
      this.qrcode(); //调用二维码生成的方法
    }
    import("vue-luckyui").then((res) => {
      console.log(res.default);
      this.lkButton = res.default.Button;
      this.DownLoadImage = res.default.DownLoadImage;
    });
  },
  methods: {
    changeContent(e) {
      this.mycode.clear(); // 清除代码
      this.mycode.makeCode(e.target.value); // 生成另外一个二维码
    },

    //下载二维码
    downLoadImage() {
      const qrcode = document.getElementsByClassName("code")[0];
      this.DownLoadImage(qrcode, "二维码");
    },

    //下载网页
    downloadSceen() {
      const container = document.getElementsByClassName("content__default")[0];
      this.DownLoadImage(container, "download页面", this.sharpness);
    },

    qrcode(text = "http://43.142.176.173/vue-luckyui/") {
      import("qrcodejs2").then((res) => {
        const QRCode = res.default;
        // 第二参数是他的配置项
        this.mycode = new QRCode("code_box", {
          width: 150,
          height: 150,
          text,
        });
      });
    },
  },
};
</script>
<style  scoped>
.input {
  width: 240px;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  outline: none;
}
.code {
  margin-top: 30px;
  width: 200px;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}
.code:hover {
  box-shadow: rgba(12, 2, 48, 0.555) 0px 0px 4px;
}
#code_box {
  margin: 10px;
}
.code_dis {
  text-align: center;
  margin: 15px;
}
.download {
  padding: 30px;
  width: 200px;
  display: flex;
  justify-content: center;
}
</style>