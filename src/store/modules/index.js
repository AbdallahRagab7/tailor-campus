// import { create } from "core-js/core/object";
import { createStore } from "vuex";

const store = createStore({
modules: {
    auth: authModule
}

});

export default store ;