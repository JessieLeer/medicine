import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_message',
	data() {
		return {
			activeName: 'first',
			notice: {
				search: '',
				data: [],
				total: 0,
				curpage: 1,
				selected: []
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
			this.$http.get('/api/messagePage', {params: {userId: this.user.id, type: 'notice', keywords: this.notice.search, page: page, pageSize: 10}}).then((res) => {
				this.notice.data = res.data.data
				this.notice.total = res.data.total
			})
		},
		systemIndex(page) {
			this.$http.get('/api/messagePage', {params: {userId: this.user.id, type: 'system', keywords: this.system.search, page: page, pageSize: 10}}).then((res) => {
				this.system.data = res.data.data
				this.system.total = res.data.total
			})
		},
		edit(id) {
			let messages = []
			if(id == "") {
				messages = this.notice.selected.map((item) => {
					return item.id
				})
			}else{
				messages = [id]
			}
			this.$http.post('/api/readmessage', {userId: this.user.id, messages: messages}).then((res) => {
				if(res.data.success){
					this.noticeIndex(this.notice.curpage)
				}
			})
		},
		del(id) {
			this.$confirm('确定删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
			}).then(() => {
				let messages = []
				if(id == "") {
					messages = this.notice.selected.map((item) => {
						return item.id
					})
				}else{
					messages = [id]
				}
				this.$http.post('/api/delmessage', {userId: this.user.id, messages: messages}).then((res) => {
					if(res.data.success){
						this.noticeIndex(this.notice.curpage)
					}
				})
			}).catch(() => {
			})
		},
		noticeSelect(val) {
      this.notice.selected = val
    }
	}
}