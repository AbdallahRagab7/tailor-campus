export default {
  async signup(context, payload) {
    const response = await fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        gender: payload.gender,
        name: payload.name,
        Mobile_Number_One: payload.Mobile_Number_One,
        DOB: payload.DOB,
        // returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData.massage);
      const error = new Error(
        responseData.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    console.log(responseData);

    localStorage.setItem("token", responseData.token);
    localStorage.setItem("userId", responseData.userID);

    context.commit("setUser", {
      token: responseData.token,
      userId: responseData.userID,
      role: responseData.role,
    });
  },

  async login(context, payload) {
    //send a request to create a new user
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }),

      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData); //to see what in responseData in fail case
      const error = new Error(
        responseData.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }
    this.$router.replace("/home");

    console.log(responseData); //to see what in responseData in success case
    localStorage.setItem("token", responseData.token);
    localStorage.setItem("userId", responseData.userID);

    context.commit("setUser", {
      token: responseData.token,
      userId: responseData.userID,
      role: responseData.role,
    });
  },

  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    context.commit("setUser", {
      token: null,
      userId: null,
      tokenExpiration: null,
    });
  },

  autoLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        tokenExpiration: tokenExpiration,
      });
    }
  },
};
