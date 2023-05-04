<template>
  <section class="cart my-3">
    <h1 class="title mb-4">Shopping Cart</h1>
    <h3 class="courses-no">2 Courses in Cart</h3>

    <div class="shopping-section">
      <div class="course-card">
        <div class="course-img mx-3">
          <img src="../../assets/vuejs2.png" alt="course-img" />
        </div>

        <div class="course-content">
          <div class="course-title">
            <h3 class="mb-1">
              The Complete Web Developer in 2023: Zero to Mastery
            </h3>
            <p class="instructor mb-1">Created By: Abdallah Ragab</p>
          </div>
          <div class="rating">
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <span class="rating-numbers">3 (74,232 reviews)</span>
          </div>

          <div class="course-meta">
            <span class="duration me-3"><i class="far fa-clock"></i>1h</span>
            <span class="students me-3"
              ><i class="fa-regular fa-user"></i> 74 Students</span
            >
            <span class="lessons me-3"
              ><i class="far fa-play-circle"></i> 30 Lectures</span
            >

            <div class="price">
              <!-- <span><i class="fa-regular fa-trash-can"></i></span> -->
              <span class="course-price">
                <i class="fa-solid fa-dollar-sign"></i>120
                <i class="fa-solid fa-tag mx-1"></i
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div class="course-card">the complete web dev</div>
    </div>
  </section>
</template>

<style scoped>
.cart {
  width: 90%;
  margin: 0 auto;
}
.title {
  font-weight: 700;
  font-size: 2.5rem;
}

.courses-no {
  font-weight: 700;
  font-size: 1.1rem;
}
.shopping-section {
  width: 100%;
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

.course-title h3 {
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
.fa-trash-can {
  color: rgb(60, 100, 161);
}
</style>
