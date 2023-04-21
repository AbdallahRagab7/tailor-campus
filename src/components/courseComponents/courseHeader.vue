<template>
    <section>
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
              <img src="../../assets/course-autor.png" alt="#" />Madge Alvarez
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
    </section>
</template>

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