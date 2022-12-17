<template>
  <div>
    <lk-Buttongroup
      :data="lkbuttonGroups"
      :colorHover="colorHover"
      :colorText="colorText"
      :line="line"
      @click="handleClick"
    ></lk-Buttongroup>
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
    line: Boolean,
  },
  data() {
    return {
      lkbuttonGroups: [{ label: "你的名字" }, { label: "天气之子" }],
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