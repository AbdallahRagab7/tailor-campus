import { createStore } from "vuex";
// import router from "../router.js";


import authModule from "./modules/auth/index.js";

const store = createStore({
  modules: {
    auth: authModule, // no namedspace , to manage Login in all app 
  },
});

export default store;
