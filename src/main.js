import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/styles/taiwind.css'
import '../src/assets/styles/global.css'
import '../src/assets/icofont.css'
import '../src/assets/styles/nunito-font.css'
import {registerComponent} from "./utils/import";

const app = createApp(App)
registerComponent(app)
app.use(store)
app.use(router)
app.mount('#app')
