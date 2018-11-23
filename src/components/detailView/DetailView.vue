<template>
  <div class="detail-view">
    <mu-appbar style="width: 100%;z-index:150;position: relative" textColor="#6b6b6b" :z-depth="0"
               :color="`rgba(255,255,255,${opacity})`">
      <mu-button icon slot="left" @click="close(false)">
        <mu-icon value="arrow_back"></mu-icon>
      </mu-button>
      <div class="title">{{showTitle ? userData.name:''}}</div>
      <div class="nav-right" slot="right">
        <mu-icon value="music_note" v-show="!showTitle"></mu-icon>
        <mu-icon value="add_circle_outline"></mu-icon>
      </div>
    </mu-appbar>
    <div class="content" ref="detailContent">
      <div>
        <div class="bg-img">
          <div class="img" :style="{height: `${bgHeight}px`}">
          </div>
        </div>
        <mu-avatar class="avatar" :size="72">
          <img :src="userData.avatar">
        </mu-avatar>
        <div class="name">{{userData.name}}</div>
        <div class="explain">{{userData.explain}}</div>
        <mu-list>
          <mu-list-item avatar button :ripple="false">
            <mu-icon value="person_outline"></mu-icon>
            <mu-list-item-title>{{userData.birthday}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="keyboard_arrow_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar button :ripple="false">
            <mu-icon value="pin_drop"></mu-icon>
            <mu-list-item-title>{{userData.address}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="keyboard_arrow_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar button :ripple="false">
            <mu-icon value="stay_current_portrait"></mu-icon>
            <mu-list-item-title>{{userData.phone}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="keyboard_arrow_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
          <mu-list-item avatar button :ripple="false">
            <mu-icon value="mail_outline"></mu-icon>
            <mu-list-item-title>{{userData.email}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon value="keyboard_arrow_right"></mu-icon>
            </mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <mu-tabs :value.sync="active" inverse color="#2196f3" indicator-color="#2196f3" center>
          <mu-tab>主页</mu-tab>
          <mu-tab>关注</mu-tab>
          <mu-tab>喜欢</mu-tab>
        </mu-tabs>
        <div class="demo-text" v-if="active === 0">
          <p>
            {{userData.about}}
          </p>
        </div>
        <div class="demo-text" v-if="active === 1">
          <p>“我的心从来没有这么坚定过，所以我会为了补偿而死，也可以为了补偿而死……一辈子，急辈子都无所谓，我绝不后退！”</p>
          <p>“如果我后退呢？如果我想要死呢？我不想你再次背对着我逃跑了……”</p>
          <p>“那么就去地狱找到你，我绝对不逃！”</p>
          <p>“白痴，你也哭了？因为那些软弱拖累你的脚步？”</p>
        </div>
        <div class="demo-text" v-if="active === 2">
          <p>“不，这泪水……是因为勇气，因为力量，因为信任，……你不会懂的！”</p>
          <p>“我不会帮你，想要什么样的未来……自己去追寻吧！”</p>
          <p>“我不需要你的帮忙！未来我会一手开启，什么样的敌人我也不会惧怕……还有，其实我们可以成为朋友的……”</p>
          <p>“也许吧，未来……给你了。”</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="btn-item">
        <mu-button full-width color="#fff">个性名片</mu-button>
      </div>
      <div class="btn-item">
        <mu-button full-width color="#2196f3" textColor="#fff" @click="startChat">{{userData._id === 0 ?
          '编辑资料':'发消息'}}
        </mu-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    name: 'DetailView',
    data() {
      return {
        active: 0,
        opacity: 0, // 顶部导航栏透明度
        bgHeight: 150 // 背景图片高度(下拉放大)
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.detailScroll = new BScroll(this.$refs.detailContent, {
          click: true,
          probeType: 3
        })

        this.detailScroll.on('scroll', ({y}) => {
          let offsetY = parseInt(y)
          // y值到80 顶部导航栏透明度为1
          if (offsetY < 0) { // 向上滚动
            this.bgHeight = 150 // 页面向上滚动不缩放背景图片
            let num = -Math.floor((y / 80) * 10) / 10 // 取小数点后一位
            this.opacity = num > 1 ? 1 : num
            // console.log(this.opacity)
          } else {
            this.bgHeight = 150 + offsetY
          }
        })
      })
    },
    computed: {
      ...mapGetters({userData: 'detailUserData'}),
      showTitle() {
        return this.opacity > 0.7
      }
    },
    methods: {
      ...mapActions(['showChat']),
      close() {
        this.$router.go(-1)
      },
      startChat() {
        if (this.userData._id === 0) {
          // 当前主页是用户自身,不能发起聊天请求
          return
        }
        this.showChat(this.userData)
        this.$router.push({name: 'chatView'})
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .detail-view
    position: fixed
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-color: #fff
    .title
      text-align: center
    .content
      position: absolute
      overflow: hidden
      left: 0
      top: 0
      width: 100%
      bottom: 56px
      z-index: 80
      .bg-img
        padding-top: 150px
        box-sizing: border-box
        height: 150px
        width: 100%
        .img
          background: grey
          transform: translateY(-100%)
          background: url("../../assets/img/bg.jpg") no-repeat center center
          background-size: cover
      .avatar
        position: relative
        display: block
        background: #fff
        margin: -45px auto 4px
        box-sizing: content-box
        z-index: 50
      .name
        font-size: 20px
        text-align: center
        color: #000
      .explain
        width: 80%
        margin: 0 auto
        text-align: center
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        color: #4d4d4d
      .mu-item
        .mu-icon
          color: rgba(7, 17, 27, 0.3)
        .mu-item-title
           margin-left: 10px
      .demo-text
        padding: 5px 15px
        font-size: 14px
        line-height: 1.5
        color: black
    .footer
      position: fixed
      display: flex
      left: 0
      bottom: 0
      width: 100%
      height: 56px
      padding-top: 10px
      background: #eeeeee
      .btn-item
        flex: 1
        margin: 0 10px
</style>
