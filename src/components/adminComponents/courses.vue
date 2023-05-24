<template>
  <h1 class="my-4">Courses</h1>
  <table class="admin-table">
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Instructor</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="course in courses" :key="course.id">
        <td>{{ course.course_name }}</td>
        <td>{{ course.Instructor_name }}</td>
        <td>
          <!-- <button @click="acceptRequest(request.id)" class="accept-button">
                Accept
              </button> -->
          <button @click="removeCourse(course.id)" class="deny-button">
            Remove Course
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    async removeCourse(id) {
      const response = await fetch(
        "http://localhost:4000/course/delete/" + id,
        {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      window.location.reload();
    },
    async getCourses() {
      try {
        const response = await fetch("http://localhost:4000/courses");
        // console.log(response);
        const responseData = await response.json();
        console.log(responseData);

        this.courses = responseData.courses;

        if (!response.ok) {
          const error = new error(responseData.message || "Failed to Fetch");
          throw error;
        }
        console.log(responseData);
      } catch (error) {
        this.error = error.message || "something wrong";
      }
    },
  },
  created() {
    // this.getRequests();
    //   this.getInstructors();
    this.getCourses();
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.7rem;
  font-weight: 700;
  color: rgb(49, 38, 38);
}
.admin-table {
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto;
}

.admin-table th {
  font-family: sans-serif;
  font-weight: 700;
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: #16145a;
}
.admin-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-family: sans-serif;
  font-weight: 600;
  color: black;
}

.admin-table th {
  background-color: #f2f2f2;
}

.accept-button,
.deny-button {
  padding: 6px 12px;
  margin-right: 6px;
  border-radius: 4px;
  font-size: 14px;
}

.deny-button {
  background-color: #e72214;
  color: #fff;
  font-family: sans-serif;
  font-weight: 700;
}
</style>
