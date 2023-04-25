<template>
  <section class="curriculam">
    <div class="sections">
      <!-- section-lessons v-for -->
      <div class="module">
        <div class="section-name">
          <h5>1. Introduction to vuejs</h5>
          <button class="chervon-btn" @click="toggleShowContent">
            <span v-if="!showContent"
              ><i class="fa-solid fa-chevron-down"></i
            ></span>
            <span v-else><i class="fa-solid fa-chevron-up"></i></span>
          </button>
        </div>

        <ul class="lessons" v-if="showContent">
          <li class="lesson">
            <a href="#" class="lesson-link">
              <i class="fa-regular fa-circle-play"></i>
              <span class="lesson-name"
                >1. Basic understanding of data management concepts</span
              >
              <div class="lesson-meta">
                <span class="lesson-duration"> 10 mins </span>
              </div>
            </a>
          </li>

          <li class="lesson">
            <a href="#" class="lesson-link">
              <i class="fa-regular fa-circle-play"></i>
              <span class="lesson-name"
                >2. Basic understanding of data management concepts</span
              >
              <div class="lesson-meta">
                <span class="lesson-duration"> 10 mins </span>
              </div>
            </a>
          </li>

          <li class="lesson">
            <a href="#" class="lesson-link">
              <i class="fa-regular fa-circle-play"></i>
              <span class="lesson-name"
                >3. Basic understanding of data management concepts</span
              >
              <div class="lesson-meta">
                <span class="lesson-duration"> 10 mins </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,

      modules: [
        {
          sectionName: "Introduction to front end",
          lessons: [
            "Basic Undertstanding of html",
            "Basic UnderStanding of Css",
            "BasicUnderStanding of JavaScript",
          ],
        },

        {
          sectionName: "Introduction to vue js",
          lessons: [
            "Interpolation and Data Binding ",
            "Binding Attributes with the v-bind Directive",
            "Working with Data inside of a Vue App",
          ],
        },
        {
          sectionName: "Introducing Components",
          lessons: [
            " The Why: Building Complex User Interfaces With Components ",
            " Outputting Raw HTML Content with v-html",
            "Creating a basic Vue App",
          ],
        },

        
      ],
    };
  },

  methods: {
    toggleShowContent() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style scoped>
.curriculam {
  max-width: 756px;
}

.section-name {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(245 245 245);
  padding: 5px;
}

.section-name {
  margin-bottom: 1.5rem;
}

.section-name h5 {
  font-family: sans-serif;
  color: rgb(43, 38, 38);
  font-weight: 600;
  text-transform: capitalize;
  font-size: 20px;
  line-height: 1.5;
}

.chervon-btn {
  border: none;
}

.lesson {
  background-color: #f8f8f8;
}

.lesson-link {
  border-bottom: none;
  display: table;
  outline: 0;
  width: 100%;
  line-height: 1.5;
  transition: all 0.4s ease 0s;
  padding: 10px 40px;
  color: #7a7a7a;
  text-transform: capitalize;
  margin-bottom: 1rem;
}
.fa-circle-play {
  margin-right: 0.6rem;
}

.lesson-link:hover {
  color: var(--theme-primary-color);
}

.lesson-meta {
  display: table-cell;
  /* white-space: nowrap; */
  padding: 10px 0;
  text-align: right;
}

.lesson-duration {
  background: rgba(1, 90, 189, 0.1);
  color: #000;
  line-height: 24px;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  margin-left: 5px;
  padding: 0 8px;
  border-radius: 3px;
  font-size: 0.75rem;
}

.lesson-duration:hover {
  color: var(--theme-primary-color);
  background: #f4ebe7;
}
</style>
