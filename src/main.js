import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import 'vue-preloaders/dist/vue-preloaders.css'
import VuePreloaders from 'vue-preloaders'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import firebase from 'firebase/app'
import store from './store'
// import 'firebase/firestore'

Vue.use(BootstrapVue);

Vue.component('loading',{ template: '<div>Loading!</div>'})
Vue.config.productionTip = false;
Vue.use( VueSplide );
Vue.use(VuePreloaders, /*{ options }*/)


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app");

