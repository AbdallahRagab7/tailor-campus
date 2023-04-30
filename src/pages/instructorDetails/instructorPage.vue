<template>
  <section class="page-container">
    <div class="instructor-pic-instructor-info">
      <div class="instructor-info">
        <div class="heading">instructor</div>
        <h1 class="instructor-name">Maximilian Schwarzmüller</h1>
        <h2 class="specialization">
          AWS certified, Professional Web Developer and Instructor
        </h2>
        <div class="partner-badge mb-4">Tailor Campus Instructor Partner</div>

        <div class="instructor-stats mb-5">
          <div class="total-students">
            <div class="stats-title">Total Students</div>
            <div class="stats-numbers">2,467,636</div>
          </div>

          <div class="reviews">
            <div class="stats-title">Reviews</div>
            <div class="stats-numbers">929,483</div>
          </div>
        </div>

        <div class="instructor-description mt-4">
          <h2>About me</h2>
          <p class="experience-as my-1">
            <strong>Experience as (Web) Developer</strong>
          </p>
          <p class="description">{{ displayedContent }}</p>

          <div class="show-hide-btn" v-if="content.length > 700">
            <p class="show" v-if="isExpanded" @click="expandContent">
              Show more <i class="fa-solid fa-chevron-down chervon"></i>
            </p>
            <p class="show" v-else @click="collapseContent(700)">
              Show Less <i class="fa-solid fa-chevron-up chervon"></i>
            </p>
          </div>
        </div>
      </div>

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
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      content:
        "Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays! I also build full-stack applications and acquired expert DevOps and cloud computing knowledge - proven by the many AWS certifications I hold (incl. the top-level Solutions Architect Professional certification). As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills. Experience as Instructor As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses and more than 2,000,000 students on Udemy is the best proof for that.Whether working as development instructor or teaching Business Administration I always received great feedback. The most rewarding experience is to see how people find new, better jobs, build awesome web applications, acquire amazing projects or simply enjoy their hobby with the help of my content.Together with Manuel Lorenz, I founded Academind to offer the best possible learning experience to our more than 2,000,000 students.",
      // "iam a web developer",
      displayedContent: "",
      isExpanded: false,
    };
  },
  mounted() {
    this.collapseContent(700); // number of words will be appear without click on show
  },
  methods: {
    collapseContent(shortenSize) {
      this.displayedContent = this.content.slice(0, shortenSize);
      this.isExpanded = !this.isExpanded;
    },
    expandContent() {
      this.displayedContent = this.content;
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style>
.page-container {
  margin-top: 4.8rem;
  max-width: 70%;
  margin: 2rem auto;
}
.heading {
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
}

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
</style>
