import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_message_show',
	data() {
		return  {
			article: {
				id: '1',
				title: '开源中国 ( www.oschina.net ) 一周精彩回顾',
				created_at: '2017-08-18 15:09',
				content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架'
			}
		}
	},
	components: {
		cheader,
		caside
	}
}