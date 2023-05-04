<template>
  <section class="cart my-3">
    <h1 class="title mb-4">Shopping Cart</h1>
    <h3 class="courses-no">2 Courses in Cart</h3>

    <div class="shopping-section">
      <added-card
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
      
      ></added-card>
    </div>
  </section>
</template>
<script>
import addedCard from "../../components/cartComponents/addedCard.vue";
export default {
  components: { addedCard },
  data () { return {
cards : [{
          courseId: "c1",
          instructorId: "i1",
          createdBy: "Maximilian Schwarzmüller",
          courseTitle: "Vue - The Complete Guide (incl. Router & Composition API)",
          coursePrice: 120,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
          courseImage : '3awz link elcourse image'
    },
     {
          courseId: "c2",
          instructorId: "i2",
          createdBy: "Abdallah Ragab",
          courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
          coursePrice: 120,
          studentsNo: 74,
          duration: "8.5h",
          lessons: 34,
          rating: 3,
          reviews: 84,
          courseImage : '3awz link elcourse image'
        },
        ], 
  }}

    
};
</script>

<style scoped>
.cart {
  width: 90%;
  margin: 0 auto;
}
.shopping-section {
  width: 100%;
}
.courses-no {
  font-weight: 700;
  font-size: 1.1rem;
}
</style>
