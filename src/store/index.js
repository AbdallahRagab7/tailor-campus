import { createStore } from 'vuex';

// import coachesModule from './modules/coaches/index.js';
import authModule from './auth/index.js'


const store = createStore({
  modules: {
    auth : authModule // no namedspace , to manage coachId in all app(el kont 7attha hna )
  },
  // state() {
  //   return {
  //     userId: 'c3' // initially new coach will take this id
  //     // use it to show or hide register button
  //   };
  // },
  // getters: {
  //   userId(state) {
  //     return state.userId;
  //   }
  // }
});

export default store;


