---


title: 快速上手
date: 2022-03-24 15:12:58
permalink: /luckyui/home/
article: false
---

#### 📦 下载

```sh
$ npm install vue-luckyui -S
#或者
$ pnpm install vue-luckyui -S
```

#### 🔨 使用

在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import luckyui from 'vue-luckyui';
import "vue-luckyui/lib/index.min.css"
import App from './App.vue';

Vue.use(luckyui)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 🎨 按需引入

如果你只希望引入部分组件，比如 Button 和 Contextmenu，那么需要在 main.js 中写入以下内容：

```js
import Vue from 'vue';
import { Button,Contextmenu } from 'vue-luckyui';

Vue.component(Button.name, Button)
Vue.component(Contextmenu.name, Contextmenu)

/* 或写为
 * Vue.use(Button)
 * Vue.use(Contextmenu)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```