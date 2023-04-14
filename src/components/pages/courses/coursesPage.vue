<template>
  <div class="page-header">
    <img src="../../../assets/coursescover.jpg" alt="" />
  </div>

  <div class="topbar-search">
    <form method="get" action="#">
      <input type="text" placeholder="Search our courses" class="search-bar" />
      <button type="submit" class="search-btn">
        <i class="fa fa-search magnify"></i>
      </button>
    </form>
  </div>

  <section class="courses">
    <course-card
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
    ></course-card>
  </section>
</template>

<script>
import courseCard from "./courseCard.vue";
export default {
  components: {
    courseCard,
  },
  data() {
    return {
      courses: [
        {
          courseId: "c1",
          createdBy: "Abdallah Ragab",
          courseTitle: "Web Development : Front End",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
        {
          courseId: "c1",
          createdBy: "Abdallah Ragab",
          courseTitle: "Web Development : BackEnd",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
        {
          courseId: "c1",
          createdBy: "Abdallah Ragab",
          courseTitle: "Data Analysis",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
        {
          courseId: "c1",
          createdBy: "Abdallah Ragab",
          courseTitle: "Web Development : Front End",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
        {
          courseId: "c1",
          createdBy: "Abdallah Ragab",
          courseTitle: "Web Development : Front End",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
        {
          courseId: "c1",
          createdBy: "Abdallah Ragab",
          courseTitle: "Web Development : Front End",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
        {
          courseId: "c1",
          createdBy: "Abdallah Ragab",
          courseTitle: "Web Development : Front End",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-header {
  width: 100%;
  margin-bottom: 4rem;
}
.page-header img {
  width: 100%;
  object-fit: cover;
  height: 20rem;
}

.topbar-search {
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin-bottom: 7rem;
}
.search-bar {
  height: 3.2rem;
  width: 22rem;
  border-radius: 1.85rem;
  padding-left: 1.25rem;
  background: #eef5f9;
  border: 2px solid #f5f5f5;
}
/* .search-bar::placeholder {
    color: red;
} */
.search-btn {
  background: transparent;
  border: none;
  outline: none;
  margin-left: -2.5rem;
}
.fa-magnifying-glass {
  width: 20px;
  height: 19px;
  color: grey;
}
.courses {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8rem;
}


</style>
