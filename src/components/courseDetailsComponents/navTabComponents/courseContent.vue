<template>
  <section class="curriculam">
    <div class="content-header">
      <slot></slot>
    </div>

    <div class="sections">
      <div
        v-for="(section, index) in sections"
        :key="section.sectionName"
        class="section"
      >
        <div class="section-name">
          <h5>Section {{ index + 1 + ": " + section.sectionName }}</h5>
          <button class="chervon-btn" @click="toggleShowLessons(index)">
            <span v-if="!section.showLessons"
              ><i class="fa-solid fa-chevron-down"></i
            ></span>
            <span v-else><i class="fa-solid fa-chevron-up"></i></span>
          </button>
        </div>

        <ul class="lessons" v-if="section.showLessons">
          <li
            class="lesson"
            v-for="lesson in section.lessons"
            :key="lesson"
            @click="setCurrentVideo(lesson.lessonId)"
          >
            <a href="#" class="lesson-link">
              <i class="fa-regular fa-circle-play"></i>
              <span class="lesson-name">{{ lesson.lessonName }}</span>
              <div class="lesson-meta">
                <span class="lesson-duration"
                  >{{ lesson.lessonsDuration }}
                </span>
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
  emits: ["set-currentvideo"],
  data() {
    return {
      currentvideo: "",
      sections: [
        /*array of objects each object represnet one section */
        /*section 1 */
        {
          sectionName: "Getting Started",

          showLessons: false,

          lessons: [
            /*array of objects each object represent one lesson*/
            {
              lessonName: " What is Vue.js ? ",
              lessonId: "l1",
              lessonsDuration: "4mins",
            },
            {
              lessonName: " Different way of using Vue ",
              lessonId: "l2",
              lessonsDuration: "6mins",
            },
            {
              lessonName: " Exploring Vue Alternatives ",
              lessonId: "l3",
              lessonsDuration: "8mins",
            },
            {
              lessonName: " Building A first App with vue ",
              lessonId: "l4",
              lessonsDuration: "6mins",
            },
          ],
        },
        /*Section 2 */
        {
          sectionName: "Basic & Core Concepts -DOM Interaction with Vue",

          showLessons: false,

          lessons: [
            /*array of objects each object represent one lesson*/
            {
              lessonName: " Interpolation and Data Binding ",
              lessonId: "l5",
              lessonsDuration: "3mins",
            },
            {
              lessonName: "Binding Attributes with the v-bind Directive ",
              lessonId: "l6",
              lessonsDuration: "9mins",
            },
            {
              lessonName: " Working with Data inside of a Vue App ",
              lessonId: "l7",
              lessonsDuration: "10mins",
            },
          ],
        },

        /*section 3*/
        {
          sectionName: "Introducion to Components",

          showLessons: false,

          lessons: [
            /*array of objects each object represent one lesson*/
            {
              lessonName: " Basic Undertstanding of component ",
              lessonId: "l8",
              lessonsDuration: "5mins",
            },
            {
              lessonName: " Creating A basic Vue App ",
              lessonId: "l9",
              lessonsDuration: "7mins",
            },
            {
              lessonName: "  Outputting Raw HTML Content With V-Html ",
              lessonId: "l10",
              lessonsDuration: "12mins",
            },
          ],
        },

        /*section 4*/
        {
          sectionName: "Components Communication",

          showLessons: false,

          lessons: [
            /*array of objects each object represent one lesson*/
            {
              lessonName:
                " . Introducing Props (Parent => Child Communication) ",
              lessonId: "l11",
              lessonsDuration: "3mins",
            },
            {
              lessonName: " Validating Props ",
              lessonId: "l12",
              lessonsDuration: "10mins",
            },
            {
              lessonName: "  Emitting Custom Events ",
              lessonId: "l13",
              lessonsDuration: "8mins",
            },
          ],
        },
        /*section 5*/
        {
          sectionName: "Sending Http Request",

          showLessons: false,

          lessons: [
            /*array of objects each object represent one lesson*/
            {
              lessonName: " How to send Http Requests",
              lessonId: "l14",
              lessonsDuration: "5mins",
            },
            {
              lessonName: " Sending GET Request ",
              lessonId: "l15",
              lessonsDuration: "7mins",
            },
            {
              lessonName: "  Sending POST Request ",
              lessonId: "l16",
              lessonsDuration: "9mins",
            },
            {
              lessonName: "  Loading Data ",
              lessonId: "l17",
              lessonsDuration: "4mins",
            },
          ],
        },
      ],
    };
  },

  methods: {
    toggleShowLessons(index) {
      this.sections[index].showLessons = !this.sections[index].showLessons;
    },

    // to toggle videos by lesson id , to pass lessonId to viewCourse component
    setCurrentVideo(lessonId) {
      this.currentvideo = lessonId;
      this.$emit("set-currentvideo", this.currentvideo);
    },


    async courseContent() {
      try {
        const response = await fetch(
          // "http://localhost:4000//course/" + this.courseId
          "http://localhost:4000/getsinglecourse/1"
        );
        // console.log(response);
        const responseData = await response.json();
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

  mounted () {
    this.courseContent();
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
  padding: 10px;
  border-radius: 5px;
}

.section-name {
  margin-bottom: 1.5rem;
}

.section-name h5 {
  font-family: "Nunito Sans", sans-serif;
  color: rgb(53, 50, 50);
  /* color: rgb(0, 0, 0); */
  text-transform: capitalize;
  font-size: 1.1rem;
  line-height: 1.5;
  font-weight: 700;
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
  padding: 0.625rem 2.5rem;
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
  padding: 0.625rem 0;
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
.content-header {
  font-size: 20px;
}
</style>
