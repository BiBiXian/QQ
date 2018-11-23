<template>
  <div class="discover" ref="discover">
    <div>
      <SearchBar></SearchBar>
      <div class="tab">
        <div class="tab-item">
          <mu-icon value="star_rate" size="40" color="#F4D249"></mu-icon>
          <span class="text">好友动态</span>
        </div>
        <div class="tab-item">
          <mu-icon value="room" size="40" color="#F15E5E"></mu-icon>
          <span class="text">附近</span>
        </div>
        <div class="tab-item">
          <mu-icon value="home" size="40" color="#FFCE64"></mu-icon>
          <span class="text">兴趣部落</span>
        </div>
      </div>
      <Split></Split>
      <mu-list toggle-nested>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="videogame_asset" size="26" color="#1EA5E4"></mu-icon>
          <mu-list-item-title>游戏</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="video_library" size="26" color="#B060E1"></mu-icon>
          <mu-list-item-title>好友微视</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="shopping_basket" size="26" color="#FC5B4B"></mu-icon>
          <mu-list-item-title>京东购物</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="airplay" size="26" color="#F9D24F"></mu-icon>
          <mu-list-item-title>企鹅电竞</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="sentiment_satisfied_alt" size="26" color="#FFBB33"></mu-icon>
          <mu-list-item-title>鹅漫U品</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="pets" size="26" color="#F45D5F"></mu-icon>
          <mu-list-item-title>动漫</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="local_library" size="26" color="#01D1A0"></mu-icon>
          <mu-list-item-title>阅读</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="music_note" size="26" color="#85D33B"></mu-icon>
          <mu-list-item-title>音乐</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="videocam" size="26" color="#FF688D"></mu-icon>
          <mu-list-item-title>直播</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="assessment" size="26" color="#EA5E54"></mu-icon>
          <mu-list-item-title>全民投票</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <Split></Split>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="directions_bike" size="26" color="#04B1F8"></mu-icon>
          <mu-list-item-title>运动</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="local_cafe" size="26" color="#F3A466"></mu-icon>
          <mu-list-item-title>吃喝玩乐</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="location_city" size="26" color="#F25D5F"></mu-icon>
          <mu-list-item-title>同城服务</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="library_books" size="26" color="#0AB2FA"></mu-icon>
          <mu-list-item-title>腾讯新闻</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <mu-list-item button :ripple="false" nested>
          <mu-icon value="school" size="26" color="#0AB2FA"></mu-icon>
          <mu-list-item-title>腾讯课堂</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="30" value="keyboard_arrow_right"></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import SearchBar from '../searchBar/SearchBar.vue'
  import Split from '../widget/Split.vue'
    export default {
      name: 'Discover',
      mounted() {
         this.$nextTick(() => {
             this.discoverScroll = new BScroll(this.$refs.discover, {
               click: true
             })
         })
      },
      components: {
        SearchBar,
        Split
      }
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .discover
    position: fixed
    left: 0
    right: 0
    top: 56px
    bottom: 56px
    overflow: hidden
    .tab
      display: flex
      width: 100%
      height: 80px
      .tab-item
        flex: 1
        padding: 5px 0 10px
        box-sizing: border-box
        font-size: 0
        text-align: center
        .text
          display: block
          font-size: 12px
    .mu-list li
      border-bottom: 1px solid #ddd
      .mu-item-title
        margin-left: 12px
</style>
