<template>
  <div>
    <lk-Buttongroup
      :data="data"
      :colorHover="colorHover"
      :colorText="colorText"
      :line="line"
      :current="current"
      @click="handleClick"
    ></lk-Buttongroup>
    <component
      v-if="lkButtongroup"
      :is="lkButtongroup"
      :data="data"
      :colorHover="colorHover"
      :colorText="colorText"
      :line="line"
      :current="current"
      @click="handleClick"
    >
    </component>
  </div>
</template>
<script>
export default {
  props: {
    colorHover: {
      tyep: String,
      default: "#000",
    },
    colorText: {
      tyep: String,
      default: "#555",
    },
    current: {
      tyep: Number,
      default: 0,
    },
    line: Boolean,
  },
  data() {
    return {
      data: [{ label: "天气之子" }, { label: "你的名字" }],
      lkButtongroup: null,
    };
  },
  mounted() {
    import("vue-luckyui").then((res) => {
      this.lkButtongroup = res.default.ButtonGroup;
    });
  },
  methods: {
    // 按钮组点击事件
    handleClick(val) {
      console.log(val);
    },
  },
};
</script>