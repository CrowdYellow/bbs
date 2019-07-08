<template>
  <div class="app-main">
    <div class="article">
      <div class="title">{{ article.title }}</div>
      <div class="info">{{ article.name }}</div>
      <div class="body">{{ article.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Show",
  data () {
    return {
      article: {},
    }
  },
  methods: {
    getArticleById(id) {
      this.$axios.get(this.api.articlesShow+id)
        .then((response)=>{
          this.article = response.data.data;
          console.log(this.article);
        })
        .catch((error)=>{
          console.log(error)
        });
    }
  },
  mounted() {
    this.getArticleById(this.$route.params.articleId)
  }
}
</script>
