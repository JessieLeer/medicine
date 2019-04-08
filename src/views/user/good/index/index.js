import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_good',
	data() {
		return {
			search: {
				name: '',
				status: '',
				update_at: ''
			},
			selectedGoods: [],
			goods: [
				{
					id: '1',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '待审核',
					update_at: '2019-08-12 23:45:12'
				},
				{
					id: '2',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '待审核',
					update_at: '2019-08-13 23:45:12'
				},
				{
					id: '3',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '已审核',
					update_at: '2019-08-14 23:45:12'
				},
				{
					id: '4',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '待审核',
					update_at: '2019-08-15 23:45:12'
				},
				{
					id: '5',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '待审核',
					update_at: '2019-08-16 23:45:12'
				},
				{
					id: '6',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '已审核',
					update_at: '2019-08-17 23:45:12'
				},
				{
					id: '7',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '待审核',
					update_at: '2019-08-18 23:45:12'
				},
				{
					id: '8',
					name: '阿莫西林胶囊',
					manufacturer: '山东淄博新达制药邮箱有限公司',
					specification: '40g*12/盒',
					status: '待审核',
					update_at: '2019-08-19 23:45:12'
				},
			],
			cates: [
				{
					value: 'food',
					label: '食物',
					children: [
						{
							value: 'vegetable',
							label: '蔬菜',
							children: [
								{
									value: 'cabbage',
									label: '白菜'
								},
								{
									value: 'radish',
									label: '萝卜'
								},
								{
									value: 'eggplant',
									label: '茄子'
								},
							]
						},
						{
						  value: 'fruit',
							label: '水果',
							children: [
								{
									value: 'orange',
									label: '橘子'
								},
								{
									value: 'banana',
									label: '香蕉'
								},
								{
									value: 'watermelon',
									label: '西瓜'
								},
							]
						}
					]
				},
				{
					value: 'cloth',
					label: '服装',
					children: [
						{
							value: 'mens',
							label: '男装',
							children: [
								{
									value: 'shirt',
									label: 'T桖'
								},
								{
									value: 'jacket',
									label: '夹克'
								}
							]
						},
						{
							value: 'womens',
							label: '女装',
							children: [
								{
									value: 'dress',
									label: '连衣裙'
								},
								{
									value: 'leggings',
									label: '打底裤'
								}
							]
						}
					]
				}
			],
			editFormVisiable: false,
			form: {
				
			},
			rules: {
				name: {
					required: true,
					message: '请输入产品名称',
					trigger: 'blur'
				},
				brand: {
					required: true,
					message: '请选择品牌',
					trigger: 'change'
				},
				cates: {
					required: true,
					message: '请选择产品分类',
					trigger: 'change'
				},
				code: {
					required: true,
					message: '请输入助记码',
					trigger: 'blur'
				},
				numbering: {
					required: true,
					message: '请输入产品编码',
					trigger: 'blur'
				},
				recnumber: {
					required: true,
					message: '请输入批准文号',
					trigger: 'blur'
				},
				manufacturer: {
					required: true,
					message: '请输入生产厂家',
					trigger: 'blur'
				},
				specification: {
					required: true,
					message: '请输入产品规格',
					trigger: 'blur'
				},
				presclass: {
					required: true,
					message: '请选择处方分类',
					trigger: 'change'
				},
				formulation: {
					required: true,
					message: '请输入剂型',
					trigger: 'blur'
				},
				prounit: {
					required: true,
					message: '请输入产品单位',
					trigger: 'blur'
				},
				erp: {
					required: true,
					message: '请输入erp编码',
					trigger: 'blur'
				}
			},
		}
	},
	computed: {
		filterGoods() {
			return this.goods.filter((item) => {
				return item.name.indexOf(this.search.name) != -1 && item.status.indexOf(this.search.status) != -1 && item.update_at.indexOf(this.search.update_at) != -1 || item.manufacturer.indexOf(this.search.name) != -1 && item.status.indexOf(this.search.status) != -1 && item.update_at.indexOf(this.search.update_at) != -1
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
      this.selectedGoods = val
    },
		dayChange(val) {
		},
		handlEdit(good) {
			this.form = good
			this.editFormVisiable = true
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					console.log('right')
        } else {
					console.log('error')
          return false
        }
      })
		}
	}
}