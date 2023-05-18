<template>
  <main>
    <section class="hero-section">
      <hero-section></hero-section>
      <!-- <h1>Most Popular Courses</h1> -->
    </section>

    <div class="courses-container">
      <h1 class="section-title">Most Popular Courses</h1>

      <section class="courses">
        <course-card
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
        ></course-card>
      </section>
    </div>

    <div class="instructors-container">
      <h1 class="section-title">Most Popular Instructors</h1>

      <section class="instructors">
        <instructor-card
          v-for="instructor in instructors"
          :key="instructor.instructorId"
          :instructorId="instructor.instructorId"
          :instructorName="instructor.instructorName"
          :specialization="instructor.specialization"
          :facebookLink="instructor.facebookLink"
          :linkedinLink="instructor.linkedLink"
          :youtubeLink="instructor.youtubeLink"
          :studentsNo="instructor.studentsNo"
          :coursesNo="instructor.coursesNo"
          :instructorImage="instructor.instructorImage"
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
      courses: [
        {
          courseId: "c1",
          instructorId: "i1",
          createdBy: "Maximilian Schwarzmüller",
          courseTitle:
            "Vue - The Complete Guide (incl. Router & Composition API)",
          coursePrice: 60,
          studentsNo: 741,
          duration: "10h",
          lessons: 25,
          rating: 3,
          reviews: 74,
          courseImage: "3awz link elcourse image",
        },
        {
          courseId: "c2",
          instructorId: "i2",
          createdBy: "Abdallah Ragab",
          courseTitle: "100 Days Of Code - 2023 Web Development Bootcamp",
          coursePrice: 100,
          studentsNo: 819,
          duration: "13.5h",
          lessons: 15,
          rating: 3,
          reviews: 74,
          courseImage: "3awz link elcourse image",
        },
        {
          courseId: "c3",
          instructorId: "i3",
          createdBy: "Abdallah Ragab",
          courseTitle: "The Complete 2022 Flutter & Dart Development",
          coursePrice: 99,
          studentsNo: 74,
          duration: "24h",
          lessons: 30,
          rating: 3,
          reviews: 744,
          courseImage: "3awz link elcourse image",
        },
      ],

      instructors: [
        {
          instructorId: "i1",
          instructorName: "Max Johnas ",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 747,
          coursesNo: 4,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i2",
          instructorName: "Johnny max",
          specialization: "Data Analyst",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 232,
          coursesNo: 10,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i3",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Flutter Development",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 74,
          coursesNo: 7,
          instructorImage: "3awz link elcourse image",
        },
      ],
    };
  },
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
