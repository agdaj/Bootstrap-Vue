import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VeeValidate from 'vee-validate'

Vue.use(BootstrapVue);
Vue.use(VeeValidate);

new Vue({
    el: '#app',
    render: h => h(App)
})
