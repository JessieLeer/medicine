import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_message',
	data() {
		return {
			activeName: 'first',
			notice: [
				{
					id: '1',
					title: '开源中国 ( www.oschina.net ) 一周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '未读'
				},
				{
					id: '2',
					title: '开源中国 ( www.oschina.net ) 二周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '未读'
				},
				{
					id: '3',
					title: '开源中国 ( www.oschina.net ) 三周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '未读'
				},
				{
					id: '4',
					title: '开源中国 ( www.oschina.net ) 四周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '已读'
				},
			],
			system: [
				{
					id: '1',
					title: '开源中国 ( www.oschina.net ) 一周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '已读'
				},
				{
					id: '2',
					title: '开源中国 ( www.oschina.net ) 二周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '已读'
				},
				{
					id: '3',
					title: '开源中国 ( www.oschina.net ) 三周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '未读'
				},
				{
					id: '4',
					title: '开源中国 ( www.oschina.net ) 四周精彩回顾',
					created_at: '2017-08-18 15:09',
					content: '动态化 weex 的搭建体系移动端音视频终端引擎的技术实践推送到达率的优化实践钉钉移动应用技术及开放生态分享Andromeda:适用于多进程架构的组件通信框架',
					status: '已读'
				},
			],
			selectedNotice: [],
			selectedSystem: [],
			search: {
				notice: '',
				system: ''
			}
		}
	},
	computed: {
		fileterNotice() {
			return this.notice.filter((item) => {
				return item.title.indexOf(this.search.notice) != -1 || item.content.indexOf(this.search.notice) != -1
			})
		},
		fileterSystem() {
			return this.system.filter((item) => {
				return item.title.indexOf(this.search.system) != -1 || item.content.indexOf(this.search.system) != -1
			})
		},
	},
	components: {
		cheader,
		caside
	},
	methods: {
		noticeSelect(val) {
      this.selectedNotice = val
    },
		systemSelect(val) {
			this.selectedSystem = val
		}
	}
}