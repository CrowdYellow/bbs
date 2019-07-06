<template>
  <div>
    <TheSearch/>
    <TheTopNavs/>
    <TheSwipe/>
    <mt-spinner type="triple-bounce" class="load" color="#06c1ae"></mt-spinner>
  </div>
</template>

<script>
import TheSearch from '@/components/layouts/TheSearch'
import TheTopNavs from '@/components/layouts/TheTopNavs'
import TheSwipe from '@/components/layouts/TheSwipe'
export default {
  name: "Home",
  components: {
    TheSearch,
    TheTopNavs,
    TheSwipe,
  }
}
</script>

<style scoped>

</style>
