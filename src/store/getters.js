export const msgViewList = (state) => { // 所有消息列表
  let result = []
  let friends = state.data.friends
  if (!friends.length) { // 没有好友
    return []
  }
  // 遍历消息列表获取给你发过信息的好友
  state.messageList.forEach(item => {
    // 获取当前聊天信息的好友信息
    let friendData = friends.find(f => f._id === item._id)
    // 获取未读消息的数量,和最后一条消息
    let unreadNum = 0
    let lastMsg = {}
    item.list.forEach(m => {
      if (!m.read) {
        unreadNum++
      }
      lastMsg = m
    })
    result.push({
      ...friendData,
      unreadNum,
      lastMsg
    })
  })
  return result
}

export const friendsList = (state) => { // 所有好友,获取所有好友的最后一条消息和未读数量
  return state.data.friends
}

export const detailUserData = (state) => {
  let id = state.detailUserId
  if (id === 0) {
    return state.data.self
  }
  let recode = state.data.friends.find(f => f._id === id)
  return recode
}
