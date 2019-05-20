import cheader from '@/components/header/index.vue'

export default {
	name: 'ordeResult',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			isTicket: '',
			orders: [
			],
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		shows: {
			get() {
				return this.orders.map((item) => {
					return item.supplier.user.id
				})
			},
			set() {
			}	
		},
		total() {
			let total = 0
			for(let order of this.orders){
				for(let good of order.productList){
					total += good.available * good.ticket
				}
			}
			return total
		}
	},
	components: {
		cheader
	},
	created() {
		this.show()
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		show() {
			this.$http.get('/api/inquiry/getEnquiry', {params: {id: this.$route.params.id}}).then((res) => {
				this.isTicket = res.data.data.inquiryPrice.isTicket
				this.orders = res.data.data.supplierProductList
			})
		},
		importer() {
			this.$http.get('/api/inquiry/exportEnquiry',{params: {id: this.$route.params.id}}).then((res) => {
				window.location.href = this.serverUrl + res.data.data
			})
		}
	}
}