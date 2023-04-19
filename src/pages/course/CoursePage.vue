<template>
  <section class="page-wrapper">
    <div class="course-header">
      <h2 class="course-title">
        Mastering Design With Elementor And Elementor Pro
      </h2>
      <p class="summary">
        Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
        consectetur elit. Vesti at bulum nec odio. Dacere agemusque constantius
        concessis elit videmusne quia stoici constructio dissimillimas audiunt
        homerus commendationes
      </p>

      <div class="course-header-meta">
        <ul class="list-info">
          <li>
            <div class="course-author">
              <img src="../../assets/course-autor.png" alt="#" />Madge
              Alvarez
            </div>
          </li>

          <li>
            <div class="rating">
        <i class="fa fa-star checked"></i>
        <i class="fa fa-star checked"></i>
        <i class="fa fa-star checked"></i>
        <i class="fa fa-star checked"></i>
        <i class="fa fa-star"></i>
        <span>4 (74 reviews)</span>
      </div>
          </li>
          <li><i class="fa fa-user me-2"></i>11 enrolled students</li>
        </ul>
      </div>
    </div>

    <nav-tab></nav-tab>
    
  </section>
</template>
<script>
import NavTab from "./NavTab.vue";
// import Instructor from './Instructor.vue'

export default {
    components : {
        NavTab,
    },

}
</script>

<style scoped>
.page-wrapper {
  /* background-color: #f8f8f8; */
  padding: 2rem 0;
  margin-top: 8rem;
  width: 90%;
  margin: 0 auto;
}

.course-header {
  width: 750px;
  background: #f8f8f8;
  padding: 1.5rem 1rem;
  color: var(--theme-text-color);
}
.course-title {
  margin-bottom: 1rem;
  text-transform: capitalize; /*capital first char in each word */
  color: var(--theme-heading-color);
  font-family: var(--theme-heading-font);
  font-weight: 700;
}
.summary {
    margin-bottom: 1.5rem;
}

.course-header-meta ul {
    width: 100%;
    display: flex;
    justify-content: flex-start ;
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
    font-size: .8rem;
    color: #000;
    font-weight: 650;
}
.checked {
  color: orange;
}

</style>
