<template>
  <section class="page-wrapper">
    <div class="lecture-video">
      <video controls>
        <source :src="'/'+ currentlesson + '.mp4'" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <navTabtwo class="nav-tab"></navTabtwo>
    </div>

    <div class="course-content">
      <course-content class="content"
        ><h2 class="content-header">Course Content</h2></course-content
      > 
    <course-content class="content" @set-currentvideo="toggleLessonId"></course-content> 
     </div>

    <div class="course-content">

    </div>




  </section>
</template>

<script>
import navTabtwo from "../../components/viewCourse/navTabtwo.vue";
import courseContent from "../../components/courseDetailsComponents/navTabComponents/courseContent.vue";

export default {
  components: {
    navTabtwo,
    courseContent,
  },
    // emits : ['set-currentvideo'] ,
  data() {
    return {
        currentlesson : '',
        
    //   courseDetails: {
    //     courseId: "c1",
    //     instructorId: "i1",
    //   },
    };
  },
  methods : {
    toggleLessonId(currentvideo){
        this.currentlesson = currentvideo;
        console.log(this.currentlesson)
    }
  }
};
</script>

<style scoped>
.page-wrapper {
  width: 90%;
  height: max-content;
  margin: auto;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 5rem;
}
.lecture-video {
  width: 750px;
  height: max-content;
}

.lecture-video video {
  width: 100%;
  height: 100%;
}
.content {
  width: 22rem;
}
.content-header {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: rgb(31, 41, 88);
  background-color: grey;
  padding: 1rem;
  border-radius: 6px;
}
</style>
