<template>
  <section class="page-wrapper">
    <base-card class="basecard">
      <form class="form"  @submit.prevent="submitForm">
        <h1>Login</h1>
        <div class="form-ctrl">
          <label for="email" class="test">Username Or Email Address</label>
          <input type="email" id="email" placeholder="Username or Email" v-model="email"/>
        </div>

        <div class="form-ctrl">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Password" v-model="password"/>
        </div>

        <div class="form-ctrl remember-forgot"> <!-- will be flex space between -->
          <div  > 
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember Me</label>
          </div>

          <div>
            <router-link to="/register" class="forgot-pw">Forgot password?</router-link>
          </div>
        </div>

        <div>
          <p class="register">
            Don't have an account yet?
            <router-link to="/register">Sign Up for Free</router-link>
          </p>
        </div>

        <!-- <div> -->
          <button  class="login-btn">Login</button>
        <!-- </div> -->
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {

      email: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    async submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      ) {
        this.formIsValid = false;
      
      }

      this.isLoading = true;

      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        console.log('test')
        this.$router.replace("/home");

      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later.";
      } 
      console.log(this.error)

      this.isLoading = false;
    },
  },

}
</script>

<style scoped>
h1 {
  text-align: center;
  color: black;
  margin-bottom: 2rem;
}
.page-wrapper {
  background-color: #f8f8f8;
  padding: 2rem 0;
}

.basecard {
  padding: 3.5rem;
  max-width: 30rem;

}
.form-ctrl {
  margin-bottom: 1.5rem;
}

.form-ctrl label {
  font-family: var(--theme-secondary-font);
  color: #696969;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}
input {
  background: #f5f5f5;
  width: 100%;
  display: block;
  width: 100%;
  padding: 0.7rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: all 0.3s ease-in-out;
}

::placeholder {
  color: grey;
  font-size: 0.8rem;
  text-transform: uppercase;
  position: relative;
  left: 0.5rem;
}

.remember-forgot{
  display: flex;
  justify-content: space-between;
}

input[type='checkbox'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}


.register {
  color: var(--theme-text-color);
  font-family: var(--theme-secondary-font);
  font-size: 16px;
}

.forgot-pw {
 color: var(--theme-primary-color);
}

.forgot-pw:hover {
color: #333;
transition: all 0.3s ease-in-out;
}

.register{
  text-align: center;
}

.login-btn {
    color: #fff;
   background: var(--theme-secondary-color);
   font-weight: 600;
    padding: 0.6rem 1.4rem;
    cursor: pointer;
    border: 0;
    border-color: #43454b;
    border-radius: 4px;
    width: 100%;
}
.login-btn:hover {
  background: var(--theme-primary-color);
  transition: all .4s ease;
}

</style>
