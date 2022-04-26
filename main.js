import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import uView from "uview-ui";
import CustomNav from '@/components/custom-nav.vue'
import HomeTitle from '@/components/home-title.vue'
import GoodItem from '@/components/good-item.vue'
Vue.use(uView);
Vue.component('CustomNav', CustomNav)
Vue.component('HomeTitle', HomeTitle)
Vue.component('GoodItem', GoodItem)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
