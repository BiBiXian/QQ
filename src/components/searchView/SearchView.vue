<template>
  <div class="search-view">
    <div class="header">
      <div class="searchBar">
        <mu-icon value="search" size="20" class="icon"></mu-icon>
        <input type="text" class="search" v-model="keyword" placeholder="搜索">
        <mu-icon :size="20" v-show="keyword.length" class="delete" value="cancel" color="#b6b6b6"
                 @click="deleteKeyWorld"></mu-icon>
      </div>
      <div class="cancel" @click="showSearch(false)">取消</div>
    </div>
    <div class="content">
      <mu-list textline="two-line">
        <mu-list-item class="item" v-for="item in filterFriendsList" @click="startChat(item)" :key="item._id" avatar button ripple>
          <mu-list-item-action>
            <mu-avatar :size="30" slot="left">
              <img :src="item.avatar">
            </mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-sub-title>{{item.explain}}</mu-list-item-sub-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </div>
  </div>
</template>

<script>
  import {mapMutations, mapActions, mapGetters} from 'vuex'
  import {TOGGLE_SEARCH_VIEW} from '../../store/mutation-types'

  export default {
    name: 'SearchView',
    data() {
      return {
        keyword: ''
      }
    },
    computed: {
      ...mapGetters(['friendsList']),
      filterFriendsList() {
        // 只根据用户名查询
        let result = []
        let str = this.keyword.trim()

        if (!str) { // 内容为空不展示
          return result
        }
        result = this.friendsList.filter(f => {
          let reg = new RegExp(str, 'gim')
          return reg.test(f.name)
        })
        return result
      }
    },
    methods: {
      ...mapMutations({showSearch: TOGGLE_SEARCH_VIEW}),
      ...mapActions(['showChat']),
      deleteKeyWorld() {
        this.keyword = ''
      },
      startChat(user) {
        // 清空关键字
        this.deleteKeyWorld()
        // 关闭搜索页面
        this.showSearch(false)
        // 打开聊天页面
        this.showChat(user)
        this.$router.push({name: 'chatView'})
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .search-view
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: #fff
    z-index: 50
    .header
      box-sizing: border-box
      display: flex
      height: 45px
      padding: 10px 4px 10px 10px
      .searchBar
        position: relative
        flex: 1
        display: flex
        background: rgba(7, 17, 27, 0.1)
        height: 100%
        border-radius: 4px
        .icon
          display: inline-block
          vertical-align: top
          line-height: 25px
          margin-left: 5px
        .search
          flex: 1
          line-height: 25px
          font-size: 12px
          vertical-align: top
          border: none
          outline: none
          background: transparent
        .delete
          position: absolute
          line-height: 24px
          right: 3px
      .cancel
        flex: 0 0 30px
        margin-left: 5px
        width: 30px
        text-align: center
</style>
