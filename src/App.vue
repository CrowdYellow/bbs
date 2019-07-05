<template>
  <div id="app">
    <TheHeader/>
    <mt-spinner type="triple-bounce" color="#26a2ff"></mt-spinner>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '@/views/layouts/TheHeader'
import TheFooter from '@/views/layouts/TheFooter'
export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
  },
}
</script>

<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
}
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome";
@import "../static/css/reset.css";
</style>
