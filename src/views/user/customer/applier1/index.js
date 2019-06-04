import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_customer_applier1',
	data() {
		return {
			suppliers: [],
			emptyText: '加载中...',
			search: {
				name: ''
			},
			total: 0,
			curpage: 1,
		}
	},
	components: {
		cheader,
		caside
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.index(1)
	},
	methods: {
		index(page) {
			this.$http.get('/api/ucenter/getLinkApply', {params: {userId: this.user.id, name: this.search.name, page: page, pageSize: 10, type: 'my'}}).then((res) => {
				res.data.data = res.data.data ? res.data.data : []
				if(res.data.data.length == 0) {
					this.emptyText = '暂无数据'
				}
				this.suppliers = res.data.data
				this.total = res.data.total
			})
		}
	}
}