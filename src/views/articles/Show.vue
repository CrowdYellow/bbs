<template>
  <div class="app-main">
    <div class="article">
      <div class="title"><h1>{{ article.title }}</h1></div>
      <p class="meta">
        <i class="fa fa-clock-o"></i>{{ article.created_at }} /
        <i class="fa fa-eye"></i>{{ article.view_count }} /
        <i class="fa fa-comment-o"></i>{{ article.reply_count }} /
      </p>
      <div class="ui divider"></div>
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

<style scoped lang="scss">
.article{
  font-family: Lato,Helvetica Neue,Arial,Helvetica,sans-serif;
  color: #636b6f;
  padding: 1rem;
  .title{
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .meta{
    margin-bottom: 1rem;
    i{
      font-size: 1em;
    }
    color: #adb1af;
    font-size: .9em;
  }
}
</style>
