<template>
  <div>
    <section class="banner">
      <div class="hero">
        <!-- / .container will be flex(contain all elements) -->

        <div class="hero-content">
          <!-- should be column -->
          <span class="subheading">Over 3000 Course Available</span>
          <h1>Upgrade your learning Skills & Upgrade your life</h1>
          <p class="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            ullam libero magni reiciendis quam ipsa blanditiis, facilis velit
            eaque illo?
          </p>

          <div class="hero-btn">
            <router-link to="/home" class="find-course-btn"
              >Find Courses</router-link
            >
            <router-link to="/home" class="get-started-btn"
              >Get Started</router-link
            >
          </div>
        </div>

        <div class="banner-img">
          <img src="../../assets/banner_img.png" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
  z-index: 1;
  background: #2f2d51;
  /* padding-bottom: 13.75rem; */
  padding-bottom: 8rem
}
.hero {
  display: flex;
  justify-content: space-between;
}
.banner-img {
  height: 22rem;
  width: 35rem;
  margin-top: 3rem;
  margin-right: 2rem;
}
.banner-img img {
  width: 100%;
  height: 100%;
}
.hero-content {
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  justify-content: center;
  /* align-items: center; */
  margin-left: 3rem;
  margin-top: 3rem;
}
h1 {
  color: rgb(255, 255, 255);
}
.subheading {
  color: rgb(255, 255, 255);
  font-family: var(--theme-secondary-font);
  line-height: 30px;
  font-size: 18px;
}
.lorem {
  color: rgb(255, 255, 255);
}

.hero-btn {
  margin-top: 1rem;
}

.find-course-btn {
  margin-right: 3rem;
  /* justify-content: space-between; */
  background: var(--theme-primary-color);
  color: #fff;
  border-color: var(--theme-primary-color);
  font-weight: 600;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  border: 2px solid transparent;
  transition: all 0.6s ease;
  border-radius: 0.25rem;
}

.find-course-btn:hover {
  border-color: var(--theme-secondary-color);
  color: #fff;
  background: var(--theme-secondary-color);
}

.get-started-btn {
  background: #fff;
  border-color: #fff;
  color: var(--theme-primary-color);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  border: 2px solid transparent;
  transition: all 0.6s ease;
  border-radius: 0.25rem;
}

.get-started-btn:hover {
  border-color: var(--theme-primary-color);
  color: #fff;
  background: var(--theme-primary-color);
}
</style>
