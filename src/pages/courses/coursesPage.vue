<template>
  <div class="page-header">
    <img src="../../assets/coursescover3.jpg" alt="" />
    <p>Tailor Campus</p>
  </div>

  <div class="topbar-search">
    <form method="get" action="#">
      <input type="text" placeholder="Search our courses" class="search-bar" />
      <button type="submit" class="search-btn">
        <i class="fa fa-search magnify"></i>
      </button>
    </form>
  </div>

  <div class="courses-container">
    <section class="courses">
      <course-card  class="course-card"
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
      ></course-card>
    </section>
  </div>
</template>

<script>
import courseCard from "../../components/coursesComponents/courseCard.vue";
export default {
  components: {
    courseCard,
  },
  data() {
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
          createdBy: "Abdallah Ragab",
          courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
          coursePrice: 120,
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
          createdBy: "Abdallah Ragab",
          courseTitle: "The Complete 2022 Flutter & Dart Development",
          coursePrice: 120,
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
          createdBy: "Abdallah Ragab",
          courseTitle: "The Web Developer Bootcamp 2023",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
          courseImage : '3awz link elcourse image'
        },
        {
          courseId: "c5",
          instructorId: "i5",
          createdBy: "Anbdallah Ragab",
          courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
          courseImage : '3awz link elcourse image'
        },
        {
          courseId: "c6",
          instructorId: "i6",
          createdBy: "Abdallah Ragab",
          courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
          coursePrice: 450,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
        },
        {
          courseId: "c7",
          instructorId: "i7",
          createdBy: "Abdallah Ragab",
          courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
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
.page-header p {
  text-align: center;
  font-weight: bold;
  position: relative;
  bottom: 3rem;
  color: white;
  font-size: 1.2rem;
  font-family: Verdana;
  opacity: .7;
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
.courses-container {
  margin: 0 auto;
  width: 94%;
  margin-bottom: 5rem;

}

.courses {
  display: flex;
  flex-wrap: wrap;
   row-gap: 8rem;
   justify-content: center;
   /* justify-content: space-between; */
}

.course-card {
  margin: 0.2rem 1.2rem;
}


/* .courses > :last-child {
  margin-right: auto;
  align-self: start;
}   */


 /* .courses {
  display: grid;
   grid-template-columns: 0fr 0fr 0fr;
   row-gap: 7rem;
   justify-content: center;
   margin: 0 auto;
  
}  */
</style>