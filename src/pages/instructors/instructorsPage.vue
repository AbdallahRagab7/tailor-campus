<template>
  <div class="page-header">
    <img src="../../assets/coursescover3.jpg" alt="" />
    <p>Tailor Campus</p>
  </div>

  <div class="topbar-search">
    <form method="get" action="#">
      <input type="text" placeholder="Search our courses" class="search-bar" />
      <button type="submit" class="search-btn">
        <i class="fa fa-search magnify"></i>
      </button>
    </form>
  </div>

  <div class="courses-container">
    <section class="courses">
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
      :instructorImage ="instructor.instructorImage"
      ></instructor-card>
    </section>
  </div>
</template>

<script>
import instructorCard from "../../components/instructorsComponents/instructorCard.vue"
export default {
  components: {
    instructorCard,
  },
  data() {
    return {
      instructors: [
        {
          instructorId: "i1",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: '#',
          linkedinLink: '#',
          youtubeLink: '#',
          studentsNo: 7474,
          coursesNo : 22 ,
          instructorImage : '3awz link elcourse image'
        },
        
        {
          instructorId: "i2",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: '#',
          linkedinLink: '#',
          youtubeLink: '#',
          studentsNo: 74,
          coursesNo : 30 ,
          instructorImage : '3awz link elcourse image'
        },
        
        {
          instructorId: "i3",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: '#',
          linkedinLink: '#',
          youtubeLink: '#',
          studentsNo: 74,
          coursesNo : 30 ,
          instructorImage : '3awz link elcourse image'
        },
        
        {
          instructorId: "i4",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: '#',
          linkedinLink: '#',
          youtubeLink: '#',
          studentsNo: 74,
          coursesNo : 30 ,
          instructorImage : '3awz link elcourse image'
        },
        
        {
          instructorId: "i5",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: '#',
          linkedinLink: '#',
          youtubeLink: '#',
          studentsNo: 74,
          coursesNo : 30 ,
          instructorImage : '3awz link elcourse image'
        },
        
        {
          instructorId: "i6",
          instructorName: "Maximilian Schwarzmüller",
          specialization: "Web developer",
          facebookLink: '#',
          linkedinLink: '#',
          youtubeLink: '#',
          studentsNo: 74,
          coursesNo : 30 ,
          instructorImage : '3awz link elcourse image'
        },
        
        
      ],
    };
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
}

.topbar-search {
  display: flex;
  justify-content: flex-end;
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
.courses-container {
  margin: 0 auto;
  width: 94%;
  margin-bottom: 5rem;

}

.courses {
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