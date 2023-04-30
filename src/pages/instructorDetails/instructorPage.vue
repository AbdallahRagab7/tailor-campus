<template>
  <section class="page-container">
    <div class="instructor-pic-instructor-info">
     
      <instructor-info></instructor-info>
  

      <div class="profile-pic-social-links">
        <div class="pic">
          <img src="../../assets/instructor.jpg" alt="" />
        </div>

        <div class="social-links">
          <a href="#" class="send-msg-btn">Send message</a>

          <a href="#"><i class="fa-solid fa-link mx-1"></i> Website</a>

          <a href="#"><i class="fa-brands fa-facebook mx-1"></i> Facebook</a>

          <a href="#"><i class="fa-brands fa-linkedin mx-1"></i> Linkedin</a>

          <a href="#"><i class="fa-brands fa-youtube mx-1"></i>Youtube</a>
        </div>
      </div>
    </div>


    <div class="instructor-courses">
      <h2>My courses (58)</h2>

      <div class="courses">
        <!-- <course-card class="course-card"></course-card> -->

      </div>

    </div>
  </section>
</template>

<script>
import courseCard from "../../components/coursesComponents/courseCard.vue"
import instructorInfo from "../../components/instructorDetailsComponents/instructorInfo.vue"
export default {
  components : {courseCard , instructorInfo},

};
</script>

<style>
.page-container {
  margin-top: 4.8rem;
  max-width: 70%;
  margin: 2rem auto;
}
/* .heading {
  color: #6a6f73;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 0.9rem;
}

.instructor-name {
  font-weight: 700;
  font-size: 40px;
  line-height: 1.15;
  margin: 0;
}

.specialization {
  padding: 0.4rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.partner-badge {
  background-color: #cec0fc;
  color: #180a3d;
  display: inline-block;
  padding: 4px 8px;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 700;
}

.instructor-stats {
  display: flex;
  justify-content: space-between;
  max-width: 15rem;
}

.stats-title {
  color: #6a6f73;
  margin-bottom: 0.1rem;
  font-size: 14px;
  font-weight: 700;
}

.stats-numbers {
  color: rgb(28, 29, 31);
  font-size: 24px;
  font-weight: 700;
}

.instructor-description h2 {
  color: rgb(28, 29, 31);
  font-size: 19px;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.description {
  max-width: 600px;
}

.show {
  cursor: pointer;
  color: #401b9c;
  font-weight: 700;
  font-size: 14px;
}

.chervon {
  width: 0.65rem;
} */

.instructor-pic-instructor-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.pic {
  border-radius: 50%;
  width: 12.5rem;
  height: 12.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
}

.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profile-pic-social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
}

.social-links {
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  align-items: center;
}

.social-links a {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1c1d1f;
  background-color: transparent;
  border: 1px solid #1c1d1f;
  font-weight: 700;
  margin-bottom: 0.8rem;
  height: 3rem;
}
.social-links a:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.social-links .send-msg-btn {
  background-color: rgb(28, 29, 31);
  color: white;
}

.social-links .send-msg-btn:hover {
  background-color: rgb(28, 29, 31);
}

.instructor-courses {
  width: 100%;
}

.courses {
  width: 100%;
}
/* .course-card {
  width: 100%;
  height: 100%;
} */
.course-card {
  position: relative;
}
</style>
