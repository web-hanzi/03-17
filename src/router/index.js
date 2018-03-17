import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Faxian from '../pages/faxian.vue'
import Mine from '../pages/mine.vue'
import Shopping from '../pages/shopping.vue'
import Weitao from '../pages/weitao.vue'
import Yiyuan from '../pages/home/zhuanjia'
import Daifu from '../pages/home/zhuanjia/daifu'
import Hushi from '../pages/home/zhuanjia/hushi'
import Yisheng from '../pages/home/zhuanjia/yisheng'
import Shouye from '../components/shouye'
import Yi from '../components/yi'
import Er from '../components/er'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/weitao',
      component: Weitao,
    },
    {
      path: '/faxian',
      component: Faxian
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/mine',
      component: Mine
    },
    {
      path: '/zhuanjia',
      component: Yiyuan,
      redirect:'/zhuanjia/yisheng',
      children:[
        {
          path:'daifu',
          component:Daifu
        },
        {
          path:'hushi',
          component:Hushi
        },
        {
          path:'yisheng',
          component:Yisheng
        }
      ]
    },


  ]
})
