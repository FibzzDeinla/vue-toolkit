import Vue from 'vue';
import App from './App';
import VueRouter from "vue-router";
import router from './router/index'
import store from "./store";
import IconComponent from "./components/Icon/index.vue";
import Clipboard from "@/components/Clipboard/index.vue";
import './helpers'
import $ from 'jquery';
(window as any).$ = $;
(window as any).jQuery = $;

import Default from './layout/default.vue'

import "element-ui/lib/theme-chalk/index.css";
import "nprogress/nprogress.css";
import "./assets/fonts/amsicons/style.css";
import "node-waves/dist/waves.css";
import "./assets/scss/style.scss";

import "./assets/vendor/kendo/styles/kendo.common.min.css";
import "./assets/vendor/kendo/styles/kendo.default.min.css";
require("./assets/vendor/wavesjs/waves.js");
require("./assets/vendor/kendo/js/kendo.all.min.js");
require("./assets/vendor/kendo/extensions/KFlexGrid.js");

import {
  Card,
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Button,
  Select,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Tabs,
  TabPane,
  Header,
  Footer,
  Aside,
  Main,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Notification,
  Message,
  Pagination,
  Table,
  TableColumn
} from "element-ui";

Vue.config.productionTip = false;

Vue.use(Card);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(VueRouter);

Vue.component('default-layout', Default)

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component("icon", IconComponent);
Vue.component('clipboard', Clipboard);

new Vue({
  el: '#app',
  store: store,
  router: router,
  render: h => h(App),
});