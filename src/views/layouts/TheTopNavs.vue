<template>
  <mt-navbar v-model="active">
    <mt-tab-item id="first">推荐</mt-tab-item>
  </mt-navbar>
</template>

<script>
export default {
  name: "TheTopNavs",
  data () {
    return {
      active: 'first',
    }
  }
}
</script>

<style scoped>

</style>
