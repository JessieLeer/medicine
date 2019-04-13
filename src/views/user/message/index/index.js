import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_message',
	data() {
		return {
			activeName: 'first',
			selectedNotice: [],
			selectedSystem: [],
			notice: {
				search: '',
				data: [],
				total: 0,
				curpage: 1
			},
			system: {
				search: '',
				data: [],
				total: 0,
				curpage: 1
			}
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		caside
	},
	created() {
		this.noticeIndex(1)
		this.systemIndex(1)
	},
	methods: {
		noticeIndex(page) {
			this.$http.get('/api/ucenter/getNotify', {params: {userId: this.user.id, type: '通知', keywords: this.notice.search, page: page, pageSize: 10}}).then((res) => {
				this.notice.data = res.data.data
				this.notice.total = res.data.total
			})
		},
		systemIndex(page) {
			this.$http.get('/api/ucenter/getNotify', {params: {userId: this.user.id, type: '系统消息', keywords: this.system.search, page: page, pageSize: 10}}).then((res) => {
				this.system.data = res.data.data
				this.system.total = res.data.total
			})
		},
		noticeSelect(val) {
      this.selectedNotice = val
    },
		systemSelect(val) {
			this.selectedSystem = val
		}
	}
}