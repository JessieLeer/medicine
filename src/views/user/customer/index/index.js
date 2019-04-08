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
			customers: [
				{
					id: '1',
					name: '山东东美医药有限公司',
					description: '这是一家不错的公司',
					status: '正常',
					created_at: '2019-09-09 18:09:09'
				},
				{
					id: '2',
					name: '山东东美医药有限公司',
					description: '这是一家不错的公司',
					status: '冻结',
					created_at: '2019-09-09 18:09:09'
				},
				{
					id: '3',
					name: '山东东美医药有限公司',
					description: '这是一家不错的公司',
					status: '未激活',
					created_at: '2019-09-09 18:09:09'
				},
				{
					id: '4',
					name: '山东东美医药有限公司',
					description: '这是一家不怎么样的公司',
					status: '正常',
					created_at: '2019-09-09 18:09:09'
				},
			],
			selectedCustomers: [
				
			],
			editFormVisiable: false
		}
	},
	computed: {
		filterCustomers() {
			return this.customers.filter((item) => {
				return item.name.indexOf(this.search.name) != -1 && item.status.indexOf(this.search.status) != -1
			})
		}
	},
	components: {
		cheader,
		caside
	},
	methods: {
		resetForm(form) {
			this.$refs[form].resetFields()
		},
		handleSelectionChange(val) {
      this.selectedCustomers = val
    }
	}
}