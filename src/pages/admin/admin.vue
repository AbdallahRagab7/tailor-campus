<template>
  <div class="admin-page">
    <nav-tab class=""></nav-tab>
  </div>
</template>

<script>
import navTab from "../../components/adminComponents/navTab.vue";
export default {
  //Admin@admin.com
  //onlyAdmin123mpon
  // ...
  components : {
    navTab
  }, 
}
 
</script>

<style scoped>
.admin-page {
  text-align: center;
}
h1 {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(49, 38, 38);
}
</style>
