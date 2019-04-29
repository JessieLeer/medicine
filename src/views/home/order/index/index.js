import cheader from '@/components/header/index.vue'

export default {
	name: 'order',
	data() {
		return {
			order: {
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
				for(let item of this.order.supplierProductList){
					item.available = item.available ? item.available : item.expected
					item.ticket = item.ticket ? item.ticket : '0'
					item.unticket = item.unticket ? item.unticket : '0'
				}
			})
		},
		objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
				let rows = this.order.supplierProductList.filter((item) => {
					return item.product.name == row.product.name
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
			console.log(this.subGoods)
			this.$http.post('/api/inquiry/saveEnquiry',{userId: this.user.id, inquiryId: this.$route.params.id, data: this.subGoods}).then((res) => {
				if(res.data.success) {
					this.$router.push(`/order/result/${res.data.data}`)
				}
			})
		}
	}
}