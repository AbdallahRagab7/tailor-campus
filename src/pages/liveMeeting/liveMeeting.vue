<template>
    <section class="page-wrapper">
      <div class="lecture-video">
        <!-- <video controls>
          <source :src="'/' + currentlesson + '.mp4'" type="video/mp4" />
          Your browser does not support the video tag.
        </video> -->

        <div class="liveMeeting">
            <h1>Lecture 1 Start at :</h1>
            <!-- <h4>{{new Date()}}</h4> -->
            <h4 class="my-3">Thursday May 25 2023 17:00:00</h4>
            <a href="https://zoom.us/" class="meeting-link">Go to Zoom Meeting Link</a>
        </div>
  
        <navTabtwo class="nav-tab"></navTabtwo>
      </div>
  
      <div class="course-content">
        <course-content class="content" @set-currentvideo="toggleLessonId">
          <h2 class="content-header">Course Content</h2>
        </course-content>
      </div>
  
    </section>
  </template>
  
  <script>
  import navTabtwo from "../../components/liveMeeting/navTabtwo.vue";
  import courseContent from "../../components/courseDetailsComponents/navTabComponents/courseContent.vue";
  
  export default {
    components: {
      navTabtwo,
      courseContent,
    },
    emits : ['set-currentvideo'] ,
    data() {
      return {
        currentlesson: "",
  
      };
    },
    methods: {
      toggleLessonId(currentvideo) { // currentvideo is lessonid passed from courseContent component by $emits
        this.currentlesson = currentvideo;
        console.log(this.currentlesson);
      },
    },
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
    height: max-content; /* to make elements in this div fit the height */
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

  .liveMeeting {
    margin-bottom: 3rem;
  }
  .meeting-link {
    font-weight: 700;
  }
  </style>
  