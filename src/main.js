import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'


// Import our custom CSS
// import '../scss/styles.scss'
import '../src/assets/all.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bootstrap)
app.use(VueAxios, axios)


app.mount('#app')
