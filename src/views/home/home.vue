<template>
    <div class="home-wrapper">
        <swiper :swiper="swiper"></swiper>
        <div class="home-content">
            <div class="home-ul">
                <home-item v-for="(item,index) in categoryData" :item="item" :key="index"></home-item>
            </div>
            <div class="loadMore" >
                <span @click="loadMore">点击加载更多</span>
            </div>
        </div>
    </div>
</template>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
  } from 'vuex';

  import swiper from 'components/swiper/swiper'
  import HomeItem from 'components/home.item/HomeItem'

  export default {
    data() {
      return {
        swiper: [
          "https://rpic.douyucdn.cn/acrpic/171024/288016_0921.jpg",
          "https://rpic.douyucdn.cn/acrpic/171024/748396_0924.jpg",
          "https://rpic.douyucdn.cn/acrpic/171024/453751_0922.jpg",
          "https://rpic.douyucdn.cn/acrpic/171024/79663_0920.jpg"
        ],
        page:0,
      }
    },
    computed: {
      ...mapGetters(['categoryData'])

    },
    components: {
      swiper,
      HomeItem,
    },
    methods: {
      ...mapActions([
        'fetchHomeList', //页面列表的数据
      ]),
      loadMore(){
        this.fetchHomeList(this.page+=1)
      }
    },
    mounted() {
      this.fetchHomeList(this.page)

      //console.info(1,this.categoryData) //mounted是打印不出来，但是html中是可以打印出来

    },
  }
</script>

<style lang="scss" scoped>
    .home-wrapper {
        width: 100%;
        min-height: 100vh;
    }

    .home-content {
        height: 100%;
        width: 100%;
        .home-ul {
            width: 100%;
            padding: 0.3rem;
            padding-top:0;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }

    .loadMore {
        margin: 10px;
        text-align: center;
    }

    .loadMore span {
        display: inline-block;
        line-height: 30px;
        padding: 0 20px;
        border-radius: 10px;
        border: 1px solid #000;
    }
</style>

