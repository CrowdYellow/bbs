<template>
  <div id="app">
    <TheHeader/>
    <router-view></router-view>
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
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome";
@import "../static/css/reset.css";
@import "../static/sass/style";
</style>
