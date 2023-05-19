<template>
  <div class="admin-page">
    <h1 class="my-4">Requests to be an instructor</h1>
    <table class="admin-table">
      <thead>
        <tr>
          <th>Instructor Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in instructorRequests" :key="request.id">
          <td>{{ request.name }}</td>
          <td>{{ request.email }}</td>
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
  </div>
</template>

<script>
export default {
  // ...
  data() {
    return {
      instructorRequests: [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com" },
      ],
    };
  },
  methods: {
    acceptRequest(id) {
      // Implement logic to accept the instructor request
      console.log(`Accepting request with ID: ${id}`);
    },
    denyRequest(id) {
      // Implement logic to deny the instructor request
      console.log(`Denying request with ID: ${id}`);
    },
  },
};
</script>

<style scoped>
.admin-page {
  text-align: center;
}
h1 {
    font-size: 2rem;
    font-weight: 700;
    color: rgb(49, 38, 38);
}
.admin-table {
  width: 90%;
  border-collapse: collapse;
  margin: 0 auto;
}

.admin-table th,
.admin-table td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
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

.accept-button {
  background-color: #285496;
  color: #fff;
}

.deny-button {
  background-color: #e72214;
  color: #fff;
}
</style>
