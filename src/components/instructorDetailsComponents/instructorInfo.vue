<template>
  <div class="instructor-info">
    <div class="heading">instructor</div>
    <!-- <h1 class="instructor-name">{{ instructorInformation.instructorName }}</h1> -->
    <h1 class="instructor-name">{{ this.instructorDetails.Name }}</h1>
    <h2 class="specialization">
      <!-- {{ instructorInformation.specialization }} -->
       {{instructorDetailsOne.specialization}}
    </h2>
    <div class="partner-badge mb-4">Tailor Campus Instructor Partner</div>

    <div class="instructor-stats mb-5">
      <div class="total-students">
        <div class="stats-title">Total Students</div>
        <!-- <div class="stats-numbers">{{ instructorInformation.studentsNo }}</div> -->
        <div class="stats-numbers">{{ instructorDetailsOne.Num_of_Student_enrolled }}</div>
      </div>

      <div class="reviews">
        <div class="stats-title">Reviews</div>
        <!-- <div class="stats-numbers">{{ instructorInformation.reviewsNo }}</div> -->
        <div class="stats-numbers">{{ instructorDetailsOne.Num_of_Total_Rates }}</div>
      </div>
    </div>

    <div class="instructor-description mt-4">
      <h2>About me</h2>

      <!-- <p class="experience-as my-1">
        <strong>Experience as (Web) Developer</strong>
      </p> -->
      <p class="experience-as my-1">
        <strong>{{instructorDetailsOne.specialization}}</strong>
      </p>


      <!-- <p class="description">{{ displayedContent }}</p> -->
      <p class="description">{{ this.instructorDetails.About_Me }}</p>

      <!-- <div
        class="show-hide-btn"
        v-if="instructorInformation.aboutMe.length > 700"
      >
        <p class="show" v-if="isExpanded" @click="expandContent">
          Show more <i class="fa-solid fa-chevron-down chervon"></i>
        </p>
        <p class="show" v-else @click="collapseContent(700)">
          Show Less <i class="fa-solid fa-chevron-up chervon"></i>
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  // props : ['instructorId'],
  data() {
    return {
      displayedContent: "",
      isExpanded: false,
      instructorId: this.$route.params.instructorId,
      instructorInformation: {
        instructorName: "Maximilian Schwarzmüller",
        instructorId: "i1",
        instructorImg: "3awz link",
        specialization:
          "AWS certified, Professional Web Developer and Instructor",
        studentsNo: "2,467,636",
        reviewsNo: "929,483",
        aboutMe:
          "Starting out at the age of 12 I never stopped learning new programming skills and languages. Early I started creating websites for friends and just for fun as well. Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant. The success and fun I have in this job is immense and really keeps that passion burningly alive.Starting web development on the backend (PHP with Laravel, NodeJS, Python) I also became more and more of a frontend developer using modern frameworks like React, Angular or VueJS in a lot of projects. I love both worlds nowadays! I also build full-stack applications and acquired expert DevOps and cloud computing knowledge - proven by the many AWS certifications I hold (incl. the top-level Solutions Architect Professional certification). As a self-taught developer I had the chance to broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in a major strategy consultancy as well as a bank. While learning, that I enjoy development more than these fields, the time in this sector greatly improved my overall experience and skills. Experience as Instructor As a self-taught professional I really know the hard parts and the difficult topics when learning new or improving on already-known languages. This background and experience enables me to focus on the most relevant key concepts and topics. My track record of many 5-star rated courses and more than 2,000,000 students on Udemy is the best proof for that.Whether working as development instructor or teaching Business Administration I always received great feedback. The most rewarding experience is to see how people find new, better jobs, build awesome web applications, acquire amazing projects or simply enjoy their hobby with the help of my content.Together with Manuel Lorenz, I founded Academind to offer the best possible learning experience to our more than 2,000,000 students.",
        // "iam a web developer",
      },
      // coursesCreatedByMe : [],

      instructorDetails : '',
      instructorDetailsOne :'' ,
      instructorCourses : [],
      // profileImage : null ,
    };
  },
  
  methods: {
    collapseContent(shortenSize) {
      this.displayedContent = this.instructorInformation.aboutMe.slice(
        0,
        shortenSize
      );
      this.isExpanded = !this.isExpanded;
    },
    expandContent() {
      this.displayedContent = this.instructorInformation.aboutMe;
      this.isExpanded = !this.isExpanded;
    },
    async instructorInfo () {
      try {
        const response = await fetch(
          "http://localhost:4000/instructorprofile/" + this.instructorId 
        );
        // console.log(response);
        const responseData = await response.json();
        console.log(responseData)

         this.instructorDetails = responseData.instructorName[0];
        console.log(this.instructorDetails)

        this.instructorDetailsOne = responseData.instructorName[1]
        this.instructorCourses = responseData.instructorName[2]

        // this.profileImage = responseData.instructorName[0].Image_Profile
        // console.log(this.profileImage)

        if (!response.ok) {
          const error = new error(responseData.message || "Failed to Fetch");
          throw error;
        }
        // console.log(responseData);
      } catch (error) {
        this.error = error.message || "something wrong";
      }
    },
  },
  mounted() {
    this.collapseContent(700); // number of words will be appear without click on show
    // console.log(this.instructorId)
    this.instructorInfo ()
  },
  // created() {
    // this.instructorInfo ();
  // },

};
</script>

<style scoped>
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
</style>
