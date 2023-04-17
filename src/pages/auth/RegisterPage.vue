<template>
  <section class="page-wrapper">
    <base-card class="basecard">
      <h1>Register</h1>
      <form class="form" @submit.prevent="number">
        <div class="grid-box">
          <div class="form-ctrl">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="First Name" />
          </div>

          <div class="form-ctrl">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Last Name" />
          </div>

          <div class="form-ctrl">
            <label for="username">User Name</label>
            <input type="text" id="username" placeholder="UserName" />
          </div>

          <div class="form-ctrl">
            <label for="email"> Email Address</label>
            <input type="email" id="email" placeholder="Your Email" />
          </div>

          <div class="form-ctrl">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>

          <div class="form-ctrl">
            <label for="re-enter-password">Re-Enter Password"</label>
            <input
              type="password"
              id="re-enter-password"
              placeholder="Re-Enter Password"
            />
          </div>
        </div>
        <div>
          <label for="birthday" class="birth">Birthday:</label>
          <input
            type="date"
            v-model="birth"
            id="birthday"
            min="1997-01-01"
            max="2030-12-31"
          />
        </div>

        <div>
          <vue-tel-input v-model="phone" class="telephone"></vue-tel-input>
        </div>

        <div class="form-ctrl">
          <div>
            <input type="checkbox" id="terms" name="terms" />
            <label for="terms">Accept The Terms And Privacy Policy</label>
          </div>
        </div>

        <div>
          <p class="register">
            Already have an account?
            <router-link to="/login">Log in</router-link>
          </p>
        </div>

        <div>
          <button type="submit" class="login-btn">Sign Up</button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      phone: null,
      birth: null,
    };
  },
  methods: {
    number() {
      console.log(this.phone);
      console.log(this.birth);
    },
  },
};
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
  max-width: 42rem;
}
.form-ctrl {
  margin-bottom: 1.5rem;
}

.form-ctrl label,
.birth {
  font-family: var(--theme-secondary-font);
  color: #696969;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 0.4rem;
  text-transform: uppercase;
}
input,
input[type="date"] {
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

input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

.register {
  color: var(--theme-text-color);
  font-family: var(--theme-secondary-font);
  font-size: 16px;
}

.register {
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
  transition: all 0.4s ease;
}

.grid-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
}

.telephone {
  padding: 0.3rem;
  /* background: #f5f5f5; */
  margin-bottom: 1rem;
  
}
input[type="date"] {
  margin-bottom: 1rem;
  /* font-family: ; */
  color: rgb(68, 65, 65);
}
</style>
