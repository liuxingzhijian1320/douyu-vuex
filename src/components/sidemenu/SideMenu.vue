<template>
    <div class="side-menu" @click="sideHide">
        <ul class="ul">
            <router-link tag="li" class="li" v-for="(item,index) in list" :to="item.path" :key="index"
                         :class="{activeColor:$route.path==item.path}">
                <i class="fa icon" :class="item.className"></i>
                <div class="router-name">{{item.name}}</div>
                <i class="fa icon fa-angle-right"></i>
            </router-link>
        </ul>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          { name: "首页", path: "/", className: 'fa-home' },
          { name: "全部分类", path: "/classify", className: 'fa-arrows-alt' },
          { name: "个人中心", path: "/user", className: 'fa-user' }
        ]
      }
    },
    methods: {
      sideHide() {
        this.$store.dispatch('changeLeftNavState', false)
      },
    },
    mounted() {

    }
  }

</script>

<style lang="scss" scoped>
    .side-menu {
        background: rgba(0, 0, 0, .3);
        height: 100%;
        position: fixed;
        width: 100%;
        top: 0;
        padding-top: 0.9rem;
        z-index: 11;
    }

    .ul {
        width: 70%;
        background: #282828;
        height: 100%;
        border-top: 1px solid #222;
    }

    .li {
        height: 0.9rem;
        border-bottom: 1px dotted #333;
        font-size: 0.3rem;
        line-height: 0.9rem;
        padding: 0 0.3rem 0 0.2rem;
        color: #9a9a9a;
        display: flex;
    }

    .router-name {
        flex: 1;
        padding-left: 0.3rem;
    }

    .activeColor {
        background-color: rgba(#bfcbd9, 0.1);
        color: #ffffff;
        font-weight: 900;
    }

    .icon {
        font-size: 0.3rem;
        line-height: 0.9rem;
    }
</style>
