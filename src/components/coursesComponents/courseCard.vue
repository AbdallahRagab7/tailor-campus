<template>
  <div class="course-card">
    <div class="course-header">
      <div class="course-thumb">
        <router-link :to="courseLink">
          <!-- <img :src="require(`../../assets/${image}.jpg`)" alt="course-img" />   -->
          <!-- <img :src="require(`${courseimg}`)" alt="course-img" />   -->
          <!-- <img
            :src="'http://localhost:4000/' + courseImage.replace('images/', '')"
            alt=""
          /> -->
          <img
            src="../../assets/vuejs.png"
            alt="course img"
            v-if="!courseImage"
          />
          <img
            :src="'http://localhost:4000/' + courseImage.replace('images/', '')"
            alt="course-img"
          />

          <!-- <img
            :src="'http://localhost:4000/' + courseImage.replace('images/', '')"
            alt=""
          /> -->
        </router-link>
      </div>
    </div>
    <!-- <i class="fa-solid fa-cart-plus"></i> -->
    <div class="course-content">
      <span class="course-price">
        <i class="fa-solid fa-dollar-sign"></i> {{ coursePrice }}</span
      >
      <p class="instructor">
        Created By :
        <router-link :to="instructorLink"> {{ createdBy }}</router-link>
      </p>
      <h3 class="course-title">
        <router-link :to="courseLink">{{ courseTitle }} </router-link>
      </h3>
    </div>

    <div class="course-meta">
      <span class="duration"
        ><i class="far fa-clock me-2"></i>{{ duration }}</span
      >
      <span class="students"
        ><i class="fa-regular fa-user"></i> {{ studentsNo }} Students</span
      >
      <span class="lessons"
        ><i class="far fa-play-circle me-2"></i>{{ lessons }} Lessons</span
      >
    </div>
    <div class="enroll">
      <div class="rating">
        <i class="fa fa-star"></i>
        <i class="fa fa-star "></i>
        <i class="fa fa-star "></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <span>0 ({{ reviews }}0 reviews)</span>
      </div>

      <div class="cart-wishlist">
        <button class="addToCart" @click="addToCart" v-if="!isAddedCart">
          <!-- <button class="addToCart" @click="addToCart" v-if="!getisAdded"> -->
          <i class="fa-solid fa-cart-shopping cart-icon"></i>
        </button>

        <button
          class="removeFromCard"
          @click="removeFromCard"
          v-if="isAddedCart"
        >
          <!-- <button class="removeFromCard" @click="removeFromCard" v-if="getisAdded"> -->
          <i class="fa-solid fa-cart-shopping cart-icon"></i>
        </button>

        <button
          class="addToWishlist"
          @click="addToWishlist"
          v-if="!isAddedWishlist"
        >
          <i class="fa-regular fa-heart"></i>
        </button>

        <button
          class="removeFromWishlist"
          @click="removeFromWishlist"
          v-if="isAddedWishlist"
        >
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // courseimg : '../../assets/nodejs.jpg'
      image: "course3",
      isAddedCart: false,
      isAddedWishlist: false,
    };
  },

  props: [
    "createdBy",
    "courseTitle",
    "coursePrice",
    "studentsNo",
    "duration",
    "lessons",
    "rating",
    "reviews",
    "courseId",
    "instructorId",
    "courseImage",
  ],
  computed: {
    courseLink() {
      return { name: "course", params: { courseId: this.courseId } };
    },
    instructorLink() {
      return {
        name: "instructor",
        params: { instructorId: this.instructorId },
      };
    },
    getCourseImg() {
      return "../../assets/vuejs2.png";
    },
    getisAdded() {
      return localStorage.getItem("isAddedToCart");
    },
  },
  methods: {
    async addToCart() {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push("/login");
      }
      const response = await fetch(
        "http://localhost:4000/courses/ADDtoCart/" + this.courseId,
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.massage === "course already in cart") {
        this.isAddedCart = true;
      }

      this.isAddedCart = true;

      if (!response.ok) {
        const error = new Error(responseData.message || "Failed in request.");
        throw error;
      }
      localStorage.setItem("isAddedCart", true);

      // window.location.reload();
    },
    async removeFromCard() {
      const response = await fetch(
        "http://localhost:4000/cart/deletecoursefromcart/" + this.courseId,
        {
          method: "delete",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.isAddedCart = false;
      // window.location.reload();
      // this.$router.push('/courses')
      // window.location.reload();
      localStorage.setItem("isAddedCart", false);
    },





    async addToWishlist() {
      if (!this.$store.getters.isAuthenticated) {
        this.$router.push("/login");
      }
      const response = await fetch(
        "http://localhost:4000/course/addToWishlist/" + this.courseId,
        {
          method: "POST",
          body: JSON.stringify({}),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.massage === "course already in cart") {
      }

      this.isAddedWishlist = true;

      if (!response.ok) {
        // console.log(response.ok)
        const error = new Error(responseData.message || "Failed in request.");
        throw error;
      }
      localStorage.setItem("isAddedWishlist", true);

      // window.location.reload();
    },
    async removeFromWishlist() {
      const response = await fetch(
        "http://localhost:4000/wishlist/delete/" + this.courseId,
        {
          method: "delete",
       
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      this.isAddedWishlist  = false;
      // window.location.reload();
      // this.$router.push('/courses')
      localStorage.setItem("isAddedCart", false);
    },
  },
};
</script>

<style scoped>
.course-card {
  width: 24rem;
  max-height: 430px;
  border: 2px solid #e6e7ec;
  border-radius: 4px;
  padding: 0px 2rem 1.5rem 2rem;
  transition: all 0.4s ease;
  /* margin: 0.2rem 1.2rem; */
}
.course-card:hover {
  border-color: transparent;
  box-shadow: 0 14px 60px rgba(0, 0, 0, 0.12);
  background: #fff;
  transform: scale(1.05);
  /* transition: transform 0.5 ease-out 3; */
}
.course-header {
  margin-top: -60px;
  margin-bottom: 3rem;
}
.course-thumb {
  width: 350px;
  height: 197px;
  border-radius: 8px;
  margin: 0 auto;
  overflow: hidden; /* to make img take same border-radius */
}

.course-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-content {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
}

.course-price {
  position: absolute;
  top: -4rem;
  right: 21px;
  background: var(--theme-primary-color);
  padding: 0.6rem 1.2rem;
  color: #fff;
  border-radius: 3px;
  font-size: 1.2rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  display: inline-flex;
}

.instructor {
  font-family: var(--theme-secondary-font);
  color: var(--theme-text-color);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.instructor a {
  font-family: "Jost";
  color: inherit;
}
.instructor a:hover {
  color: var(--theme-secondary-color);
}
.course-meta {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  font-family: var(--theme-secondary-font);
  color: var(--theme-text-color);
  font-size: 1rem;
  margin-top: 0.9rem;
}

.course-title a {
  color: rgb(20, 19, 59);
  font-family: "Roboto";
  font-weight: 700;
  font-size: 1.35rem;
  transition: all 0.3s ease-in-out;
}

.course-title a:hover {
  color: var(--theme-primary-color);
}
.enroll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.enroll-btn {
  background: transparent;
  color: var(--theme-primary-color);
  border-color: var(--theme-primary-color);
  border-radius: 10px;
  padding: 8px 13px;
  font-weight: 600;
  transition: all 0.6s ease;
  border: 2px solid;
  font-size: 1rem;
  margin-top: 1rem;
}

.enroll-btn:hover {
  background: var(--theme-primary-color);
  color: #fff;
  border-color: var(--theme-primary-color);
}
.rating {
  width: 12.5rem;
  font-weight: bold;
  position: relative;
  top: 0.5rem;
  font-size: 0.9rem;
}
.checked {
  color: orange;
}
.review-no {
  color: rgb(27, 26, 26);
}

.cart-wishlist {
  display: flex;
  justify-content: space-between;
  width: 90px;
}
.addToCart,
.addToWishlist,
.removeFromCard ,
.removeFromWishlist{
  background: transparent;
  padding: 8px 9px;
  border: none;
  margin-top: 10px;
}
.cart-icon {
  height: 25px;
}
.cart-icon:hover {
  color: rgb(66, 17, 25);
}
.fa-heart {
  height: 25px;
}
.fa-heart:hover {
  color: rgb(66, 17, 25);
}
.removeFromCard .cart-icon {
  color: rgb(66, 17, 25);
}
.removeFromWishlist {
  color: rgb(66, 17, 25);

}

.removeFromWishlist .fa-heart {
  color: rgb(199, 20, 50);
}

</style>
