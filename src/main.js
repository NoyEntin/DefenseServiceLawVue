import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');

createApp(App).use(store).mount('#app')