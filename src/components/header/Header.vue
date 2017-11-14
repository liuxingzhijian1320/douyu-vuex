<template>
    <header class="header">
        <div class="toolbar-icon" @click="showNav">
            <i class="fa fa-bars icon"></i>
        </div>
        <div class="toolbar-title" @click="showNav">
            <span>直播分类</span>
        </div>
        <div class="toolbar-left">
            <router-link to='/' class="user">斗鱼TV</router-link>
        </div>

    </header>
</template>

<script>

  export default {
    name: 'header',
    data() {
      return {}
    },
    methods: {
      showNav() {
        this.$store.dispatch('changeLeftNavState', true) //2种写法的是一样的
//        this.$store.commit('changeLeftNavState', true)

      }
    },
    mounted() {

    }
  }
</script>
<style scoped lang="scss">
    .header {
        background: #282828;
        color: #fff;
        position: fixed;
        width: 100%;
        transform: translateZ(0);
        top: 0;
        z-index: 4;
        height: 0.9rem;
        line-height: 0.9rem;
        display: flex;
        font-size: 0.32rem;
        .toolbar-icon {
            width: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .toolbar-title {
            flex: 1;
        }
        .toolbar-left {
            width: 1.5rem;
            .user {
                color: #f70;
                font-weight: 600;
            }
        }
    }
</style>
