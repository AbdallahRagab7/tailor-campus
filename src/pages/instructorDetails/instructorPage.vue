<template>
  <section class="page-container">
    <div class="instructor-pic-instructor-info">
      <instructor-info></instructor-info>

      <instructor-links></instructor-links>
    </div>

    <div class="instructor-courses">
      <h2>My courses ({{courses.length}})</h2>

      <section class="courses">
        <!-- <course-card
          class="course-card"
          v-for="course in courses"
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
        ></course-card> -->
      </section>
    </div>
  </section>
</template>

<script>
import courseCard from "../../components/coursesComponents/courseCard.vue";
import instructorInfo from "../../components/instructorDetailsComponents/instructorInfo.vue";
import instructorLinks from "../../components/instructorDetailsComponents/instructorLinks.vue";
export default {
  components: { courseCard, instructorInfo, instructorLinks },

  data () {
    return {
       courses: [
        {
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
          createdBy: "Maximilian Schwarzmüller",
          courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
          coursePrice: 100,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
          courseImage : '3awz link elcourse image'
        },
        {
          courseId: "c3",
          instructorId: "i3",
          createdBy: "Maximilian Schwarzmüller",
          courseTitle: "The Complete 2022 Flutter & Dart Development",
          coursePrice: 130,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
          courseImage : '3awz link elcourse image'
        },
        {
          courseId: "c4",
          instructorId: "i4",
          createdBy: "Maximilian Schwarzmüller",
          courseTitle: "The Web Developer Bootcamp 2023",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
          courseImage : '3awz link elcourse image'
        },]
    }
  },
};
</script>

<style scoped>
.page-container {
  margin-top: 4.8rem;
  max-width: 70%;
  margin: 2rem auto;
}

.instructor-pic-instructor-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.instructor-courses {
  width: 100%;
}
.instructor-courses h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 7rem;
  margin-top: 1rem;
}

.courses {
  display: flex;
  flex-wrap: wrap;
  row-gap: 6rem;
  justify-content: flex-start;
  justify-content: space-between;
  max-width: 90%;
  /* align-items:center; */
}
.course-card {
  margin: 0.2rem 2rem 0.2rem 0;
  /* width: 24rem; */
}


</style>
