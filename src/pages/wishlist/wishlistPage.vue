<template>
  <section class="cart my-3">
    <h1 class="title mb-4">Wishlist</h1>
    <h3 class="courses-no">{{ this.cardsTwo.length }} Courses in Wishlist</h3>
    <div class="shopping-total-price">
      <div class="shopping-section">
        <!-- <wishlist-card
          v-for="course in cards"
          :key="course.courseId"
          :createdBy="course.createdBy"
          :courseTitle="course.courseTitle"
          :coursePrice="course.coursePrice"
          :studentsNo="course.studentsNo"
          :duration="course.duration"
          :lessons="course.lessons"
          :rating="course.rating"
          :reviews="course.reviews"
          :courseId="course.courseId"
          :instructorId="course.instructorId"
        ></wishlist-card> -->
        
        <!-- :courseTitle="course.courseTitle" -->
        <wishlist-card
          v-for="course in cardsTwo"
          :key="course.id"
          :createdBy="course.Instructor_name"
          :coursePrice="course.course_price"
          :studentsNo="course.num_student_enrolled"
          duration="15H"
          :lessons="course.num_lesson"
          :rating="course.course_rate"
          reviews="8"
          :courseId="course.id"
          :instructorId="course.instructorId"
          :courseImg="course.course_image"
        ></wishlist-card>
      </div>

    </div>
  </section>
</template>
<script>
import wishlistCard from "../../components/wishlistComponents/wishlistCard.vue";
export default {
  components: { wishlistCard },
  data() {
    return {
      cardsTwo : '',
      // cards: [
      //   {
      //     courseId: "c1",
      //     instructorId: "i1",
      //     createdBy: "Maximilian Schwarzmüller",
      //     courseTitle:
      //       "Vue - The Complete Guide (incl. Router & Composition API)",
      //     coursePrice: 120,
      //     studentsNo: 74,
      //     duration: "6.5h",
      //     lessons: 30,
      //     rating: 3,
      //     reviews: 74,
      //     courseImage: "3awz link elcourse image",
      //   },
      //   {
      //     courseId: "c2",
      //     instructorId: "i2",
      //     createdBy: "Abdallah Ragab",
      //     courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
      //     coursePrice: 120,
      //     studentsNo: 74,
      //     duration: "8.5h",
      //     lessons: 34,
      //     rating: 3,
      //     reviews: 84,
      //     courseImage: "3awz link elcourse image",
      //   },
      //   // {
      //   //   courseId: "c3",
      //   //   instructorId: "i2",
      //   //   createdBy: "Abdallah Ragab",
      //   //   courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
      //   //   coursePrice: 120,
      //   //   studentsNo: 74,
      //   //   duration: "8.5h",
      //   //   lessons: 34,
      //   //   rating: 3,
      //   //   reviews: 84,
      //   //   courseImage: "3awz link elcourse image",
      //   // },
      // ],
    };
  },

  methods : {
    async userWishlist() {
      try {
        const response = await fetch("http://localhost:4000/mywishlist", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const responseData = await response.json();
        this.cardsTwo = responseData.coursearray;
        console.log(responseData)
    

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
    this.userWishlist()
  }

};
</script>

<style scoped>
.cart {
  width: 80%;
  margin: 0 auto;
}
.shopping-section {
  width: 100%;
}
.courses-no {
  font-weight: 700;
  font-size: 1.1rem;
}
.shopping-total-price {
    display: flex;
    justify-content: space-between;
}

.course-price {
    font-weight: 700;
    font-size: 2rem;
    font-family: var(--theme-heading-font);
}

.checkout-btn {
  width: 100%;
  border-color: var(--theme-secondary-color);
  color: #fff;
  background: var(--theme-secondary-color);
  font-weight: 600;
  position: relative;
  text-transform: capitalize;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border: 2px solid transparent;
  transition: all 0.6s ease;
}

.checkout-btn:hover {
  background: var(--theme-primary-color);
  border-color: var(--theme-primary-color);
}
</style>
