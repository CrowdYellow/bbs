<template>
  <mt-header title="多个按钮">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
      <mt-button @click="handleClose">关闭</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

</style>
