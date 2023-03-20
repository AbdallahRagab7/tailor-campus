<template>
  <section>
    <div class="header-topbar topbar-style-1">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-xl-8 col-lg-8 col-sm-6">
            <div class="header-contact text-center text-sm-start text-lg-start">
              <a href="#" class="">1010 Moon ave, New York, NY US</a>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-sm-6">
            <div class="header-socials text-center text-lg-end">
              <ul class="list-inline align-items-center">
                <li class="list-inline-item mx-2">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="list-inline-item mx-2">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li class="list-inline-item mx-2">
                  <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </li>
                <li class="list-inline-item mx-2">
                  <a href="#"><i class="fab fa-pinterest"></i></a>
                </li>
                <li class="list-inline-item mx-2">
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="header-navbar">
      <div class="menus">
        <div class="logo">
          <router-link to="/home">Tailor Campus</router-link>
        </div>

        <div class="Categories">
          <router-link to="/home" class="primary-menu">
            <i class="fa fa-th me-2"></i> Categories</router-link
          >
        </div>

        <div class="primary-menu-items">
          <router-link to="/home" class="primary-menu">Home</router-link>
          <router-link to="/home" class="primary-menu">About</router-link>
          <router-link to="/home" class="primary-menu">Courses</router-link>
          <router-link to="/home" class="primary-menu">Blog</router-link>
          <router-link to="/home" class="primary-menu">Contact</router-link>
        </div>

        <div class="auth">
          <router-link to="/login" class="login">Login</router-link>
          <router-link to="/register" class="signup">Sign up</router-link>
        </div>
      </div>
      <!--  end of menus-->
    </div>
    <!--  end of-->
  </section>
</template>

<style>

@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@700&family=Oleo+Script:wght@700&family=Quicksand:wght@300;500;700&display=swap");
.header-topbar {
  background-color: #031f42;
  /* padding: 0.0rem; */
}
.header-contact a {
  text-decoration: none;
  color: #fff;
  font-family: "Jost";
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  bottom: 0.1rem;
}
.header-socials {
  position: relative;
  top: 0.4rem;
}
.topbar-style-1 .header-socials a:hover {
  color: var(--theme-primary-color);
}

.logo a {
  color: black;
  /* font-family: "Gilroy"; */
  font-size: 1.3rem;
  /* font-weight: bold; */
  margin: 0;
  font-family: "Raleway"
}

.logo a:hover {
  color: black;
}

/* .auth .btn {
padding: .5rem;
} */

.header-navbar {
  padding: 25px;

  /* margin: 0; */
  /* background-color: grey; */
  background-color: #fff;
  box-sizing: border-box;
}

.primary-menu {
  font-weight: 600;
  font-size: 1rem;
  font-family: var(--theme-heading-font);
  color: #222;
  margin: 0 1.25rem;
  transition: all 0.6s ease;

}

.menus {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.primary-menu-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.auth {
  display: flex;
  /* justify-content: space-between; */
}
.auth a {
  margin: 0 1rem;
}

.signup {
  border-color: var(--theme-secondary-color);
  color: #fff;
  background: var(--theme-secondary-color);
  font-weight: 600;
  padding: 3px 15px;
  border-radius: 0.25rem;
  font-size: 16px;
  border: 2px solid transparent;
  transition: all 0.6s ease;
}
.signup:hover {
  background: var(--theme-primary-color);
  color: #fff;
  border-color: var(--theme-primary-color);
}

.login {
  color: #000;
  font-family: var(--theme-secondary-font);
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  position: relative;
  top: 0.1rem;
  transition: all 0.3s ease-in-out;
}

.login:hover {
  color: var(--theme-primary-color);
}
</style>
