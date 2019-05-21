import cheader from '@/components/header/index.vue'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
	name: 'buyer',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			banners: [],
			search: {
				name: ''
			},
			total: 0,
			curpage: 1,
			suppliers: [],
			newers: []
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
			this.$http.get('/api/purchaserPage', {params: {name: this.search.name, page: page, pageSize: 9}}).then((res) => {
				this.suppliers = res.data.data
				console.log(this.suppliers)
			})
		},
		bannerIndex() {
			this.$http.get('/api/innerBanner').then((res) => {
				this.banners = res.data.data
			})
		},
		newerIndex() {
			this.$http.get('/api/latestJoin').then((res) => {
				this.newers = res.data.latestPurchasers
				console.log(this.newers)
			})
		}
	}
}