export default {
    setUser(state, payload) { 
        // to store user data in vuex , in case login , signup 
          state.token = payload.token;
          state.userId = payload.userID;
          // state.tokenExpiration = payload.tokenExpiration;
          state.role = payload.role;
        },


}