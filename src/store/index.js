import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  setDrawer: false,
  showSearch: false, // 展示搜索页面
  detailUserId: 0,
  currentUser: {}, // 当前聊天用户
  currentMsgList: {}, // 当前聊天用户的 聊天记录
  data: {
    self: {},
    friends: []
  },
  headerTitle: '',
  titleDesc: {
    message: '消息',
    friends: '联系人',
    discover: '发现'
  },
  isAjax: false, // 判断是否正在请求网络数据
  // 消息列表
  messageList: [
    {_id: 1, list: [{msg: '你可以和我聊天', time: 1541051132303, read: false}]},
    {_id: 2, list: [{msg: '我会讲笑话', time: 1542002394524, read: true}]},
    {_id: 3, list: [{msg: '在吗?', time: 1542072369522, read: false}]},
    {_id: 4, list: [{msg: '吃了吗?', time: 1541900394524, read: false}]}
  ]
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
