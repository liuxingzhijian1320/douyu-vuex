<template>
    <div id="app">
        <v-header></v-header>
        <transition name="side">
            <side-menu v-show="getLeftNavState"></side-menu>
        </transition>

        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
  import SideMenu from 'components/sidemenu/SideMenu'
  import header from 'components/header/header'
  import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions,
  } from 'vuex';

  export default {
//    props
    data() {
      return {}
    },
    computed: {
//      ...mapGetters({
//        show: 'getLeftNavState', //控制的sidemenu的显示状态
//      })
    ...mapGetters(['getLeftNavState'])

    },
//    watch
    methods: {
//      ...mapActions([
//        'fetchHomeList',
//      ]),

    },
    mounted() {
//      console.info(123,this.getCategory)

//      this.fetchHomeList()

    },
    components: {
      SideMenu,
      'v-header': header
    },
  }
</script>

<style lang="scss">
    @import './assets/styles/normalize.scss';
    @import './assets/styles/reset.scss';
    @import './assets/styles/mixin.scss';

    #app {
        /*padding-top: 0.9rem;*/
    }

    .side-enter-active, .side-leave-active,
    .side-enter-active ul, .side-leave-active ul {
        transition: all .4s linear;
    }

    .side-enter, .side-leave-active {
        opacity: 0;
    }

    .side-enter ul, .side-leave-active ul {
        transform: translateX(-50%);
        opacity: 0;
    }
</style>
