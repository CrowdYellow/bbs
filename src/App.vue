<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return{
      list: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
      ]
    }
  },
  methods: {
    loadMore() {
      console.log("开始加载");
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    }
  }
}
</script>

<style lang="scss">
$fa-font-path: "~font-awesome/fonts/";
@import "~font-awesome/scss/font-awesome";
</style>
