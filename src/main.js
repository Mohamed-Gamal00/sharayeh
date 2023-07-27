import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'normalize.css'
import store from "./store";
// import './assets/main.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueSnip from 'vue-snip'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'
library.add(fas, far, fab)
const app = createApp(App)
.use(store)
app.use(VueSweetalert2)
app.use(VueSnip)
app.use(router)
app.component('FontAwesome', FontAwesomeIcon)
app.mount('#app')
