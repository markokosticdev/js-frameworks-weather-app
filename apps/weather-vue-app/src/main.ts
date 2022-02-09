import {createApp} from 'vue';
import App from './app/App.vue';
import router from "./app/router/app-router";
import {filters} from "./app/filters";

const app = createApp(App)

app.use(router)

app.config.globalProperties['$filters'] = filters

app.mount('#app');
