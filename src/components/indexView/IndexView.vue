<template>
<div class="indexView">
  <div class="content-top">
    <top-nav></top-nav>
  </div>
  <router-view/>
  <div class="tabbar">
    <bottom-tab></bottom-tab>
  </div>
  <!--侧边抽屉栏-->
  <SettingDrawer></SettingDrawer>
  <!--搜索页面-->
  <SearchView v-if="showSearch"></SearchView>
</div>
</template>

<script>
  import {mapState} from 'vuex'
  import TopNav from '../topnav/TopNavigation'
  import BottomTab from '../bottomTab/BottomTab'
  import SettingDrawer from '../settingDrawer/SettingDrawer'
  import SearchView from '../searchView/SearchView'
  export default {
    name: 'App',
    computed: mapState({allData: 'data', showSearch: 'showSearch'}),
    components: {
      TopNav,
      BottomTab,
      SettingDrawer,
      SearchView
    }
  }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
  .tabbar
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 56px
    background: #fff
</style>
