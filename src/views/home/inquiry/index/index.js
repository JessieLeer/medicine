import cheader from '@/components/header/index.vue'

export default {
	name: 'inquiry',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			search: {
				name: '',
				range: 'all',
				quoted: false
			},
			activeName: 'all',
			datas: [],
			
			total: 0,
			curpage: 1
		}
	},
	components: {
		cheader
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		shows: {
			get() {
				return this.datas.map((item) => {
					return item.id
				})
			},
			set() {
			}	
		}
	},
	created() {
		this.index(1)
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index(page) {
			this.$http.get('/api/inquiry', {params: {userId: this.user.id, keywords: this.search.name, quoted: this.search.quoted, aimType: this.search.range, page: page, pageSize: 10}}).then((res) => {
				this.datas = res.data.data ? res.data.data : []
				console.log(this.datas)
				this.total = res.data.total
			})
		},
		handleChange(val) {},
	}
}