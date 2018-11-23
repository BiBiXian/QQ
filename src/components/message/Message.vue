<template>
  <div class="message" ref="message">
    <div>
      <SearchBar></SearchBar>
      <div v-if="ajax">加载中</div>
      <mu-list textline="two-line" v-else>
        <div v-for="item in friends" class="list" :key="item._id" v-show="item.lastMsg.msg">
          <v-touch @tap="itemClick(item)" @swipeleft="onSwipeLeft(item._id)"
                   @swiperight="cancelSwipe">
            <mu-list-item class="item" :class="{remove: item._id===removeId}" avatar button ripple>
              <mu-list-item-action>
                <mu-avatar :size="30" slot="left">
                  <img :src="item.avatar">
                </mu-avatar>
              </mu-list-item-action>
              <mu-list-item-content>
                <mu-list-item-title>{{item.name}}</mu-list-item-title>
                <mu-list-item-sub-title>{{item.lastMsg.msg}}</mu-list-item-sub-title>
              </mu-list-item-content>
              <mu-list-item-action class="desc">
                <mu-list-item-title><span class="time">{{item.lastMsg.time|getTime}}</span></mu-list-item-title>
                <mu-list-item-sub-title>
                  <mu-badge color="red" :content="item.unreadNum+''" v-show="item.unreadNum"></mu-badge>
                </mu-list-item-sub-title>
              </mu-list-item-action>
            </mu-list-item>
          </v-touch>
          <div class="delete-btn" @click="deleteMsg(item)">
            删除
          </div>
        </div>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapState, mapActions} from 'vuex'
  import {timeDesc} from '../../assets/js/tool'
  import SearchBar from '../searchBar/SearchBar'
  import BScroll from 'better-scroll'
  export default {
    name: 'Message',
    mounted() {
      this.$nextTick(() => {
        this.messageScroll = new BScroll(this.$refs.message, {
          click: true
        })
      })
    },
    data() {
      return {
        removeId: null
      }
    },
    computed: {
      ...mapState({
        ajax: 'isAjax'
      }),
      ...mapGetters({friends: 'msgViewList'})
    },
    methods: {
      ...mapActions(['deleteMsg', 'showChat']),
      onSwipeLeft(id) {
        this.removeId = id
      },
      cancelSwipe() {
        this.removeId = null
      },
      itemClick(user) {
        // 还原左滑
        this.cancelSwipe()
        // 跳转下一个页面
        this.showChat(user)
        this.$router.push({name: 'chatView'})
      }
    },
    components: {
      SearchBar
    },
    filters: {
      getTime(val) {
        return timeDesc(val)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .message
    position: fixed
    left: 0
    right: 0
    top: 56px
    bottom: 56px
    overflow: hidden
    .list
      position: relative
      .item
        position: relative
        transition: all 0.3s linear
        background: #fff
        z-index: 10
        &.remove
          transform: translateX(-50px)
        .desc
          text-align: right
          .time
            display: inline-block
            width: 100%
            text-align: right
      .delete-btn
        position: absolute
        top: 0
        right: 0
        width: 50px
        height: 100%
        text-align: center
        line-height: 72px
        background: red
        color: #fff

</style>
