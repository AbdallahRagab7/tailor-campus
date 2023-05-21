<template>
  <div class="profile-pic-social-links">
    <div class="pic">
      <!-- <img src="../../assets/instructor.jpg" alt="" /> -->
      <!-- <img :src="require(@/assets/img/${variable}.svg)" /> --> 
      <!-- <img :src="" alt=""> -->
      <img :src=" 'http://localhost:4000/'+profileImage" alt="">

    </div>

    <div class="social-links">
      <a href="#" class="send-msg-btn">Send message</a>
      <!-- <a href="#" class="send-msg-btn">{{this.instructorDetails.Name}}</a> -->

      <a href="#"><i class="fa-solid fa-link mx-1"></i> Website</a>

      <a href="#"><i class="fa-brands fa-facebook mx-1"></i> Facebook</a>

      <a href="#"><i class="fa-brands fa-linkedin mx-1"></i> Linkedin</a>

      <a href="#"><i class="fa-brands fa-youtube mx-1"></i>Youtube</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileImage: null,
      instructorId: this.$route.params.instructorId,

    };
  },
  methods: {
    async instructorInfo() {
      try {
        const response = await fetch(
          "http://localhost:4000/instructorprofile/"+ this.instructorId
        );
        // console.log(response);
        const responseData = await response.json();
        console.log(responseData);
      
        this.profileImage = responseData.instructorName[0].Image_Profile.replace("images/", "");
        // const profiletwo = profileImage.split("images")
        console.log(this.profileImage);
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
    this.instructorInfo()
  }
};
</script>

<style scoped>
.pic {
  border-radius: 50%;
  width: 12.5rem;
  height: 12.5rem;
  overflow: hidden;
  margin-bottom: 2rem;
}

.pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profile-pic-social-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
}

.social-links {
  display: flex;
  flex-direction: column;
  width: 12.5rem;
  align-items: center;
}

.social-links a {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1c1d1f;
  background-color: transparent;
  border: 1px solid #1c1d1f;
  font-weight: 700;
  margin-bottom: 0.8rem;
  height: 3rem;
}
.social-links a:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.social-links .send-msg-btn {
  background-color: rgb(28, 29, 31);
  color: white;
}

.social-links .send-msg-btn:hover {
  background-color: rgb(28, 29, 31);
}
</style>
