<template>
  <div class="nav">
    <button @click="setActivePage('Overview')" :class="Overview">
      Overview
    </button>
    <button @click="setActivePage('Curriculam')" :class="Curriculam">
      Curriculam
    </button>
    <button @click="setActivePage('Instructor')" :class="Instructor">
      Instructor
    </button>
    <button @click="setActivePage('Reviews')" :class="Reviews">Reviews</button>
  </div>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
<script>
import Overview from "./Overview.vue";
import Instructor from "./Instructor.vue";
import Curriculam from "./Curriculam.vue";
import Reviews from "./Reviews.vue";
export default {
  components: { Overview, Instructor, Curriculam, Reviews },
  data() {
    return {
      selectedTab: "Overview",
    };
  },
  methods: {
    setActivePage(page) {
      this.selectedTab = page;
    },
  },
  computed: {
    Overview() {
      return this.selectedTab === "Overview" ? " btn active" : "btn";
    },
    Instructor() {
      return this.selectedTab === "Instructor" ? "btn active" : "btn";
    },
    Curriculam() {
      return this.selectedTab === "Curriculam" ? "btn active" : "btn";
    },
    Reviews() {
      return this.selectedTab === "Reviews" ? "btn active" : "btn";
    },
  },
};
</script>

<style scoped>
.nav {
  transition: all 0.4s ease 0s;
  margin-bottom: 40px;
  border-bottom: 2px solid #ddd;
 max-width: 750px;
}
.btn {
  background: transparent;
  border: 0;
  font-family: var(--theme-secondary-font);
  color: #ababab;
  font-size: 1.125rem;
  font-weight: 700;
  transition: all 0.4s ease 0s;
  border-bottom: 2px solid transparent;
  padding: 15px 20px;
  margin-right: 0.5rem;
  border-radius: 0%;
}

.active {
  color: #222;
  border-bottom: 2px solid var(--theme-primary-color);
}
</style>
