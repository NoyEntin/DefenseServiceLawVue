import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');

createApp(App).mount('#app')