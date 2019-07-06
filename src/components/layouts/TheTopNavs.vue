<template>
  <mt-navbar v-model="active">
    <mt-tab-item id="category">推荐</mt-tab-item>
    <mt-tab-item
      v-for="(item, index) in navs" :key="index" :id="'category'+item.id">{{ item.name }}</mt-tab-item>
  </mt-navbar>
</template>

<script>
export default {
  name: "TheTopNavs",
  data () {
    return {
      active: 'category',
      navs: [],
    }
  },
  beforeCreate () {
    this.$axios.get(this.api.category)
      .then((response) =>{
        let data =  response.data.data;
        for (var i = 0; i < data.length; i++) {
          this.navs.push(data[i]);
        }
        console.log(this.navs);
      })
      .catch((error) =>{
        console.log(error)
      });
  },
}
</script>

<style scoped>

</style>
