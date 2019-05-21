import cheader from '@/components/header/index.vue'

export default {
	name: 'quote_edit',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			order: {
				productList: [],
				pay: {},
				endValue: ''
			},
			search: {
				name: '',
				range: 'default'
			},
			remark: ''
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		goodsFilter()  {
			return this.order.productList.filter((item) => {
				return item.flag == this.search.range && item.product.name.indexOf(this.search.name) != -1
			})
		},
		subGoods() {
			return this.order.productList.filter((item) => {
				return item.flag == 'default'
			})
		}
	},
	components: {
		cheader
	},
	created() {
		this.index()
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index() {
			this.$http.get('/api/inquiry/toApply', {params: {id: this.$route.params.id, userId: this.user.id}}).then((res) => {
				this.order = res.data.data
				switch(this.order.pay.value) {
					case 'cash':
						this.order.pay.value = '现金'
						break
					case 'card':
						this.order.pay.value = '银行卡'
						break
					case 'alipay':
						this.order.pay.value = '支付宝'
						break
					case 'wechat':
						this.order.pay.value ='微信'
						break
				}
				for(let item of this.order.productList){
					item.available = item.available ? item.available : item.expected
					item.ticket = item.ticket ? item.ticket : '0'
					item.unticket = item.unticket ? item.unticket : '0'
					this.$set(item,'flag','default')
				}
			})
		},
		importer() {
			this.$http.get('/api/inquiry/exportSupplierEnquiry', {params: {id: this.$route.params.id, userId: this.user.id}}).then((res) => {
				window.location.href = this.serverUrl + res.data.data
			})
		},
		save() {
			this.$http.post('/api/inquiry/pushOffer', {id: this.$route.params.id, userId: this.user.id, goods: this.subGoods, remark: this.remark}).then((res) => {
				if(res.data.success) {
					this.$alert(res.data.message, '', {
						confirmButtonText: '确定',
						callback: action => {
							this.$router.back()
						}
					})
				}
			})
		}
	}
}