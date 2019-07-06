<template>
  <mt-swipe :auto="4000" :default-index="defaultIndex" style="height: 10rem">
    <mt-swipe-item
      v-for="(item, index) in swipes"
      :key="index"
    ><img :src="item.path" alt="" style="width: 100%;height: 100%"></mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: "TheSwipe",
  data() {
    return{
      defaultIndex: 1,
      swipes: [
        {
          url: '',
          path: './static/images/banner/1.jpg',
        },
        {
          url: '',
          path: './static/images/banner/2.jpg',
        },
        {
          url: '',
          path: './static/images/banner/3.jpg',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
