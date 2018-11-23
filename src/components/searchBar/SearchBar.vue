<template>
  <mu-sub-header class="searchWrapper">
    <div class="searchBar" @click="showSearch(true)">
      <mu-icon value="search" size="20" class="icon"></mu-icon>
      <span class="text">搜索</span>
    </div>
  </mu-sub-header>
</template>

<script>
  import {mapMutations} from 'vuex'
  import {TOGGLE_SEARCH_VIEW} from '../../store/mutation-types'

  export default {
    name: 'SearchBar',
    methods: mapMutations({showSearch: TOGGLE_SEARCH_VIEW})
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .searchWrapper
    padding: 10px
    height: 45px
    box-sizing: border-box
    .searchBar
      height: 100%
      background: rgba(7, 17, 27, 0.1)
      border-radius: 4px
      .icon
        display: inline-block
        margin: 0 2px 0 5px
        vertical-align: top
        line-height: 25px
      .text
        display: inline-block
        font-size: 12px
        vertical-align: top
        line-height: 25px
</style>
