<template>
  <div class="card">
    <router-link :to="courseLink" >
      <div class="course-header mb-2">
        <img src="../../assets/vuejs2.png" alt="course-image" />
      </div>

      <div class="course-content">
        <h3 class="course-title">
          {{courseName}}
        </h3>
        <p class="instructor">Created by: {{instructorName}}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: [
   "courseId",
   "courseName",
    "instructorName",
   "instructorId"
   ],
   computed : {
    courseLink () {
        return "/course/" + this.courseId + "/l1"
    },
    // printCourseId(){
    //     console.log(this.courseName)
    // }
   }
};
</script>

<style scoped>
.card {
  width: 250px;
  border-radius: 5px;
  border: 2px solid #e6e7ec;
  padding: 0.7rem;
}
.card a {
  color: rgb(32, 22, 61);
}
.course-header {
  margin-top: -50px;
}

.course-header img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 5px;
  object-fit: cover;
}
.course-title {
  font-size: 1.03rem;
  font-family: var(--theme-heading-font);
  font-weight: 700;
}

.instructor {
  font-family: var(--theme-secondary-font);
  color: var(--theme-text-color);
  font-weight: 500;
}
</style>
