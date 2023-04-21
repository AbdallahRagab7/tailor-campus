<template>
  <section class="page-wrapper">
    <div class="row-components">
      <div class="header-nav-column">
        <course-header></course-header>
        <nav-tab></nav-tab>
      </div>

      <course-sidebar></course-sidebar>
    </div>
  </section>
</template>
<script>
import NavTab from "./NavTab.vue";
import courseHeader from "./courseHeader.vue";
import courseSidebar from "./courseSidebar.vue";

export default {
  components: {
    NavTab,
    courseHeader,
    courseSidebar,
  },
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
