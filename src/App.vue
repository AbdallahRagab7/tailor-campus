<template>
<main>
<the-header></the-header>
<router-view></router-view>
<the-footer></the-footer>
</main>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
export default {
components : {
  TheHeader , TheFooter
}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cabin:wght@400;600&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;600;700&display=swap");

/* @import './assets/styles/blog.css'; */
/* @import url('./assets/styles/blog.css');
@import url('./assets/styles/responsive.css');
@import url('./assets/styles/style.css');
@import url('./assets/styles/woocomerce.css'); */

:root {
  --theme-heading-font: 'Gilroy', sans-serif;
  --theme-secondary-font:'Jost', sans-serif;
  --theme-primary-color: #F14D5D;
  --theme-secondary-color: #015ABD;
  --theme-heading-color: #14133b;
  --theme-text-color: #77838F;
  --theme-white-color: #fff;
  --theme-border-color: #ddd;
}


* {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

li {
  list-style: none;
}

a:link {
  text-decoration: none;

}
ul {
  padding-left: 0;
}


</style>
