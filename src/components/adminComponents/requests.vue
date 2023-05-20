<template>
    <h1 class="my-4">Requests To be  Instructor</h1>
    <table class="admin-table">
      <thead>
        <tr>
          <th>Instructor Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request">
          <td>{{ request.Name }}</td>
          <td>{{ request.Email_Login }}</td>
          <td>
            <button @click="acceptRequest(request.id)" class="accept-button">
              Accept
            </button>
            <button @click="denyRequest(request.id)" class="deny-button">
              Deny
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
      instructorRequests: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
      ],
      requests: [],
    //   acceptedInstructors: [],
    };
  },

  methods : {
    async getRequests() {
      try {
        const response = await fetch(
          "http://localhost:4000/Admin/PendingInstructors",
          {
            headers: {
              // 'Content-Type': 'multipart/form-data',
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
        this.requests = responseData.instructor;
        //instructor is Array of Object
        // each object , contain array called instructors , instructors contain instructor id
        // for (const instructor in responseData.instructor) {

        // }
        console.log(requests);
      } catch (error) {
        this.error = error.message || "something wrong";
      }
    },


    async acceptRequest(id) {
      const response = await fetch(
        "http://localhost:4000/Admin/updateInstructor/" + id,
        {
          method: "PUT",
          body: JSON.stringify({
            Approved: true,
          }),

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      window.location.reload();
    },

    async denyRequest(id) {
      const response = await fetch(
        "http://localhost:4000/Admin/updateInstructor/" + id,
        {
          method: "PUT",
          body: JSON.stringify({
            Approved: false,
          }),

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      window.location.reload();
    },

  } ,

  created() {
    this.getRequests(); }
}
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
    color: rgb(76, 17, 124);
  }
  .admin-table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    font-family: sans-serif;
    font-weight: 600;
    color:black;
  }
  
  
  .accept-button,
  .deny-button {
    padding: 6px 12px;
    margin-right: 6px;
    border-radius: 4px;
    font-size: 14px;
  }
  
  .accept-button {
    background-color: #285496;
    color: #fff;
    font-family: sans-serif;
    font-weight: 700;
  }
  
  .deny-button {
    background-color: #e72214;
    color: #fff;
    font-family: sans-serif;
    font-weight: 700;
  }
</style>