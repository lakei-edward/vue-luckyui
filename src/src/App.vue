<template>
  <div id="app">
    <!-- 默认按钮 -->
    <div ref="qrCodeDiv">
      <lkButton size="large" @click="DownLoadImage"> 下载 </lkButton>
      <lkButton> 默认按钮 </lkButton>
      <lkButton size="small"> 默认按钮 </lkButton>
      <lkButton size="mini"> 默认按钮 </lkButton>
      <lkButton type="primary"> 主要按钮 </lkButton>
      <lkButton type="success"> 成功按钮 </lkButton>
      <lkButton type="warning"> 警告按钮 </lkButton>
      <lkButton type="danger"> 危险按钮 </lkButton>
      <lkButton type="info" @click="handleClick2"> 提示按钮 </lkButton>
    </div>
    <!-- 朴素按钮 -->
    <div>
      <!-- <lkButton > 默认按钮 </lkButton>
      <lkButton type="primary" plain> 主要按钮 </lkButton>
      <lkButton type="success" plain> 成功按钮 </lkButton>
      <lkButton type="warning" plain> 警告按钮 </lkButton>
      <lkButton type="danger" plain> 危险按钮 </lkButton>
      <lkButton type="info" plain> 提示按钮 </lkButton> -->
    </div>
    <!-- 圆角 -->
    <div>
      <lkButton round size="large"> 默认按钮 </lkButton>
      <lkButton round> 默认按钮 </lkButton>
      <lkButton round size="small"> 默认按钮 </lkButton>
      <lkButton round size="mini"> 默认按钮 </lkButton>
      <lkButton type="text"> 默认按钮 </lkButton>
      <!-- <lkButton type="primary" round> 主要按钮 </lkButton>
      <lkButton type="success" round> 成功按钮 </lkButton>
      <lkButton type="warning" round> 警告按钮 </lkButton>
      <lkButton type="danger" round> 危险按钮 </lkButton>
      <lkButton type="info" round> 提示按钮 </lkButton> -->
    </div>
    <!-- 圆角 -->
    <div>
      <lkButton circle disabled> 默 </lkButton>
      <!-- <lkButton type="primary" round> 主要按钮 </lkButton>
      <lkButton type="success" round> 成功按钮 </lkButton>
      <lkButton type="warning" round> 警告按钮 </lkButton>
      <lkButton type="danger" round> 危险按钮 </lkButton>
      <lkButton type="info" round> 提示按钮 </lkButton> -->
    </div>
    <!-- 禁用 -->
    <div>
      <lk-Button disabled> 默认按钮 </lk-Button>
      <lk-Button round disabled> 默认按钮 </lk-Button>
      <lk-Button type="text" disabled> 默认按钮 </lk-Button>
    </div>

    <div>
      <lk-Buttongroup :data="lkbuttonGroups" line @click="handleClick"></lk-Buttongroup>
    </div>

    <lk-divider position="right">Lakeiedward</lk-divider>
    <div class="divider">
      <span>雨纷纷</span>
      <lk-divider vertical></lk-divider>
      <span>旧故里</span>
      <lk-divider vertical></lk-divider>
      <span>草木深</span>
    </div>

    <div v-for="(item, index) in mineData" :key="index" @contextmenu.prevent="contextmenuEvent(item, index, $event)">
      {{ item.label }}
    </div>

    <lk-contextmenu :visible.sync="visibility" :ctxmenu="ctxmenu">
      <template v-slot="scope">
        <div @click="insert(scope.info)">😀 新增</div>
        <div @click="cut(scope.info)">😳 删除</div>
        <lk-divider color="#ccc"></lk-divider>
        <div @click="back">😏 后退一步</div>
        <div @click="print">😋 打印</div>
        <div @click="refresh(scope.info)">🤣 重新加载</div>
      </template>
    </lk-contextmenu>
    <!-- <lk-disable-panel></lk-disable-panel> -->
    <lk-popupmenu
      :visible.sync="visibility2"
      :target="popupTarget"
      :data="popupmenuData"
      :coord="coord"
      @click="popupmenuClick"
    ></lk-popupmenu>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      visibility: false,
      visibility2: true,
      ctxmenu: {
        x: null,
        y: null,
        index: 0,
        context: null
      },
      mineData: [{ label: 'Jerry' }, { label: 'Tom' }, { label: 'Nacy' }, { label: 'edward' }],
      lkbuttonGroups: [],
      qrCodeTitle: 'lakeiedward',
      popupmenuData: [],
      menuData: [
        [
          { label: '精彩案例', id: 0, icon: 'Hot' },
          { label: '共创故事', id: 1, icon: 'New' },
          { label: '我要共创', id: 2, dot: true }
        ],
        [],
        [],
        [
          { label: '设计大赛', id: 0, icon: 'Hot' },
          { label: '专题策划', id: 1, icon: '' },
          { label: '线上活动', id: 2, icon: '' },
          { label: '线下活动', id: 3, icon: 'New' },
          { label: '互动投票', id: 4, icon: '' }
        ]
      ],
      coord: {
        x: null,
        y: null
      },
      popupTarget: null
    };
  },
  mounted() {
    if (condition === 2) {
      console.log(3);
    }
    this.lkbuttonGroups = [
      {
        label: '中国',
        value: 0
      },
      {
        label: '日本国',
        value: 1
      },
      {
        label: '韩国',
        value: 2
      },
      {
        label: '大不列颠及北爱尔兰联合王国',
        value: 3
      }
    ];
  },
  methods: {
    DownLoadImage() {
      this.$downLoadImage(document.querySelector('#app'), 'lakei', 2);
    },

    // 左侧点击事件
    popupmenuClick(val) {
      console.log(val);
    },

    // 按钮组点击事件
    handleClick(val, e) {
      console.log(val);
      this.coord.x = e.pageX;
      this.coord.y = e.pageY;
      this.visibility2 = true;
      this.popupmenuData = this.menuData[val.value];
      this.popupTarget = e.target;
    },

    handleClick2(e) {
      this.coord.x = e.pageX;
      this.coord.y = e.pageY;
      this.visibility2 = true;
      this.popupmenuData = this.menuData[0];
      this.popupTarget = e.target;
    },

    doScreenShot() {
      this.$downLoadImage(this.$refs.qrCodeDiv, '我是lakei', 4);
    },

    contextmenuEvent(item, index, e) {
      this.visibility = true;
      this.ctxmenu.context = item;
      this.ctxmenu.context.index = index;
      this.ctxmenu.x = e.pageX;
      this.ctxmenu.y = e.pageY;
    },

    refresh() {
      location.reload();
    },

    back() {
      window.history.back(-1);
    },

    cut(info) {
      this.mineData.splice(
        this.mineData.findIndex((item) => item.label === info.label),
        1
      );
    },

    insert() {
      this.mineData.push({ label: 'Eddy' });
    },

    print() {
      setTimeout(() => {
        window.print();
      });
    },

    handlere() {}
  }
};
</script>

<style lang="scss">
@import '../packages/theme-lucky/src/common/var.scss';
@import '../packages/theme-lucky/src/index.scss';
.divider {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
