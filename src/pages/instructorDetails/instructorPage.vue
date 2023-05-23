<template>
  <section class="page-container">
    <div class="instructor-pic-instructor-info">
      <instructor-info></instructor-info>

      <instructor-links></instructor-links>
    </div>

    <div class="instructor-courses">
      <h2>My courses ({{ this.instructorCourses.length }})</h2>

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
        <course-card
        v-for="course in instructorCourses"
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
  </section>
</template>

<script>
import courseCard from "../../components/coursesComponents/courseCard.vue";
import instructorInfo from "../../components/instructorDetailsComponents/instructorInfo.vue";
import instructorLinks from "../../components/instructorDetailsComponents/instructorLinks.vue";
export default {
  components: { courseCard, instructorInfo, instructorLinks },

  data() {
    return {
      instructorId: this.$route.params.instructorId,
      instructorCourses: '',
      courses: [
        {
          courseId: "c1",
          instructorId: "i1",
          createdBy: "Maximilian Schwarzmüller",
          courseTitle:
            "Vue - The Complete Guide (incl. Router & Composition API)",
          coursePrice: 120,
          studentsNo: 74,
          duration: "6.5h",
          lessons: 30,
          rating: 3,
          reviews: 74,
          courseImage: "3awz link elcourse image",
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
          courseImage: "3awz link elcourse image",
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
          courseImage: "3awz link elcourse image",
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
          courseImage: "3awz link elcourse image",
        },
      ],
    };
  },

  methods: {
    async instructorInfo() {
      try {
        const response = await fetch(
          "http://localhost:4000/instructorprofile/" + this.instructorId
        );
        // console.log(response);
        const responseData = await response.json();
        this.instructorCourses = responseData.instructorName[2];
        console.log(this.instructorCourses)

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
    this.instructorInfo()
  }
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
