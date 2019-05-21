import cheader from '@/components/header/index.vue'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
	name: 'supplier',
	data() {
		return {
			banners: [],
			search: {
				name: ''
			},
			curpage: 1,
			suppliers: [],
			total: 0,
			newers: [],
			serverUrl: this.$store.state.config.serverUrl,
			classOption: {
				step: 0.5,
				limitMoveNum: 1,
				openTouch: false,
				hoverStop: true
			}
		}
	},
	components: {
		cheader,
		vueSeamlessScroll
	},
	created() {
		this.index(1)
		this.bannerIndex()
		this.newerIndex()
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index(page) {
			this.$http.get('/api/supplierPage', {params: {name: this.search.name, page: page, pageSize: 9}}).then((res) => {
				this.suppliers = res.data.data
				this.total = res.data.total
			})
		},
		bannerIndex() {
			this.$http.get('/api/innerBanner').then((res) => {
				this.banners = res.data.data
			})
		},
		newerIndex() {
			this.$http.get('/api/latestJoin').then((res) => {
				this.newers = res.data.latestSuppliers
			})
		}
	}
}