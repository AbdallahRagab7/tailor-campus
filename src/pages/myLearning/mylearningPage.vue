<template>
  <section class="myLearning">
    <h3 class="title">My Learning</h3>

    <div class="myLearning-cards">
      <mylearning-card
        class="me-4"
        v-for="myLearning in myLearningCourses"
        :key="myLearning.courseId"
        :courseId="myLearning.courseId"
        :courseName="myLearning.courseName"
        :instructorName="myLearning.instructorName"
        :instructorId="myLearning.instructorId"
      >
      </mylearning-card>
    </div>
  </section>
</template>

<script>
import mylearningCard from "../../components/myLearningComponents/mylearningCard.vue";
export default {
  components: { mylearningCard },

  data() {
    return {
      myLearningCourses: [
        {
          courseId: "c1",
          courseName:
            " Vue - The Complete Guide (incl. Router Composition API)",
          instructorName: "Abdallah Ragab",
          instructorId: "i1",
          instructorImage: "3awz link elcourse image",
        },

        {
          courseId: "c2",
          courseName:
            " The Web Developer Bootcamp 2023",
          instructorName: "Abdallah Ragab",
          instructorId: "i2",
          instructorImage: "3awz link elcourse image",
        },

        {
          courseId: "liveMeeting",
          courseName:
            " The Complete 2022 Flutter (Live Course)",
          instructorName: "Abdallah Ragab",
          instructorId: "i3",
          instructorImage: "3awz link elcourse image",
        },
        // {
        //   courseId: "c4",
        //   courseName:
        //     " Vue - The Complete Guide (incl. Router Composition API)",
        //   instructorName: "Abdallah Ragab",
        //   instructorId: "i3",
        //   instructorImage: "3awz link elcourse image",
        // },
        // {
        //   courseId: "c5",
        //   courseName:
        //     " Vue - The Complete Guide (incl. Router Composition API)",
        //   instructorName: "Abdallah Ragab",
        //   instructorId: "i3",
        //   instructorImage: "3awz link elcourse image",
        // },
        // {
        //   courseId: "c6",
        //   courseName:
        //     " Vue - The Complete Guide (incl. Router Composition API)",
        //   instructorName: "Abdallah Ragab",
        //   instructorId: "i3",
        //   instructorImage: "3awz link elcourse image",
        // },
      ],
      
    };
  },
  computed: {
    courseLink() {
      return {
        name: "myLearning",
        params: { instructorId: this.instructorId },
      };
    },
  },
};
</script>

<style scoped>
.myLearning {
  width: 70%;
  margin: 1rem auto;
}

.myLearning-cards {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* justify-content: space-around; */
  row-gap: 4rem;
  justify-content: center;
}

.title {
  font-weight: 700;
  margin-bottom: 5rem;
}
</style>









