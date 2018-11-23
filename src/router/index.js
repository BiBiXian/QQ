import Vue from 'vue'
import Router from 'vue-router'
import IndexView from '../components/indexView/IndexView'
import Message from '../components/message/Message'
import Friends from '../components/friends/Friends'
import Discover from '../components/discover/Discover'
import ChatView from '../components/chatView/ChatView'
import DetailView from '../components/detailView/DetailView'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',
     name: 'indexView',
     component: IndexView,
     children: [
       {path: '/message', name: 'message', component: Message},
       {path: '/friends', name: 'friends', component: Friends},
       {path: '/discover', name: 'discover', component: Discover}
     ]
    },
    {path: '/chatView', name: 'chatView', component: ChatView},
    {path: '/detailView', name: 'detailView', component: DetailView}
  ]
})

export default router
