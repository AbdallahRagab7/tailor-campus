export default {
  async signup(context, payload) {
    //send a request to create a new user
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBPwO_yiQkE2v2jWTRaK1cSi_03IiQ5rzs",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      console.log(responseData); //to see what in responseData in fail case
      const error = new Error(
        responseData.message || "Failed to authenticate. Check your login data."
      );
      throw error;
    }

    console.log(responseData); //to see what in responseData in success case
    localStorage.setItem("token", responseData.idToken);
    localStorage.setItem("userId", responseData.localId);
    // localStorage.setItem("tokenExpiration", expirationDate);

    context.commit("setUser", {
      token: responseData.idToken,
      userId: responseData.localId,
      tokenExpiration: responseData.expiresIn,
    });
  },
};
