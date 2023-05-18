export default {
    userId(state) {
      return state.userId;
    },
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
     // to change string to boolean
      // if there is token = true ,, else false
    },
    role (state) {
      return state.role
    }

  };