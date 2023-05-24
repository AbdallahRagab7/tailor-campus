<template>
  <section>
    <div class="header-topbar topbar-style-1">
      <div class="container">
        <div class="row justify-content-between align-items-center">
          <div class="col-xl-8 col-lg-8 col-sm-6">
            <div class="header-contact text-center text-sm-start text-lg-start">
              <!-- <a href="#" class=""> 1ST Elseyouf Alexandria</a> -->
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
          <router-link to="/home">Tailored Campus</router-link>
        </div>

        <div
          class="Categories"
          @mouseover="showDropdown"
          @mouseleave="hideDropdown"
        >
          <p class="primary-menu">
            <i class="fa fa-th me-2 categories-icon"></i> Categories
          </p>
          <div v-if="isDropdownVisible" class="dropdown-menu">
            <ul>
              <router-link to="/courses"><li>Development</li></router-link>
              <router-link to="/courses"><li>Business</li></router-link>
              <router-link to="/courses"><li>Design</li></router-link>
              <router-link to="/courses"><li>IT & Software</li></router-link>
            </ul>
          </div>
        </div>

        <div class="primary-menu-items">
          <router-link to="/home" class="primary-menu">Home</router-link>
          <router-link to="/courses" class="primary-menu">Courses</router-link>
          <router-link to="/instructors" class="primary-menu"
            >Instructors</router-link
          >
          <router-link to="/Educational-Partners" class="primary-menu"
            >Edu Partners</router-link
          >

          <router-link to="/admin" class="primary-menu" v-if="role === 'admin'"
            >Admin</router-link
          >
        </div>

        <div class="loggedIn" v-if="isLoggedIn">
          <router-link to="/myLearning">My Learning</router-link>

          <div class="addtocart">
            <router-link to="/cart" class="cart"
              ><i class="fa-solid fa-cart-shopping cart-icon"></i
            ></router-link>
                <p class="numOfCards" v-if="cards.length>0">{{cards.length}}</p>
          </div>

          <router-link to="/wishlist" class="wishlist mx-2"
            ><i class="fa-regular fa-heart"></i
          ></router-link>

          <!-- <router-link to="/cart">UserName</router-link> -->
          <button @click="logout" class="logout">Logout</button>
        </div>

        <div class="auth" v-if="!isLoggedIn">
          <router-link to="/login" class="login">Login</router-link>
          <router-link to="/register" class="signup">Sign up</router-link>
        </div>
      </div>
      <!--  end of menus-->
    </div>
    <!--  end of-->
  </section>
</template>

<script>
export default {
  data() {
    return {
      isDropdownVisible: false,
      // isAdmin : localStorage.getItem("role"), 
      // kda lw 3mlt logut el token httms7 mn localStorage , bas htfdl mt5zna fi el variable dh 
      // msh httms7 mn el variable 8er ama a3ml
      cards : ''
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
    role (){
      return this.$store.getters.role;
    }
    
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.replace("/home");
    },
    showDropdown() {
      this.isDropdownVisible = true;
    },
    hideDropdown() {
      this.isDropdownVisible = false;
    },
    async userCart() {
      try {
        const response = await fetch(
          "http://localhost:4000/cart",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        // console.log(response);
        const responseData = await response.json();
        this.cards = responseData.arrayOfcourses
        console.log(responseData);
        if (!response.ok) {
          const error = new error(responseData.message || "Failed to Fetch");
          throw error;
        }
      } catch (error) {
        this.error = error.message || "something wrong";
      }
    },
  },

  created () {
    this.userCart()
  }
  }


//   created (){
//   isAdmin() 
// }

</script>

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
  font-family: "Raleway";
}

.logo a:hover {
  color: black;
}

.header-navbar {
  padding: 25px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 6px 15px 0px;
}

.primary-menu {
  font-weight: 600;
  font-size: 1.091rem;
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
  align-items: center;
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

.logout {
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

.router-link-active {
  color: rgb(54, 54, 167);
}

.fa-cart-shopping {
  height: 1.1rem;
}
.loggedIn {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
}
.loggedIn .fa-heart,
.fa-cart-shopping {
  /* width: 30px; */
  color: black;
  height: 20px;
}

.loggedIn .fa-heart:hover,
.fa-cart-shopping:hover {
  color: #031f42;
  /* transition: all 0.6s ease; */
}

.loggedIn a {
  font-weight: 600;
  font-size: 1rem;
  font-family: var(--theme-heading-font);
  color: #3d3030;
  transition: all 0.6s ease;
}

.Categories {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  display: none; /* Initially hide the dropdown menu */
}
.dropdown-menu li {
  margin: 10px;
  font-family: var(--theme-heading-font);
  font-weight: 600;
  color: rgb(77, 56, 56);
}
.Categories:hover .dropdown-menu {
  display: block; /* Show the dropdown menu when hovering over "Categories" */
}

.dropdown-menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 5px;
}

.dropdown-menu li:hover {
  background-color: #ddd;
}

.categories-icon {
  color: rgb(41, 38, 38);
  font-family: "Font Awesome 5 Pro";
  height: 1.2rem;
  font-weight: 900;
}
.numOfCards {
  position: absolute;
  background: rgb(211, 19, 19);
  border-radius: 45%;
  padding: 3.2px;
  font-weight: 700;
  color: white;
  font-family: sans-serif;
  margin-top: -13px;
}
</style>
