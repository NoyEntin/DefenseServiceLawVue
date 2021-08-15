import "core-js/stable";
import "regenerator-runtime/runtime";
import { createApp } from 'vue'
import App from './App.vue'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');
import VCalendar from 'v-calendar';

createApp(App).use(VCalendar, {}).mount('#app');