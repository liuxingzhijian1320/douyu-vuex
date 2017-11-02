<template>
  <div class="home-item">
    <router-link :to="'/detail/' + item.room_id" tag="div" class="item-con"
                 :style="`backgroundImage:url(${item.room_src})`">

      <div class="room-info">
        <span class="nickname">{{item.nickname}}</span>
        <span class="count">
            <i class="fa fa-users" aria-hidden="true"></i>
            {{item.online | number}}
          </span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style lang="scss">
  .home-item {
    width: 3.3rem;
    border-radius: 0.1rem;
  }

  .item-con {
    width: 100%;
    height: 2.6rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 0.1rem;
    margin-bottom: 0.3rem;
  }

  .room-info {
    position: absolute;
    bottom: 0;
    color: #fff;
    padding: 0 0.1rem;
    left: 0;
    right: 0;
    overflow: hidden;
    background: rgba(10, 10, 10, .5);
    line-height: 24px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;

    .nickname {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .count {
      text-align: right;
      flex: 1;
    }
  }

  .room-title {
    line-height: 30px;
  }
</style>
