import { createStore } from "vuex";

import authModule from "./auth/index.js";

const store = createStore({
  modules: {
    auth: authModule, // no namedspace , to manage Login in all app 
  },
});

export default store;
