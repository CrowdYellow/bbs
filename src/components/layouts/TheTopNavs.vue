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
      navs: this.$store.state.category,
    }
  },
  methods: {
    allCategory() {
      this.$axios.get(this.api.category)
        .then((response) =>{
          let data =  response.data.data;
          let nav = [];
          for (var i = 0; i < data.length; i++) {
            nav.push(data[i]);
          }
          this.$store.dispatch('getCategoryByApi', nav)
        })
        .catch((error) =>{
          console.log(error)
        });
    }
  },
  mounted() {
    this.allCategory()
  }
}
</script>

<style scoped>
</style>
