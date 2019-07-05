<template>
  <div>
    <TheSearch/>
    <TheTopNavs/>
    <mt-spinner type="triple-bounce" class="load" color="#06c1ae"></mt-spinner>
  </div>
</template>

<script>
import TheSearch from '@/components/layouts/TheSearch'
import TheTopNavs from '@/components/layouts/TheTopNavs'
export default {
  name: "Home",
  components: {
    TheSearch,
    TheTopNavs,
  }
}
</script>

<style scoped>

</style>
