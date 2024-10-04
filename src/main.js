import { createApp } from 'vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css'
import App from './App.vue'
import router from './router/routes'

const app = createApp(App);

app.use(router);

app.mount('#app');
AOS.init();
