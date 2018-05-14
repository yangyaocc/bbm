import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import cz from '@/page/cz'
import wk from '@/page/wk'
import zj from '@/page/zj'
import fw from '@/page/fw'
import wd from '@/page/wd'
Vue.use(Router)

export default new Router({
	linkActiveClass:"on",
	routes: [
		{
		  path: '/',
		  name: 'index',
		  component: index,
		  meta:{
		  	title:"大尾猿-帮帮忙-首页"	
		  }
		},
		{
		  path: '/cz',
		  name: 'cz',
		  component: cz,
		  meta:{
		  	title:"大尾猿-帮帮忙-充值"	
		  }
		},
		{
		  path: '/wk',
		  name: 'wk',
		  component: wk,
		  meta:{
		  	title:"大尾猿-帮帮忙-文库"	
		  }
		},
		{
		  path: '/zj',
		  name: 'zj',
		  component: zj,
		  meta:{
		  	title:"大尾猿-帮帮忙-专家"	
		  }
		},
		{
		  path: '/fw',
		  name: 'fw',
		  component: fw,
		  meta:{
		  	title:"大尾猿-帮帮忙-服务"	
		  }
		},
		{
		  path: '/wd',
		  name: 'wd',
		  component: wd,
		  meta:{
		  	title:"大尾猿-帮帮忙-问答"	
		  }
		}
	]
})
