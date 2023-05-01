<template>
  <div class="instructor-box">
    <div class="instructor-photo">
      <img src="../../../assets/instructor.jpg" alt="instructor-img" />
    </div>

    <div class="instructor-content">
      <h4 class="instructor-name">
        <router-link :to="instructorLink">{{
          instructorDetails.instructorName
        }}</router-link>
      </h4>

      <p class="about">
        {{ instructorDetails.aboutInstructor }}
      </p>

      <div class="intructor-social-links">
        <span>Follow Me: </span>
        <a :href="instructorDetails.facebookLink">
          <i class="fab fa-facebook-f"></i
        ></a>
        <a :href="instructorDetails.linkedinLink">
          <i class="fab fa-linkedin-in"></i
        ></a>
        <a :href="instructorDetails.youtubeLink">
          <i class="fab fa-youtube"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instructorDetails: {
        instructorId: "i1",
        instructorName: "Maximilian Schwarzmüller",
        aboutInstructor:
          "Maximilian Schwarzmüller is a frontend developer, who brings passion to everything he does. ",
        instructorImage: "3awz link img el instructor",
        facebookLink: "#",
        linkedinLink: "#",
        youtubeLink: "#",
      },
    };
  },

  computed: {
    instructorLink() {
      return {
        name: "instructor",
        params: { instructorId: this.instructorDetails.instructorId },
      };
    },
  },
};
</script>

<style scoped>
.instructor-box {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  max-width: 756px;
  max-height: 400px;
}
.instructor-content {
  max-width: 580px;
}

.instructor-photo {
  max-width: 250px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 1.5rem;
}
.instructor-photo img {
  width: 100%;
  max-height: 230px;
  object-fit: cover;
}

.instructor-name a {
  color: var(--theme-heading-color);
}
.instructor-name a:hover {
  color: var(--theme-primary-color);
  transition: all 0.3s ease-in-out;
}

.router-link-active {
  font-family: var(--theme-heading-font);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--theme-heading-color);
  transition: all 0.3s ease-in-out;
}
.router-link-active:hover {
  color: var(--theme-primary-color);
}

.about,
.intructor-social-links {
  color: var(--theme-text-color);
  font-family: var(--theme-secondary-font);
  line-height: 30px;
  font-size: 16px;
}

.intructor-social-links a {
  color: #444;
  margin-right: 5px;
  font-size: 14px;
}
</style>
