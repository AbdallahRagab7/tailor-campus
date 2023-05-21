<!-- <template>
  <section>
    <div class="course-header">
      <h2 class="course-title">
        {{ courseHeader.courseTitle }}
      </h2>
      <p class="summary">
        {{ courseHeader.courseSummary }}
      </p>

      <div class="course-header-meta">
        <ul class="list-info">
          <li>
            <div class="course-author">
              <img src="../../assets/course-autor.png" alt="#" />
              {{ courseHeader.Ins }}
            </div>
          </li>

          <li>
            <div class="rating">
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star"></i>
              <span>
                {{ this.courseId }} (
                {{ courseHeader.reviews }} reviews)</span
              >
            </div>
          </li>
          <li>
            <i class="fa fa-user me-2"></i
            >{{ courseHeader.enrolledStudents }} enrolled students
          </li>
        </ul>
      </div>
    </div>
  </section>
</template> -->

<template>
  <section>
    <div class="course-header">
      <h2 class="course-title">
        {{ courseName }}
      </h2>
      <p class="summary">
        {{ courseSummary }}
      </p>

      <div class="course-header-meta">
        <ul class="list-info">
          <li>
            <div class="course-author">
              <img src="../../assets/course-autor.png" alt="#" />
              {{ instructor}}
            </div>
          </li>

          <li>
            <div class="rating">
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star"></i>
              <span>
                 
                {{ courseHeader.reviews }} (reviews)</span
              >
            </div>
          </li>
          <li>
            <i class="fa fa-user me-2"></i
            >{{ enrolledSudents }} enrolled students
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // props : ['courseId'],
  data() {
    return {
      courseHeader: {
        courseTitle:
          " Vue - The Complete Guide (incl. Router & Composition API)",
        courseSummary:
          "Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!",
        Instructor: "Abdallah Ragab",
        reviews: 74,
        rating: 4,
        enrolledStudents: 11,
        instructorImage: "3awz Link img el instructor",
      },

    //data from backend
      courseName : '',
      courseSummary : '' ,
      courseDescription : '',
      instructor : '',
      enrolledSudents : '',

      // var currentDate = new Date();
  // onsole.log(currentDate);
    courseId : this.$route.params.courseId
    };
  },

  methods : {
    async courseHeaderData() {
      try {
        const response = await fetch(
          // "http://localhost:4000//course/" + this.courseId
          "http://localhost:4000/course/"+this.courseId
        );
        // console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        this.courseName = responseData.courseHeader[0].course_name;
        this.courseSummary = responseData.courseHeader[0].course_summary;
        this.courseDescription = responseData.courseHeader[0].course_description;
        this.instructor = responseData.courseHeader[0].Instructor_name;
        this.enrolledSudents = responseData.courseHeader[0].num_student_enrolled;
        

      
        if (!response.ok) {
          const error = new error(responseData.message || "Failed to Fetch");
          throw error;
        }
        // console.log(responseData);
      } catch (error) {
        this.error = error.message || "something wrong";
      }
    },
  } ,

  mounted(){
    this.courseHeaderData();
  }
};
</script>

<style scoped>
.course-header {
  max-width: 750px;
  background: #f8f8f8;
  padding: 1.7rem 1.3rem;
  color: var(--theme-text-color);
  border-radius: 3%;
  margin-bottom: 2rem;
}
.course-title {
  margin-bottom: 1rem;
  text-transform: capitalize; /*capital first char in each word */
  color: var(--theme-heading-color);
  font-family: var(--theme-heading-font);
  font-weight: 700;
  /* font-size: 32px; */
}
.summary {
  margin-bottom: 1.7rem;
}

.course-header-meta ul {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  justify-items: center;
  padding-left: 0;
}
.list-info li {
  margin-right: 30px;
}
.course-author img {
  border-radius: 100%;
  margin-right: 15px;
  width: 30px;
  height: 30px;
}
.course-author {
  font-size: 0.8rem;
  color: #000;
  font-weight: 650;
}
.checked {
  color: orange;
}
</style>
