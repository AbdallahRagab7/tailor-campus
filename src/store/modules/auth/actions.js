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
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      // console.log(response.ok)
      const error = new Error(responseData.message || "Failed in request.");
      throw error;
    }

    if (responseData.token === "unauthurized token") {
      console.log(responseData.massage);
      console.log("unauthor token");
      const error = new Error(
        responseData.massage || "Failed to authenticate. Check your login data."
      );
      throw error;
      // lw 7sl error hna ,, elmethod el bt3ml dispatch ly el action dh
      // hysm3 error hnak fi el catch
      // y3ny akn el action mkmlsh
      // fmsh hykml el try (this.router.replace)
    }

    console.log(responseData);

    if (responseData.token != "unauthurized token") {
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("userId", responseData.userID);
      localStorage.setItem("role", responseData.role);

      context.commit("setUser", {
        token: responseData.token,
        userId: responseData.userID,
        role: responseData.role,
      });
    }
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
    console.log(responseData);

    // if (!response.ok) {
    //   // console.log(response.ok)
    //   const error = new Error(responseData.message || "Failed in request.");
    //   throw error;
    // }

    if (responseData.massage === "password not correct") {
      // console.log(response.ok)
      const error = new Error(responseData.message || "Password not correct.");
      throw error;
    }

    if (responseData.massage === "email is wrong") {
      const error = new Error(responseData.message || "Password not correct.");
      throw error;
    }

    if (responseData.token != "unauthurized token") {
      localStorage.setItem("token", responseData.token);
      localStorage.setItem("userId", responseData.userID);
      localStorage.setItem("role", responseData.role);

      context.commit("setUser", {
        token: responseData.token,
        userId: responseData.userID,
        role: responseData.role,
      });
    }
  },

  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    // localStorage.clear()

    context.commit("setUser", {
      token: null,
      userId: null,
      role: null,
    });
  },

  autoLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    if (token && userId) {
      context.commit("setUser", {
        token: token,
        userId: userId,
        role: role,
      });
    }
  },

  // registerinstructor
  // fields in controllers , user auth
  
  async signupInstructor(context, payload) {
    // const formData = new FormData();
    // formData.append('image', payload.image)
    const Data = new FormData();
    Data.append("Name", payload.Name);
    Data.append("Email", payload.Email);
    Data.append("password", payload.password);
    Data.append("gender", gender);
    Data.append("Mobile_Number_One", payload.Mobile_Number_One);
    Data.append("aboutme", payload.aboutme);
    Data.append("speciality", payload.speciality);
    Data.append("image", payload.image);

    const response = await fetch("http://localhost:4000/register/instructor", {
      method: "POST",
      body: Data,
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      // console.log(response.ok)
      const error = new Error(responseData.massage || "Failed in request.");
      throw error;
    }

    // if (responseData.token === "unauthurized token") {
    //   console.log(responseData.massage);
    //   console.log("unauthor token");
    //   const error = new Error(
    //     responseData.massage || "Failed to authenticate. Check your login data."
    //   );
    //   throw error;
    // }

    // if (responseData.token != "unauthurized token") {
    //   localStorage.setItem("token", responseData.token);
    //   localStorage.setItem("userId", responseData.userID);
    //   localStorage.setItem("role", responseData.role);

    //   context.commit("setUser", {
    //     token: responseData.token,
    //     userId: responseData.userID,
    //     role: responseData.role,
    //   });
    // }
  },
};
