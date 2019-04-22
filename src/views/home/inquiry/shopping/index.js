import cheader from '@/components/header/index.vue'

export default {
	name: 'shopping',
	data() {
		return {
			shoppings: [],
			detailShow: false,
			details: []
		}
	},
	components: {
		cheader
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.index()
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index() {
			let url = this.$route.params.type == 'erp' ? '/api/inquiry/procurementPlan' : '/api/inquiry/myInquiry'
			this.$http.get(url,{params: {userId: this.user.id}}).then((res) => {
				this.shoppings = res.data.data
			})
		},
		show(id) {
			this.detailShow = true
			let url = this.$route.params.type == 'erp' ? '/api/inquiry/procurementPlanInfo' : '/api/inquiry/myInquiryInfo'
			this.$http.get(url, {params: {id: id}}).then((res) => {				
				this.details = this.$route.params.type == 'erp' ? res.data.data : res.data.data.productList
			})
		}
	}
}