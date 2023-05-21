<template>
  <section class="page-wrapper">
    <div class="row-components">
      <div class="header-nav-column">
        <course-header :courseId="courseId"> </course-header>
        <nav-tab :courseId="courseId"> </nav-tab>
      </div>
      <!-- <h1>{{ courseId }}</h1> -->
      <course-sidebar :courseId="courseId"> </course-sidebar>
    </div>
  </section>
</template>
<script>
import NavTab from "../../components/courseDetailsComponents/navTabComponents/NavTabthree.vue";
import courseHeader from "../../components/courseDetailsComponents/courseHeader.vue";
import courseSidebar from "../../components/courseDetailsComponents/courseSidebarr.vue";

export default {
  components: {
    NavTab,
    courseHeader,
    courseSidebar,
  },
  data() {
    return {
      courseId: this.$route.params.courseId,
    };
  },
  provide : {
    provide () {
      return {
        courseId : this.courseId,
      }
    }
  }
};
</script>

<style scoped>
.page-wrapper {
  width: 86%;
  margin: 7rem auto;
  background-color: #fff;
}
.row-components {
  display: flex;
  justify-content: space-between;
  display: wrap;
}
</style>
