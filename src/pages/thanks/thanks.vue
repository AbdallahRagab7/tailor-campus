<template>
  <div class="request">
    <h1 class="mx-5">
      Your Request to be an instructor in Tailor Campus sent Successfully !
    </h1>
    <h2>please , wait until admin accept your request to be instructor .</h2>
  </div>
  <div class="home">
    <router-link to="/home" >Back to Home Page</router-link>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.4rem;
  font-weight: 700;
}
h2 {
  font-size: 1.4rem;
  margin-left: 6rem;
  font-weight: 600;
}
.request {
  width: 65%;
  margin: 5rem auto 2rem auto;
  font-family: sans-serif;
}

.home {
  margin: 0 auto;
  width: 20%;
  font-size: 1.3rem;
}
</style>
