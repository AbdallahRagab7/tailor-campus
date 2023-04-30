<template>
  <section class="page-container">
    <div class="instructor-pic-instructor-info">
      <instructor-info></instructor-info>

      <instructor-links></instructor-links>
    </div>

    <div class="instructor-courses">
      <h2>My courses (58)</h2>

      <div class="courses">
        <!-- <course-card class="course-card"></course-card> -->
      </div>
    </div>
  </section>
</template>

<script>
import courseCard from "../../components/coursesComponents/courseCard.vue";
import instructorInfo from "../../components/instructorDetailsComponents/instructorInfo.vue";
import instructorLinks from "../../components/instructorDetailsComponents/instructorLinks.vue";
export default {
  components: { courseCard, instructorInfo, instructorLinks },
};
</script>

<style>
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

.courses {
  width: 100%;
}
/* .course-card {
  width: 100%;
  height: 100%;
} */
.course-card {
  position: relative;
}
</style>
