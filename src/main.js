
import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'


const app = createApp(App).use(i18n)
app.use(BootstrapVue3)
app.use(router)
app.config.devtools = true
//myV3App
//    .use(SomePlugin)
//    .use(router)
//import App from './App.vue'

//createApp(App).mount('#app')
app.mount('#app')