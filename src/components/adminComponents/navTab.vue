<template>
  <div class="nav">
    <button @click="setActivePage('requests')" :class="requests">
      Requests
    </button>
    <button @click="setActivePage('instructors')" :class="instructors">
      Instructors
    </button>

    <!-- <button @click="setActivePage('Reviews')" :class="Reviews">Reviews</button> -->
  </div>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import instructors from "./instructors.vue";
import requests from "./requests.vue";

export default {
  components: { instructors, requests },
  data() {
    return {
      selectedTab: "instructors",
    };
  },
  methods: {
    setActivePage(page) {
      this.selectedTab = page;
    },
  },
  computed: {
    instructors() {
      return this.selectedTab === "instructors" ? " btn active" : "btn";
    },
    requests() {
      return this.selectedTab === "requests" ? "btn active" : "btn";
    },
  },
};
</script>

<style scoped>
.nav {
  transition: all 0.4s ease 0s;
  border-bottom: 2px solid #ddd;
  max-width: 280px;
  margin: 2rem auto 3rem auto;
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
