import Button from '../packages/button/index';
import ButtonGroup from '../packages/buttongroup/index';
import Contextmenu from '../packages/contextmenu/index';
import Divider from '../packages/divider/index';
import DisablePanel from '../packages/disablePanel/index';
import DownLoadImage from '../packages/downLoadImage/index';
import popupMenu from '../packages/popupMenu/index';
const components = [Button, ButtonGroup, Contextmenu, Divider, DisablePanel, popupMenu];

const install = function (Vue, opts = {}) {
  Vue.prototype.$downLoadImage = DownLoadImage;
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Contextmenu,
  Divider,
  DisablePanel,
  ButtonGroup,
  popupMenu,
  DownLoadImage
};
