import cheader from '@/components/header/index.vue'

export default {
	name: 'order',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			isChecked: true,
			order: {
				pay: {},
				endValue: '',
				createBy: {},
				updateBy: {},
				supplierProductList: []
			},
			search: {
				name: ''
			},
			subGoods: []
		}	
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		goodsFilter() {
			return this.order.supplierProductList.filter((item) => {
				return item.product.name.indexOf(this.search.name) != -1
			})
		}
	},
	created() {
		this.index()
	},
	components: {
		cheader
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index() {
			this.$http.get('/api/inquiry/viewOffer', {params: {id: this.$route.params.id, userId: this.user.id}}).then((res) => {
				res.data.data.supplierProductList ? '' : res.data.data.supplierProductList = []
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
				for(let item of this.order.supplierProductList){
					item.available = item.available ? item.available : item.expected
					item.ticket = item.ticket ? item.ticket : '0'
					item.unticket = item.unticket ? item.unticket : '0'
				}
				let arr = []
				this.subGoods = this.order.supplierProductList.map((item) => {
					arr.push(item)
					if(arr.filter((itemer) => {
						return itemer.productId == item.productId
					}).length > 1){
						return 'noid'
					}else{
						return item.id
					}
				})
				this.subGoods = new Set(this.subGoods)
				this.subGoods = [...this.subGoods]
				this.subGoods.forEach((item,index,arr) => {
					if(item == 'noid'){
						arr.splice(index, 1)
					}
				})
			})
		},
		objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
				let rows = this.order.supplierProductList.filter((item) => {
					return item.productId == row.productId
				})
        if (rows.indexOf(row) == 0) {
          return {
            rowspan: rows.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
		getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = `已选择 ${Object.keys(this.subGoods).length} 项`
					return 
        }else{
					sums[index] = ''
					return 
				}
      })
      return sums
    },
		submit() {
			let arr = []
			for(let item of this.subGoods) {
				arr.push(this.order.supplierProductList.filter((itemer) => {
					return itemer.id == item
				})[0])
			}
			let subArr = arr.map((item) => {
				return {
					id: item.id,
					userId: item.supplierId,
					goodId: item.productId
				}
			})
			this.$http.post('/api/inquiry/saveEnquiry',{userId: this.user.id, inquiryId: this.$route.params.id, data: subArr}).then((res) => {
				if(res.data.success) {
					this.$router.push(`/order/result/${res.data.data}`)
				}
			})
		}
	}
}