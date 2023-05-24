<template>
  <h1 class="my-4">Tailored Campus Instructors</h1>
  <table class="admin-table">
    <thead>
      <tr>
        <th>Instructor Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="instructor in acceptedInstructors" :key="instructor">
        <td>{{ instructor.Name }}</td>
        <td>{{ instructor.Email_Login }}</td>
        <td>
          <!-- <button @click="acceptRequest(request.id)" class="accept-button">
              Accept
            </button> -->
          <button @click="removeInstructor(instructor.id)" class="deny-button">
            Remove Instructor
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
      acceptedInstructors: [],
    };
  },
  methods: {
    async getInstructors() {
      try {
        const response = await fetch(
          "http://localhost:4000/Admin/ApprovedInstructors",
          {
            headers: {
              // 'Content-Type': 'multipart/form-data',
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response);
        const responseData = await response.json();
        if (!response.ok) {
          const error = new error(responseData.message || "Failed to Fetch");
          throw error;
        }
        console.log(responseData);
        this.acceptedInstructors = responseData.instructor;

        console.log(requests);
      } catch (error) {
        this.error = error.message || "something wrong";
      }
    },
    async removeInstructor(id) {
      const response = await fetch(
        "http://localhost:4000/Admin/deleteInstructor/" + id,
        {
          method: "delete",
          // body: JSON.stringify({
          //   Approved: false,
          // }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      window.location.reload();
    },
  },
  created() {
    // this.getRequests();
    this.getInstructors();
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
  color:black;
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
