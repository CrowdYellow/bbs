<template>
  <div>
    <div class="article-box"
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="0">
      <div class="list"
           v-for="(item, index) in articles"
           :key="index">
        <router-link
          tag="h3"
          :to="`/articles/${item.id}/content`"
          class="list-title">{{ item.title }}</router-link>
        <div class="user-info">
          <span class="avatar"><img :src="item.avatar" alt=""></span>
          <span class="name">{{ item.name }}</span>
          <span class="introduce">{{ item.introduction }}</span>
        </div>
        <div class="list-excerpt">{{ item.excerpt }}</div>
      </div>
    </div>
    <div class="tips"><mt-spinner v-show="tips.status" type="fading-circle" color="#06c1ae"></mt-spinner>{{ tips.msg }}</div>
  </div>
</template>

<script>
export default {
  name: "List",
  data () {
    return {
      articles: [],
      page: 1,
      tips: {
        status: true,
        msg: '努力加载中...'
      },
      getData: true,
    }
  },
  methods: {
    getArticles(page) {
      if (this.getData) {
        this.getData = false;
        this.$axios.get(this.api.articles+'?page='+page)
          .then((response)=>{
            let list = response.data.data;
            if (list.length === 0) {
              this.loading = false;
              this.tips.status = false;
              this.tips.msg = '暂无更多内容';
              return;
            }
            this.getData = true;
            for (var i=0;i< list.length;i++) {
              this.articles.push(list[i]);
            }
            this.page += 1;
          })
          .catch((error)=>{
            console.log(error)
          });
      }
    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        this.getArticles(this.page);
        this.loading = false;
      }, 2500);
    },
    mounted(){
      this.getArticles(this.page)
    }
  }
}
</script>

<style scoped lang="scss">
.article-box{
  background: #eee;
  padding-top: .5rem;
  margin-top: .2rem;
  .list{
    background: #fff;
    padding: .5rem;
    line-height: 1.4;
    margin-bottom: .5rem;
    .list-title{
      font-weight: bold;
      color: #1f1f1f;
      font-size: 1rem;
    }
    .user-info{
      padding: .3rem 0;
      span{
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
      }
      .avatar{
        width: 2rem;
        overflow: hidden;
        img{
          width: 100%;
          border-radius: 50%;
        }
      }
      .name{
        font-weight: 500;
        font-size: 1rem;
        color: #333;
      }
      .introduce{
        font-weight: 400;
        color: #a5a5a5;
        font-size: .9rem;
        width: 10rem;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .list-excerpt{
      font-family: Arial;
      font-size: .9rem;
      height: 3.5rem;
      color: #545454;
      overflow: hidden;
    }
  }
}
.tips{
  width: 100%;
  text-align: -webkit-center;
  margin-top: .5rem;
  border-top: 1px solid #eee;
  padding-top: .5rem;
}
</style>
