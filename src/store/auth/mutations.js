export default {
    setUser(state, payload) { 
        // to store user data in vuex , in case login , signup 
          state.token = payload.token;
          state.userId = payload.userId;
          state.tokenExpiration = payload.tokenExpiration;
        },

        // setAutoLogout(state) {
        //   state.didAutoLogout = true;
      
        // }
}