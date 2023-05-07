import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'bootstrap/dist/css/bootstrap.css'

// import './assets/styles/blog.css'
// import './assets/styles/responsive.css'
// import './assets/styles/style.css'
// import './assets/styles/woocomerce.css'
// import './assets/styles/style.css'

// require('@/assets/styles/main.css')


import router from './router.js';
// import store from './store/index.js';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';

// Vue.use(VueTelInput);

const app = createApp(App);
app.use(router);
app.use(VueTelInput)
// app.use(VueTelInput, [globalOptions = {}]

// app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
// app.component('vue-tel-input' , VueTelInput)

app.mount('#app')
