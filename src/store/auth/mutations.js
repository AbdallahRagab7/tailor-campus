export default {
    setUser(state, payload) { 
        // to store user data in vuex , in case login , signup 
        // login , signup have same strucure so , we make only one method for both
        // lw api 72e2ya h3ml 2 mutations , wa7da ly el login w el tanya ly el sign up 
          state.token = payload.token;
          state.userId = payload.userId;
        },

        // setAutoLogout(state) {
        //   state.didAutoLogout = true;
      
        // }
}