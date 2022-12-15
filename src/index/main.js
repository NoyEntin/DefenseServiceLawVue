// import '@babel/polyfill'
import "core-js/stable";
import "regenerator-runtime/runtime";
import { createApp } from 'vue'
// import vuetify from '.././plugins/vuetify'
import App from './App.vue'
import store from '.././store'
// import $ from 'jquery'
window.$ = window.jQuery = require('jquery');
import VCalendar from 'v-calendar';


createApp(App).use(store).use(VCalendar, {}).mount('#app');
