import { createApp } from 'vue'
import App from './App.vue'
import store from '.././store'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');
// const createjs = window.createjs;

createApp(App).use(store).mount('#app');