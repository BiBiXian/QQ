<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/message">
        <mu-icon value="chat_bubble_outline"></mu-icon>
        <span class="text">消息</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/friends">
        <mu-icon value="supervisor_account"></mu-icon>
        <span class="text">联系人</span>
      </router-link>
    </div>
    <div class="tab-item">
      <router-link to="/discover">
        <mu-icon value="explore"></mu-icon>
        <span class="text">发现</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bottomTab',
    data() {
      return {tab: 'message'}
    },
    methods: {
      change(val) {
        this.$router.push(val)
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
  .tab
    display: flex
    .tab-item
      flex: 1
      font-size: 0
      text-align: center
      .text
        display: block
        font-size: 12px
      & > a
        color: rgba(0, 0, 0, 0.5)
        &.router-link-active
          color: #2196f3
</style>
