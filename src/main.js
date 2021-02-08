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
// import store from './store'
// import 'firebase/firestore'

Vue.use(BootstrapVue);

Vue.component('loading',{ template: '<div>Loading!</div>'})
Vue.config.productionTip = false;
Vue.use( VueSplide );
Vue.use(VuePreloaders, /*{ options }*/)

// firebase.initializeApp({
//   apiKey: "AIzaSyC7lMP336VBz0AxZONRsrngIv-SqYdKoCg",
//       authDomain: "home-servises.firebaseapp.com",
//       projectId: "home-servises",
//       storageBucket: "home-servises.appspot.com",
//       messagingSenderId: "891384366500",
//       appId: "1:891384366500:web:506be845b719437d43ed31",
//       measurementId: "G-D968DDMEV4"
// })
// firebase.auth().onAuthStateChanged(()=>{
//
// })
new Vue({
    // store,
    router,
    render: h => h(App)
}).$mount("#app");


