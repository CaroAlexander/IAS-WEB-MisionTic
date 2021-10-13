import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import SmartTable from 'vuejs-smart-table'


const app= createApp(App);

app.use(router);
app.use(VueSweetalert2)
app.use(SmartTable)
app.mount('#app');
// createApp(App).mount('#app')

