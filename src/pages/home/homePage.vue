<template>
  <main>
    <section class="hero-section">
      <hero-section></hero-section>
      <!-- <h1>Most Popular Courses</h1> -->
    </section>

    <div class="courses-container">
      <h1 class="section-title">Recommended for you</h1>

      <section class="courses">
        <course-card
        v-for="course in coursesTwo"
        :key="course.id"
        :createdBy="course.Instructor_name"
        :courseTitle="course.course_name"
        :coursePrice="course.course_price"
        :studentsNo="course.num_student_enrolled"
        :lessons="course.num_lesson"
        :rating="course.course_rate"
        :courseId="course.id"
        :instructorId="course.instructorId"
        :courseImage="course.course_image"
        duration="15h"
      >
      </course-card>
      </section>
    </div>

    <div class="instructors-container">
      <h1 class="section-title">Most Popular Instructors</h1>

      <section class="instructors">
        <instructor-card
        v-for="instructor in instructorsTwo"
        :key="instructor.id"
        :instructorId="instructor.id"
        :instructorName="instructor.Name"
        specialization="Web Developer"
        studentsNo="744"
        coursesNo="9"
        :instructorImage="instructor.Image_Profile"
      ></instructor-card>
      </section>
    </div>
  </main>
</template>

<script>
import heroSection from "../../components/homeComponents/heroSection.vue";
import courseCard from "../../components/coursesComponents/courseCard.vue";
import instructorCard from "../../components/instructorsComponents/instructorCard.vue";
export default {
  components: {
    heroSection,
    courseCard,
    instructorCard,
  },
  data() {
    return {
      coursesTwo: [],
      instructorsTwo : [],

    };
  },
  methods : {
    async getCourses() {
      try {
        const response = await fetch("http://localhost:4000/courses");
        // console.log(response);
        const responseData = await response.json();
        console.log(responseData);

        this.coursesTwo = responseData.courses.slice(0,3);
        console.log(this.coursesTwo);

        if (!response.ok) {
          const error = new error(responseData.message || "Failed to Fetch");
          throw error;
        }
        console.log(responseData);
      } catch (error) {
        this.error = error.message || "something wrong";
      }
    },
    async getInstructors() {
      try {
        const response = await fetch("http://localhost:4000/allinstructors");
        // console.log(response);
        // console.log("StatsText in response is :" + response.statusText);
        const responseData = await response.json();
        console.log(responseData);
        this.instructorsTwo = responseData.instructor.slice(0,3);

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
    this.getCourses();
    this.getInstructors()

  }
};
</script>

<style scoped>
main {
  background-color: rgb(255, 255, 255);
}
.hero-section {
  margin-bottom: 6rem;
}
.section-title {
  margin-bottom: 6rem;
  color: rgb(59, 57, 57);
  font-weight: 700;
  margin-left: 2rem;
  font-size: 2rem;
}
.courses-container,
.instructors-container {
  margin: 0 auto;
  width: 94%;
  margin-bottom: 5rem;
}

.courses,
.instructors {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8rem;
  justify-content: center;
  /* justify-content: space-between; */
}

.course-card {
  margin: 0.2rem 1.2rem;
}
</style>
