require('./bootstrap');

import Welcome from './components/Welcome';
import Home from './components/Home';

window.Vue = require('vue');

Vue.component('welcome', require('./components/Welcome.vue'));
Vue.component('home', require('./components/Home.vue'));



const app = new Vue({
    el: '#app',
    components: {Welcome, Home}
    
    
});