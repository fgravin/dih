import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '../node_modules/@cesium/widgets/Source/widgets.css'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
