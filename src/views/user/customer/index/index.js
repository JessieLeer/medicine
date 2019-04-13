import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_customer',
	data() {
		return {
			search: {
				name: '',
				status: ''
			},
			curpage: 1,
			customers: [
				
			],
			total: 0,
			selectedCustomers: [
				
			],
			editFormVisiable: false
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.index(1)
	},
	components: {
		cheader,
		caside
	},
	methods: {
		index(page) {
			this.$http.get('/api/ucenter/customer', {params: {userId: this.user.id, page: page, pageSize: 10, search: this.search}}).then((res) => {
				this.customers = res.data.data
				this.total = res.data.total
			})
		},
		resetForm(form) {
			this.$refs[form].resetFields()
			this.index(1)
		},
		handleSelectionChange(val) {
      this.selectedCustomers = val
    },
		del() {
			this.$confirm('确定删除?', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				let arr = []
        for(let item of this.selectedCustomers) {
				  arr.push(item.id)
		  	}
				this.$http.delete('/api/ucenter/customerDel', {data: {userId: this.user.id, customers: arr}}).then((res) => {
					console.log(res)
					this.$message.info(res.data.message)
					this.index(this.curpage)
				})
      }).catch(() => {
        
      })
		}
	}
}