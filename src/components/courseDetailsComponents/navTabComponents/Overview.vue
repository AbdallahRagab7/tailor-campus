<template>
  <section class="course-details">
    <div class="description">
      <h4>Description</h4>
      <!-- <p>{{ overView.description }}</p> -->
      <p v-if="courseDescription">{{ courseDescription }}</p>
      <p v-if="!courseDescription">{{ overView.description }}</p>

    </div>

    <div class="learn">
      <h4>What You Will Learn?</h4>
      <ul>
        <li v-for="learn in overView.learns" :key="learn">
          <i class="fa fa-check"></i>{{ learn }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      overView: {
        description:
          "Knowing Programming has allowed me to make enough money to stay home and make courses like this one for students all over the world. Being a  developer can allow anyone to make really good money online and offline, developing dynamic applications. Learnig this course will allow you to build web applications, websites or Content Management systems, There is no limit to what you can do with this knowledge.",
        learns: [
          "Clean up face imperfections, improve and repair photos",
          "Remove people or objects from photos",
          "Master selections, layers, and working with the layers panel",
          "Use creative effects to design stunning text styles",
        ],
      },
      courseId : this.$route.params.courseId ,
      courseDescription: "",
    };
  },

  methods: {
    async courseHeaderData() {
      try {
        const response = await fetch(
          // "http://localhost:4000//course/" + this.courseId
          "http://localhost:4000/course/"+ this.courseId
        );
        // console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        this.courseDescription =
          responseData.courseHeader[0].course_description;

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
  created () {
    this.courseHeaderData()
  }
};
</script>

<style scoped>
.course-details {
  max-width: 756px;
}
h4 {
  font-family: var(--theme-heading-font);
  color: var(--theme-heading-color);
  font-weight: 700;
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
}

p,
.learn li {
  color: var(--theme-text-color);
  font-family: var(--theme-secondary-font);
  line-height: 30px;
  font-size: 16px;
}

.learn li {
  margin-bottom: 7px;
}

.fa-check {
  margin-right: 10px;
  font-size: 20px;
}
ul {
  margin: 0;
  padding: 0;
}
</style>
