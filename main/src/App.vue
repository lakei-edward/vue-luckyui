<template>
  <div id="app">
    <!-- 不同尺寸 -->
    <div ref="qrCodeDiv">
      <lkButton size="large" @click="DownLoadImage"> 下载 </lkButton>
      <lkButton> 默认按钮 </lkButton>
      <lkButton size="small"> 默认按钮 </lkButton>
      <lkButton size="mini"> 默认按钮 </lkButton>
    </div>
    <!-- 圆角 -->
    <div>
      <lkButton round size="large"> 默认按钮 </lkButton>
      <lkButton round> 默认按钮 </lkButton>
      <lkButton round size="small"> 默认按钮 </lkButton>
      <lkButton round size="mini"> 默认按钮 </lkButton>
    </div>
    <!-- 文本 -->
    <div>
      <lkButton type="text"> 默认按钮 </lkButton>
      <lkButton type="text" disabled> 默认按钮 </lkButton>
    </div>
    <!-- 禁用状态 -->
    <div>
      <lk-Button disabled> 默认按钮 </lk-Button>
      <lk-Button round disabled> 默认按钮 </lk-Button>
    </div>
    <!-- 不同类型 -->
    <div>
      <lkButton type="primary"> 主要按钮 </lkButton>
      <lkButton type="success"> 成功按钮 </lkButton>
      <lkButton type="warning"> 警告按钮 </lkButton>
      <lkButton type="danger"> 危险按钮 </lkButton>
      <lkButton type="info"> 提示按钮 </lkButton>
    </div>

    <!-- 分割线 -->
    <div class="divider">
      <span>雨纷纷</span>
      <lk-divider vertical></lk-divider>
      <span>旧故里</span>
      <lk-divider vertical></lk-divider>
      <span>草木深</span>
    </div>

    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <lk-divider></lk-divider>
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
    <lk-divider color="#67c0a0"></lk-divider>

    <span>中间</span>
    <lk-divider position="center">vue-luckyui</lk-divider>
    <span>靠右</span>
    <lk-divider position="right">vue-luckyui</lk-divider>
    <span>靠左</span>
    <lk-divider position="left">vue-luckyui</lk-divider>

    <!-- 右键菜单 -->
    <div v-for="(item, index) in mineData" :key="index" @contextmenu.prevent="contextmenuEvent(item, index, $event)">
      {{ item.label }}
    </div>
    <lk-contextmenu :visible.sync="visibility" :ctxmenu="ctxmenu">
      <template v-slot="scope">
        <div @click="insert(scope.info)">😀 新增</div>
        <div @click="cut(scope.info)">😳 删除</div>
        <lk-divider color="#ccc" :space="10"></lk-divider>
        <div @click="back">😏 后退一步</div>
        <div @click="print">😋 打印</div>
        <div @click="refresh(scope.info)">🤣 重新加载</div>
      </template>
    </lk-contextmenu>

    <!-- 按钮组 -->
    <lk-Buttongroup :data="lkbuttonGroups"></lk-Buttongroup>
    <div>
      <lk-Buttongroup line :current="1" colorHover="#0e67b1" :data="lkbuttonGroups"></lk-Buttongroup>
    </div>

    <!-- 弹出菜单 -->
    <lkButton @click="handleClick2(0, $event)"> - click me - </lkButton>
    <lkButton @click="handleClick2(1, $event)"> - click me - </lkButton>
    <lk-popupmenu
      :visible.sync="visibility2"
      :data="data"
      :target="target"
      :coord="coord"
      @click="popupmenuClick"
    ></lk-popupmenu>

    <!-- 禁用下载 -->
    <lk-Buttongroup :current="1" :data="disablePanelData" @click="handleClickPanel"></lk-Buttongroup>
    <lk-disable-panel :contextmenu="contextmenu" :keydown="keydown"></lk-disable-panel>
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
      lkbuttonGroups: [{ label: '你的名字' }, { label: '天气之子' }],
      qrCodeTitle: 'lakeiedward',
      data: [],
      popupmenuData: [
        [
          {
            label: 'Github⭐',
            link: 'http://43.142.176.173/lakeiedward/',
            id: 4,
            icon: 'Star'
          },
          { label: '线上活动', id: 2, dot: true },
          { label: '设计大赛', id: 0, icon: 'Hot' },
          { label: '专题策划', id: 1 },
          {
            label: '个人博客',
            link: 'https://github.com/lakei-edward',
            id: 3,
            icon: 'New'
          }
        ],
        [
          { label: '精彩案例', id: 0, icon: 'Hot' },
          { label: '共创故事', id: 1, icon: 'New' },
          { label: '我要共创', id: 2, dot: true }
        ]
      ],
      coord: {
        x: null,
        y: null
      },
      popupTarget: null,
      disablePanelData: [
        { name: 'all', label: '全部禁用' },
        { name: 'keydown', label: '禁用F12' },
        { name: 'contextmenu', label: '禁用右键' },
        { name: 'open', label: '全部开启' }
      ],
      contextmenu: false,
      target: null,
      keydown: true
    };
  },
  methods: {
    handleClickPanel(val) {
      if (val.name === 'all') {
        this.contextmenu = true;
        this.keydown = true;
      } else if (val.name === 'keydown') {
        this.keydown = true;
        this.contextmenu = false;
      } else if (val.name === 'contextmenu') {
        this.contextmenu = true;
        this.keydown = false;
      } else {
        this.contextmenu = false;
        this.keydown = false;
      }
    },

    DownLoadImage() {
      this.$downLoadImage(document.querySelector('#app'), 'lakei', 2);
    },

    // 左侧点击事件
    popupmenuClick(val) {},

    handleClick2(index, e) {
      this.data = this.popupmenuData[index];
      this.visibility2 = true;
      this.coord.x = e.pageX;
      this.coord.y = e.pageY;
      if (index) {
        this.target = e.target;
      } else {
        this.target = null;
      }
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
    }
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
