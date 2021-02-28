import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import 'vue-preloaders/dist/vue-preloaders.css'
import VuePreloaders from 'vue-preloaders'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

Vue.use( VueSplide );
Vue.use(BootstrapVue);
Vue.component('loading',{ template: '<div>Loading!</div>'})
Vue.config.productionTip = false;
Vue.use(VuePreloaders, /*{ options }*/)


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");

