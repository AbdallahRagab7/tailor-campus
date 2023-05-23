<template>
  <section class="myLearning">
    <h3 class="title">My Learning</h3>

    <div class="myLearning-cards">
      <!-- <mylearning-card
        class="me-4"
        v-for="myLearning in myLearningCourses"
        :key="myLearning.courseId"
        :courseId="myLearning.courseId"
        :courseName="myLearning.courseName"
        :instructorName="myLearning.instructorName"
        :instructorId="myLearning.instructorId"
      >
      </mylearning-card> -->

      <mylearning-card
        class="me-4"
        v-for="myLearning in myLearningTwo"
        :key="myLearning.id"
        :courseId="myLearning.id"
        :courseName="myLearning.course_name"
        :instructorName="myLearning.Instructor_name"
        :instructorId="myLearning.instructorId"
        :courseimg="myLearning.course_image"
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
      myLearningTwo : '' ,
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
  methods : {
    async myLearning () {
      try {
        const response = await fetch ("http://localhost:4000/mycourses", {
          headers : {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        const responseData = await response.json()
        console.log (responseData)
        this.myLearningTwo= responseData.arrayofcourses
        console.log(this.myLearningTwo)

        if (!response.ok) {
          const error = new error(responseData.message || "Failed to Fetch");
          throw error;
        }
      }
      catch (error) {
        this.error = error.message || "something wrong";
      }
    }
  },
  created () {
    this.myLearning ();
  }

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









