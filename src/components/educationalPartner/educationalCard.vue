<template>
    <div class="instructor-card">
      <div class="instructor-header">
        <!-- <router-link :to="instructorLink"> -->
        <!-- <img src="../../assets/instructor.jpg" alt="instructor-img" /> -->
        <!-- <img :src=" 'http://localhost:4000/'+ instructorImage.replace('images/', '')" alt=""> -->
        <!-- <img src="../../assets/edu.png" alt=""> -->
        <img src="../../assets/new-horizion1.jpg" alt="">
        <!-- </router-link> -->
      </div>
  
      <div class="instructor-content">
        <span class="instructor-social-links">
          <a href="#"> <i class="fab fa-facebook-f"></i></a>
          <a href="#"> <i class="fab fa-linkedin-in"></i></a>
          <a href="#"> <i class="fab fa-youtube"></i></a>
        </span>
  
        <h3 class="instructor-title">
          <router-link to="/Educational-Partners">{{ instructorName }} </router-link>

        </h3>
        <p class="specialization">
          {{ specialization }}
        </p>
      </div>
  
      <div class="instructor-meta">
        <span class="students"
          ><i class="fa-regular fa-user"></i> {{ studentsNo }} Students</span
        >
        <span class="lessons"
          ><i class="far fa-play-circle me-2"></i>{{ coursesNo }} Courses</span
        >
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: [
      "instructorId",
      "instructorName",
      "specialization",
      // "facebookLink",
      // "linkedinLink",
      // "youtubeLink",
      "studentsNo",
      "coursesNo",
      "instructorImage",
      // "instructorImage",
    ],
    computed: {
      instructorLink() {
        return { name: "instructor", params: { instructorId: this.instructorId } };
      },
    },
  };
  </script>
  
  <style scoped>
  .instructor-card {
    width: 22rem;
    border: 2px solid #e6e7ec;
    border-radius: 4px;
    padding: 0px 2rem 1.5rem 2rem;
    transition: all 0.4s ease;
    margin: 0.2rem 1.2rem;
  }
  .instructor-card:hover {
    border-color: transparent;
    box-shadow: 0 14px 60px rgba(0, 0, 0, 0.12);
    background: #fff;
    transform: scale(1.05);
  }
  .instructor-header {
    margin-top: -60px;
    margin-bottom: 2.5rem;
    border-radius: 10px;
    overflow: hidden;
    height: 190px;
    
  }
  
  .instructor-header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .instructor-content {
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
  }
  
  .instructor-social-links {
    position: absolute;
    top: -4rem;
    right: 21px;
    background: var(--theme-primary-color);
    padding: 0.6rem 0.8rem;
    color: #fff;
    border-radius: 7px 0px 0px 7px;
    line-height: 1rem;
  }
  
  .instructor-social-links a {
    color: white;
    margin: 6px;
    opacity: 0.8;
    font-size: 1.1rem;
  }
  .instructor-social-links a:hover {
    opacity: 1;
  }
  
  .specialization {
    font-family: var(--theme-secondary-font);
    color: var(--theme-text-color);
    font-size: 1.2rem;
    text-transform: capitalize;
  }
  
  .instructor-meta {
    display: flex;
    justify-content: space-between;
    justify-items: center;
    font-family: var(--theme-secondary-font);
    color: var(--theme-text-color);
    font-size: 1rem;
    margin-top: 0.9rem;
  }
  
  .instructor-title a {
    color: rgb(20, 19, 59);
    cursor: pointer;
    margin-bottom: 1.8rem;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 1.35rem;
    transition: all 0.3s ease-in-out;
  }
  
  .instructor-title a:hover {
    color: var(--theme-primary-color);
  }
  </style>
  