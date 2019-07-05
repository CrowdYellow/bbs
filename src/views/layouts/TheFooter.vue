<template>
  <mt-tabbar v-model="selected" :fixed="true">
    <mt-tab-item id="tab1">
      首页
    </mt-tab-item>
    <mt-tab-item id="tab2">
      动态
    </mt-tab-item>
    <mt-tab-item id="tab3">
      消息
    </mt-tab-item>
    <mt-tab-item id="tab4">
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
