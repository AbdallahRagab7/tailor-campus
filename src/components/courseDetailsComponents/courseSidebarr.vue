<!-- <template>
  <div class="course-sidebar">
    <div class="course-thumb">
      <img src="../../assets/vuejs2.png" alt="course-img" />
    </div>

    <div class="price-header">
      <h2 class="course-current-price">
        {{ "$" + courseSideBarCard.CurrentPrice }}
        <span class="price-before-sale">{{
          "$" + courseSideBarCard.priceBeforeSale
        }}</span>
      </h2>
      <span class="course-sale-percentage">{{
        courseSideBarCard.SalePercentage
      }}</span>
    </div>

    <ul class="course-sidebar-list">
      <li>
        <span><i class="fa-solid fa-sliders"></i> Level </span>
        {{ courseSideBarCard.level }}
      </li>

      <li>
        <span><i class="fas fa-play-circle"></i> Lectures</span>
        {{ courseSideBarCard.lectures }}
      </li>
      <li>
        <span><i class="far fa-user"></i> Students</span>
        20
      </li>
      <li>
        <span><i class="far fa-clock"></i> Duration</span>
        {{ courseSideBarCard.duration }}
      </li>
      <li>
        <span><i class="fa-solid fa-globe"></i> Language</span>
        {{ courseSideBarCard.language }}
      </li>

      <li>
        <span><i class="far fa-calendar"></i> Updated</span>
        {{ courseSideBarCard.updatedDate }}
      </li>
    </ul>

    <router-link to="/course/c1/i1" class="enroll-course-btn"
      ><i class="fa-solid fa-cart-shopping"></i> Enroll Course</router-link
    >

    <div class="course-material">
      <h4>Material Includes</h4>
      <ul class="course-meterial-list">
        <li
          v-for="material in courseSideBarCard.materialInclude"
          :key="material"
        >
          <i class="fa-solid fa-arrow-right-long"></i> {{ material }}
        </li>
      </ul>
    </div>
  </div>
</template> -->

<template>
  <div class="course-sidebar">
    <div class="course-thumb">
      <!-- <img src="../../assets/vuejs2.png" alt="course-img" /> -->
      <img :src=" 'http://localhost:4000/'+courseImage" alt="course-img" />
    </div>

    <div class="price-header">
      <h2 class="course-current-price">
        {{ "$" + coursePrice }}
        <span class="price-before-sale">{{
          "$" + courseSideBarCard.priceBeforeSale
        }}</span>
      </h2>
      <span class="course-sale-percentage">{{
        courseSideBarCard.SalePercentage
      }}</span>
    </div>

    <ul class="course-sidebar-list">
      <li>
        <span><i class="fa-solid fa-sliders"></i> Level </span>
        {{ level }}
      </li>

      <li>
        <span><i class="fas fa-play-circle"></i> Lectures</span>
        {{ lessons }}
      </li>
      <li>
        <span><i class="far fa-user"></i> Students</span>
        {{ students }}
      </li>
      <li>
        <span><i class="far fa-clock"></i> Duration</span>
        {{ courseSideBarCard.duration }}
      </li>
      <li>
        <span><i class="fa-solid fa-globe"></i> Language</span>
        {{ language }}
      </li>

      <li>
        <span><i class="far fa-calendar"></i> Updated</span>
        {{ updatedAt }}
      </li>
    </ul>
    <!-- </div> -->

    <!-- <div class="buy-btn"> -->
    <router-link to="/course/c1/i1" class="enroll-course-btn"
      ><i class="fa-solid fa-cart-shopping"></i> Enroll Course</router-link
    >
    <!-- </div> -->

    <div class="course-material">
      <h4>Material Includes</h4>
      <ul class="course-meterial-list">
        <li
          v-for="material in courseSideBarCard.materialInclude"
          :key="material"
        >
          <i class="fa-solid fa-arrow-right-long"></i> {{ material }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["courseId"],
  data() {
    return {
      courseSideBarCard: {
        CurrentPrice: 120,
        priceBeforeSale: 150,
        SalePercentage: "39%",
        level: "Beginner",
        lectures: 47,
        students: 74,
        duration: "9h",
        language: "English",
        updatedDate: "October 15, 2022",
        courseImage: "3awz link img el course",

        materialInclude: [
          "Videos",
          "Files for Development",
          "Documentation Files",
        ],
      },
      courseImage: null,

      coursePrice: "",
      level: "",
      students: "",
      lessons: "",
      language: "",
      updatedAt: "",
      courseRate: "",
    };
  },
  methods: {
    async courseSideBar() {
      try {
        const response = await fetch(
          // "http://localhost:4000//course/" + this.courseId
          "http://localhost:4000/course/3"
        );
        // console.log(response);
        const responseData = await response.json();
        this.coursePrice = responseData.courseHeader[0].course_price;
        this.level = responseData.courseHeader[0].level;
        this.students = responseData.courseHeader[0].num_student_enrolled;
        this.lessons = responseData.courseHeader[0].num_lesson;
        this.language = responseData.courseHeader[0].course_language;
        this.courseRate = responseData.courseHeader[0].course_rate;
        this.updatedAt = responseData.courseHeader[0].updatedAt;
        this.courseImage = responseData.courseHeader[1].image.replace("images/", "");
        console.log(coursePrice)
        console.log(responseData);

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
    this.courseSideBar();
  },
};
</script>

<style scoped>
.course-sidebar {
  display: flex;
  flex-direction: column;
  box-shadow: 0 30px 50px 0 rgba(51, 51, 51, 0.08);
  padding: 30px 35px 30px;
  border: 1px solid rgba(1, 90, 189, 0.1);
  max-height: 900px;
}

.course-thumb {
  margin-bottom: 30px;
  border-radius: 5px;
  overflow: hidden; /*to make img take same border-radius*/
  max-width: 294px;
}
.course-thumb img {
  object-fit: cover;
  width: 100%;
}

.price-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.course-current-price {
  font-size: 2.1rem;
  line-height: 34px;
  color: var(--theme-primary-color);
  font-weight: 700;
}

.course-current-price span {
  color: #777;
  font-weight: 600;
  margin-left: 6px;
  text-decoration: line-through;
  font-size: 24px;
  line-height: 24px;
}
.course-sale-percentage {
  border: 2px solid #eee;
  border-radius: 5px;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  padding: 0 10px;
  text-align: center;
  color: var(--theme-secondary-color);
  margin-left: 10px;
  background: #eee;
}

.course-sidebar-list {
  margin: 20px 0px;
  padding-left: 0px;
  font-family: var(--theme-secondary-font);
  font-weight: 400;
  color: var(--theme-text-color);
}

.course-sidebar-list li {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}

.buy-btn {
  width: 100%;
}

.enroll-course-btn {
  width: 100%;
  /* width: 3rem; */
  border-color: var(--theme-secondary-color);
  color: #fff;
  background: var(--theme-secondary-color);
  font-weight: 600;
  position: relative;
  text-transform: capitalize;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  border: 2px solid transparent;
  transition: all 0.6s ease;
  text-align: center;
}

.enroll-course-btn:hover {
  background: var(--theme-primary-color);
  border-color: var(--theme-primary-color);
}
.course-material {
  margin-top: 2.5rem;
}

.course-material li {
  padding: 5px 0;
  color: var(--theme-text-color);
  font-family: var(--theme-secondary-font);
  font-size: 1rem;
}
</style>
