import { createApp } from 'vue'
import App from './App.vue'
import store from '.././store'
import $ from 'jquery'
window.$ = window.jQuery = require('jquery');
import VCalendar from 'v-calendar';

import 'babel-polyfill'
import '@/plugins/vuetify'

createApp(App).use(store).use(VCalendar, {}).mount('#app');