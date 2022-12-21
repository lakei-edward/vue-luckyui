#### 📃 参考文档
<a href="http://43.142.176.173/vue-luckyui/" target="_blank">vue-luckyui中文文档地址</a>

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