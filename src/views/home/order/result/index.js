import cheader from '@/components/header/index.vue'

export default {
	name: 'ordeResult',
	data() {
		return {
			orders: [
			],
		}
	},
	computed: {
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
				this.orders = res.data.data.supplierProductList
			})
		},
		importer() {
			this.$http.get('/api/inquiry/exportEnquiry',{params: {id: this.$route.params.id}}).then((res) => {
				window.location.href = `http://192.168.1.65:8088/${res.data.data}`
			})
		}
	}
}