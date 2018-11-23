<template>
  <div class="chat">
    <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left" @click="closeChat">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <div class="nav-title">{{currentUser.name}}</div>
      <div class="nav-right" slot="right">
        <mu-icon value="call"></mu-icon>
        <mu-icon value="person" @click="detailShow(currentUser._id)"></mu-icon>
      </div>
    </mu-appbar>
    <div class="content-wrapper" ref="msgView">
      <MsgContent :user="currentUser" ref="msgContent"></MsgContent>
    </div>
    <div class="footer" ref="footer">
      <div class="top">
        <mu-text-field class="input" @focus="focus" @blur="blur" v-model="value"></mu-text-field>
        <mu-button icon small class="icon" @click="sendMsg">
          <mu-icon value="send"></mu-icon>
        </mu-button>
      </div>
      <div class="bottom">
        <mu-icon class="icon" value="settings_voice"></mu-icon>
        <mu-icon class="icon" value="photo_size_select_actual"></mu-icon>
        <mu-icon class="icon" value="touch_app"></mu-icon>
        <mu-icon class="icon" value="camera_alt"></mu-icon>
        <mu-icon class="icon" value="videocam"></mu-icon>
        <mu-icon class="icon" value="tag_faces"></mu-icon>
        <mu-icon class="icon" value="add_circle_outline"></mu-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import MsgContent from './MsgContent'

  export default {
    name: 'ChatView',
    data() {
      return {value: ''}
    },
    mounted() {
      this.$nextTick(() => { // 子组件渲染完毕
        if (this.msgScroll) {
          this.msgScroll.refresh()
        } else {
          this.msgScroll = new BScroll(this.$refs.msgView, {
            click: true
          })
        }
        // 滑动到底部 给底部添加了一个a标签 通过BScroll的api : scrollToElement 直接滑动到最底部
        // console.log(this.bottom)
        this.msgScroll.scrollToElement(this.bottom)
      })
    },
    computed: {
      ...mapState({
        currentUser: 'currentUser'
      }),
      bottom() { // 子组件的底部a元素
        return this.$refs.msgContent.bottom
      }
    },
    methods: {
      ...mapActions(['sendNewMsg', 'sendMyMsg', 'showDetail']),
      detailShow(id) {
        this.showDetail(id)
        this.$router.push({name: 'detailView'})
      },
      closeChat() {
        this.$router.push({name: 'message'})
      },
      sendMsg() {
        let msg = this.value
        if (!msg.trim()) {
          return
        }
        let time = new Date().getTime()
        let id = this.currentUser._id
        this.sendMyMsg({id, msg, time, self: true})
          .then(this.refreshmsgScroll) // 自己的消息发送完毕后滚动到最底部
        this.sendNewMsg({id, msg, time, self: true, axios: this.axios})
          .then(this.refreshmsgScroll) // action 的promise执行完毕
        // 清空输入框
        this.value = ''
      },
      refreshmsgScroll() {
        this.$nextTick(() => {
          this.msgScroll.refresh()
          this.msgScroll.scrollToElement(this.bottom, 300)
        })
      },
      focus() {
        this.timer = setInterval(() => { // 微信可行,解决软键盘问题
          this.$refs.footer.scrollIntoView(false)
        }, 100)
      },
      blur() {
        clearInterval(this.timer)
      }
    },
    components: {
      MsgContent
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .chat
    position: fixed
    top: 0
    left: 0
    bottom: 0
    width: 100%
    background: #fff
    .nav-title
      font-size: 16px
      text-align: center
    .nav-right i
      vertical-align: bottom
      margin-left: 5px
    .footer
      position: fixed
      bottom: 0
      left: 0
      padding: 10px
      height: 90px
      width: 100%
      box-sizing: border-box
      background: #f6f6f6
      text-align: center
      .top
        display: flex
        .input
          flex: 1
          padding: 0
          margin: 0
          height: 32px
          min-height: 32px
        .send
          flex: 0 0 32px
          margin-left: 10px
      .bottom
        display: flex
        .icon
          flex: 1
          display: inline-block
          line-height: 48px
    .content-wrapper
      position: fixed
      left: 0
      right: 0
      top: 56px
      bottom: 90px
      overflow: hidden
      background: #eee
</style>
