<template>
  <div class="course-card">
    <div class="course-header">
      <div class="course-thumb">
        <img src="../../assets/vuejs2.png" alt="course-img" />
      </div>
    </div>

    <div class="course-content">
      <span class="course-price">
        <i class="fa-solid fa-dollar-sign"></i> {{ coursePrice }}</span
      >
      <p class="instructor">
        Created By : <a href="#"> {{ createdBy }}</a>
      </p>
      <h3 class="course-title">{{ courseTitle }}</h3>
    </div>

    <div class="course-meta">
      <span class="duration"
        ><i class="far fa-clock me-2"></i>{{ duration }}</span
      >
      <span class="students"
        ><i class="fa-regular fa-user"></i> {{ studentsNo }} Students</span
      >
      <span class="lessons"
        ><i class="far fa-play-circle me-2"></i>{{ lessons }} Lessons</span
      >
    </div>
    <div class="enroll">
      <div class="rating">
        <i class="fa fa-star checked"></i>
        <i class="fa fa-star checked"></i>
        <i class="fa fa-star checked"></i>
        <i class="fa fa-star"></i>
        <i class="fa fa-star"></i>
        <span>{{ rating }} ({{ reviews }} reviews)</span>
      </div>
      <button class="enroll-btn">
        Enroll Now <i class="fa fa-long-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "createdBy",
    "courseTitle",
    "coursePrice",
    "studentsNo",
    "duration",
    "lessons",
    "rating","reviews"
  ],

};
</script>

<style scoped>
.course-card {
  /* margin: 80px auto; */
  width: 24rem;
  /* width: 23rem; */
  border: 2px solid #e6e7ec;
  border-radius: 4px;
  padding: 0px 2rem 1.5rem 2rem;
  transition: all 0.4s ease;
  margin: .2rem 1rem;
  
}
.course-card:hover {
  border-color: transparent;
  box-shadow: 0 14px 60px rgba(0, 0, 0, 0.12);
  background: #fff;
  transform: scale(1.05);
  /* transition: transform 0.5 ease-out 3; */
}
.course-header {
  margin-top: -60px;
  margin-bottom: 3rem;
}
.course-thumb {
  width: 350px;
  /* width: 325px; */
  border-radius: 8px;
  margin: 0 auto;
  overflow: hidden; /* to make img take same border-radius */
}

.course-thumb img {
  width: 100%;
  object-fit: cover;
}

.course-content {
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
}

.course-price {
  position: absolute;
  top: -4rem;
  right: 21px;
  background: var(--theme-primary-color);
  padding: 0.6rem 1.2rem;
  color: #fff;
  border-radius: 3px;
  font-size: 1.2rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  display: inline-flex;
}

.instructor {
  font-family: var(--theme-secondary-font);
  color: var(--theme-text-color);
  font-size: 1.2rem;
}
.instructor a {
  font-family: "Jost";
  color: inherit;
}
.instructor a:hover {
  color: var(--theme-secondary-color);
}
.course-meta {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  font-family: var(--theme-secondary-font);
  color: var(--theme-text-color);
  font-size: 1rem;
}

.course-title {
  color: rgb(20, 19, 59);
  cursor: pointer;
  margin-bottom: 1.8rem;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 1.35rem;
  transition: all 0.3s ease-in-out;
}

.course-title:hover {
  color: var(--theme-primary-color);
}
.enroll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.enroll-btn {
  background: transparent;
  color: var(--theme-primary-color);
  border-color: var(--theme-primary-color);
  border-radius: 15px;
  padding: .3rem .35rem;
  font-weight: 600;
  transition: all 0.6s ease;
  border: 2px solid;
  font-size: 1rem;
  margin-top: 1rem;
  /* text-align: center; */
}

.enroll-btn:hover {
  background: var(--theme-primary-color);
  color: #fff;
  border-color: var(--theme-primary-color);
}
.rating {
  width: 12.5rem;
  font-weight: bold;
  position: relative;
  top: 0.5rem;
  font-size: .9rem;
}
.checked {
  color: orange;
}
.review-no {
  color: rgb(27, 26, 26);
}
</style>
