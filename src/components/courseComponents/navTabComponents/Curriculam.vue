<template>
  <section class="curriculam">
    <div class="sections">
      <!-- section-lessons v-for -->
      <div v-for="module in modules" :key="module.sectionName" class="module">
        <div class="section-name">
          <h5>{{ module.sectionName }}</h5>
          <button class="chervon-btn" @click="toggleShowContent">
            <span v-if="!showContent"
              ><i class="fa-solid fa-chevron-down"></i
            ></span>
            <span v-else><i class="fa-solid fa-chevron-up"></i></span>
          </button>
        </div>

        <ul class="lessons" v-if="showContent">
          <li class="lesson" v-for="lesson in module.lessons" :key="lesson">
            <a href="#" class="lesson-link">
              <i class="fa-regular fa-circle-play"></i>
              <span class="lesson-name">{{ lesson.lessonName }}</span>
              <div class="lesson-meta">
                <span class="lesson-duration">{{lesson.lessonsDuration}} </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- v-for="duration in module.lessonsDurations" :key="duration"> {{duration}} -->
</template>

<script>
export default {
  data() {
    return {
      showContent: false,

      modules: [ /*array of objects each object represnet one section */ 

      /*section 1 */
        { 
          sectionName: "1.Introducion to Front End",

        //   showLessons : false ,
          
          lessons: [ /*array of objects each object represent one lesson*/
            {
              lessonName:
                " Basic Undertstanding of html ",
              lessonsDuration: "4mins",
            },
            {
              lessonName:
                " Basic UnderStanding of Css ",
              lessonsDuration: "6mins",
            },
            {
              lessonName:
                " BasicUnderStanding of JavaScript ",
              lessonsDuration: "8mins",
            },
          ],
        },
        /*Section 2 */
        { 
          sectionName: "2.Introduction to vue js",

        //   showLessons : false ,

          lessons: [ /*array of objects each object represent one lesson*/
            {
              lessonName:
                " Interpolation and Data Binding ",
              lessonsDuration: "3mins",
            },
            {
              lessonName:
                "Binding Attributes with the v-bind Directive ",
              lessonsDuration: "9mins",
            },
            {
              lessonName:
                " Working with Data inside of a Vue App ",
              lessonsDuration: "10mins",
            },
          ],
        },

        /*section*/
        { 
          sectionName: "3.Introducion to Components",

        //   showLessons : false ,

          lessons: [ /*array of objects each object represent one lesson*/
            {
              lessonName:
                " Basic Undertstanding of component ",
              lessonsDuration: "5mins",
            },
            {
              lessonName:
                " Creating A basic Vue App ",
              lessonsDuration: "7mins",
            },
            {
              lessonName:
                "  Outputting Raw HTML Content With V-Html ",
              lessonsDuration: "12mins",
            },
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
