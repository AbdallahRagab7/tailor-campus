<template>
       <div class="course-card">
        <div class="course-img mx-3">
          <img src="../../assets/vuejs2.png" alt="course-img" />
        </div>

        <div class="course-content">
          <div class="course-title-instructor">
            <h3 class="mb-2">
              {{courseTitle}}
            </h3>
            <p class="instructor mb-2">Created By: {{createdBy}}</p>
          </div>
    
          <div class="rating-trash">
            <div class="rating">
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star checked"></i>
              <i class="fa fa-star"></i>
              <i class="fa fa-star"></i>
              <span class="rating-numbers">{{rating}} ({{reviews }}reviews)</span>
            </div>

             <div class="price">
              <span class="course-price">
                <i class="fa-solid fa-dollar-sign"></i>{{coursePrice}}
                <i class="fa-solid fa-tag mx-1"></i
              ></span>
            </div>

            <div class="trash">
              <!-- <button class="trash-btn" @click="removeCard(courseId)"> -->
              <button class="trash-btn" @click="removeFromWishlist">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>
          </div>

          <!-- <div class="course-meta">
            <span class="duration me-3"><i class="far fa-clock"></i>1h</span>
            <span class="students me-3"
              ><i class="fa-regular fa-user"></i> {{studentsNo}} Students</span
            >
            <span class="lessons me-3"
              ><i class="far fa-play-circle"></i> {{lessons}} Lectures</span
            >

            <div class="price">
              <span class="course-price">
                <i class="fa-solid fa-dollar-sign"></i>{{coursePrice}}
                <i class="fa-solid fa-tag mx-1"></i
              ></span>
            </div>
          </div> -->
          
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
    "rating",
    "reviews",
    "courseId",
    "instructorId"
  ],
  //   methods : {
  //   removeCard (courseId) {
  //       this.cards = this.cards.filter((card)=>card.courseId !==courseId)
  //   }
  // }
  methods : {
    async removeFromWishlist(id) {
      const response = await fetch(
        "http://localhost:4000/Admin/deleteInstructor/" + this.courseId,
        {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      window.location.reload();
    },
  }
}
</script>

<style scoped>

.title {
  font-weight: 700;
  font-size: 2.5rem;
}



.course-card {
  border-top: 1px solid rgb(209, 215, 220);
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
}

.course-img {
  width: 140px;
  overflow: hidden;
}
.course-img img {
  width: 100%;
  border-radius: 5px;
}

.course-title-instructor h3 {
  font-size: 1rem;
  font-weight: 700;
  color: rgb(60, 100, 161);
  font-family: var(--theme-heading-font);
}
.instructor {
  font-family: var(--theme-secondary-font);
  font-size: 0.9rem;
}
.course-meta {
  display: flex;
  justify-items: center;
  justify-content: space-between;
  font-family: var(--theme-secondary-font);
  color: var(--theme-text-color);
  font-size: 1rem;
  margin-top: 0.9rem;
}
.rating {
  font-weight: 700;
  position: relative;
  font-size: 0.8rem;
}

.checked {
  color: orange;
}
.review-no {
  color: rgb(27, 26, 26);
}

.course-price {
  padding: 0.6rem 1.2rem;
  color: rgb(60, 100, 161);
  border-radius: 3px;
  font-size: 1.4rem;
  line-height: 0.9;
  font-weight: 600;
  letter-spacing: 1px;
  /* display: inline-flex; */
}

.rating-trash {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 411px;
}
.fa-trash-can {
  color: rgb(60, 100, 161);
  height: 1.3rem;
}
.trash-btn {
  border: 0;
  background: transparent;
  margin-right: 1.4rem;
}
</style>