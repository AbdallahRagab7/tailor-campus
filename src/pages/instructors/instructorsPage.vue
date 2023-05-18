<template>
  <div class="page-header">
    <img src="../../assets/instructorscover3.jpg" alt="" />
    <p>Tailor Campus</p>
  </div>

  <div class="topbar-search">
    <div class="instructor-register">
      <router-link to="/registerinstructor" class="register-btn mx-5">Register as instructor</router-link>
    </div>

    <form method="get" action="#">
      <input
        type="text"
        placeholder="Search our instructors"
        class="search-bar"
      />
      <button type="submit" class="search-btn">
        <i class="fa fa-search magnify"></i>
      </button>
    </form>

  </div>

  <div class="instructors-container">
    <section class="instructors">
      <instructor-card
        v-for="instructor in instructors"
        :key="instructor.instructorId"
        :instructorId="instructor.instructorId"
        :instructorName="instructor.instructorName"
        :specialization="instructor.specialization"
        :facebookLink="instructor.facebookLink"
        :linkedinLink="instructor.linkedLink"
        :youtubeLink="instructor.youtubeLink"
        :studentsNo="instructor.studentsNo"
        :coursesNo="instructor.coursesNo"
        :instructorImage="instructor.instructorImage"
      ></instructor-card>
    </section>
  </div>
</template>

<script>
import instructorCard from "../../components/instructorsComponents/instructorCard.vue";
export default {
  components: {
    instructorCard,
  },
  data() {
    return {
      instructors: [
        {
          instructorId: "i1",
          instructorName: "Max Johnas ",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 747,
          coursesNo: 4,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i2",
          instructorName: "Andrei Neagoie",
          specialization: "Data Analyst",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 232,
          coursesNo: 10,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i3",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Flutter Development",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 74,
          coursesNo: 7,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i4",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 74,
          coursesNo: 10,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i5",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 741,
          coursesNo: 5,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i6",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 425,
          coursesNo: 6,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i7",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 324,
          coursesNo: 4,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i8",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 741,
          coursesNo: 3,
          instructorImage: "3awz link elcourse image",
        },

        {
          instructorId: "i9",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: "#",
          linkedinLink: "#",
          youtubeLink: "#",
          studentsNo: 74,
          coursesNo: 4,
          instructorImage: "3awz link elcourse image",
        },
      ],
    };
  },
  methods: {
     
        async getInstructors() {
            try {

                const response = await fetch("http://localhost:4000/allinstructors");
                console.log(response);
                console.log('StatsText in response is :' + response.statusText)
                const responseData = await response.json();
                if(!response.ok){
                const error = new error (responseData.message ||"Failed to Fetch" )
                throw error;
            }
            console.log(responseData);
                
            }
            catch(error ){
                this.error= error.message || 'something wrong'
            }
        },

    },
    created() {
        this.getInstructors();
    },
};
</script>

<style scoped>
.page-header {
  width: 100%;
  margin-bottom: 4rem;
}
.page-header img {
  width: 100%;
  object-fit: cover;
  height: 20rem;
}
.page-header p {
  text-align: center;
  font-weight: bold;
  position: relative;
  bottom: 3rem;
  color: white;
  font-size: 1.2rem;
  font-family: Verdana;
  opacity: 0.7;
}

.topbar-search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 7rem;
}
.search-bar {
  height: 3.2rem;
  width: 22rem;
  border-radius: 1.85rem;
  padding-left: 1.25rem;
  background: #eef5f9;
  border: 2px solid #f5f5f5;
}
.register-btn {
  width: 70%;
  border-color: var(--theme-secondary-color);
  color: #fff;
  background: var(--theme-secondary-color);
  font-weight: 600;
  position: relative;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border: 2px solid transparent;
  transition: all 0.6s ease;
  border-radius: 6px;
}

.register-btn:hover {
  background: var(--theme-primary-color);
    border-color: var(--theme-primary-color);
}
/* .search-bar::placeholder {
    color: red;
} */
.search-btn {
  background: transparent;
  border: none;
  outline: none;
  margin-left: -2.5rem;
}
.fa-magnifying-glass {
  width: 20px;
  height: 19px;
  color: grey;
}
.instructors-container {
  margin: 0 auto;
  width: 94%;
  margin-bottom: 5rem;
}

.instructors {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8rem;
  justify-content: center;
  /* justify-content: space-between; */
}

/* .courses > :last-child {
  margin-right: auto;
  align-self: start;
}   */

/* .courses {
  display: grid;
   grid-template-columns: 0fr 0fr 0fr;
   row-gap: 7rem;
   justify-content: center;
   margin: 0 auto;
  
} */
</style>
