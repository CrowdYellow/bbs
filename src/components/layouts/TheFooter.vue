<template>
  <mt-tabbar v-model="selected" :fixed="true"  class="app-footer">
    <mt-tab-item id="tab1">
      <i class="fa fa-heart" slot="icon"></i>
      首页
    </mt-tab-item>
    <mt-tab-item id="tab2">
      <i class="fa fa-star" slot="icon"></i>
      动态
    </mt-tab-item>
    <mt-tab-item id="tab3">
      <i class="fa fa-comment" slot="icon"></i>
      消息
    </mt-tab-item>
    <mt-tab-item id="tab4">
      <i class="fa fa-user" slot="icon"></i>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: "TheFooter",
  data () {
    return {
      selected: 'tab1'
    };
  }
}
</script>

<style scoped>

</style>
