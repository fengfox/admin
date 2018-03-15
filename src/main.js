// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import store from './vuex/store';
//引入element-ui的默认CSS样式
import 'element-ui/lib/theme-default/index.css';
// 引入样式
import 'vue-easytable/libs/themes-base/index.css';
// 导入 table 和 分页组件
import {VTable,VPagination} from 'vue-easytable';

// 注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.use(ElementUI);
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  beforeCreate:function(){
    console.log('beforeCreated.....');
  }
})
