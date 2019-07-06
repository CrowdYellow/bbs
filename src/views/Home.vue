<template>
  <div class="app-main">
    <TheSearch/>
    <TheSwipe/>
    <TheTopNavs/>
    <ArticleList/>

  </div>
</template>

<script>
import TheSearch from '@/components/layouts/TheSearch'
import TheTopNavs from '@/components/layouts/TheTopNavs'
import TheSwipe from '@/components/layouts/TheSwipe'
import ArticleList from './articles/List'
export default {
  name: "Home",
  components: {
    TheSearch,
    TheTopNavs,
    TheSwipe,
    ArticleList,
  }
}
</script>

<style scoped>
.app-main{
  padding-bottom: 3.125rem;
}
</style>
