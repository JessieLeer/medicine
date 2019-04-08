import cheader from '@/components/header/index.vue'

export default {
	name: 'inquiry_create',
	data() {
		let phoneVerify = (rule, value, callback) => {
			const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的手机号'))
      }
    }
		return {
			form: {
				name: '',
				cutoff: {
					type: '',
					value: ''
				},
				goods: [],
				aimType: '',
				aims: [],
				isTicket: '',
				pay: '',
				contact: '',
				phone: '',
				address: '',
				remark: ''
			},
			rules: {
				name: {
					required: true, 
          message: '请输入用户名',
          trigger: 'blur'
				},
				cutoff: {
					type: {
						required: true,
						message: '请选择截止条件',
						trigger: 'change'
					},
					value: {
						required: true,
						message: '请输入该选项',
						trigger: 'blur'
					}
				},
				goods: {
					required: true,
					validator(rule, value, callback) {
						if(value.length == 0) {
							return callback(new Error('请选择产品'))
						}else{
							callback()
						}
					},
					trigger: 'change' 
				},
				aimType: {
					required: true,
					message: '请选择目标公开类型',
					trigger: 'change'
				},
				aims: {
					required: true,
					validator(rule, value, callback) {
						if(value.length == 0) {
							return callback(new Error('请选择目标供应商'))
						}else{
							callback()
						}
					}, 
					trigger: 'change' 
				},
				isTicket: {
					required: true,
					message: '请选择是否含有发票',
					trigger: 'change'
				},
				pay: {
					required: true,
					message: '请选择付款方式',
					trigger: 'change'
				},
				contact: {
					required: true,
					message: '请输入联系人',
					trigger: 'blur'
				},
				phone: {
					required: true,
					validator: phoneVerify, 
					trigger: 'blur' 
				},
				address: {
					required: true,
					message: '请输入送货地址',
					trigger: 'blur'
				}
			},
			goodsDialogShow: false,
			search: {
				good: {
					cate: [],
				  name: ''
				},
				offer: {
					name: ''
				}
			},
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
			goods: [
				{
					id: '1',
					cates: ['food','fruit','banana'],
					name: '海南香蕉',
					numbering: 'zp613',
					manufacturer: '山东淄博新华制药有限公司',
					specification: '0.25g * 20s/盒',
					offer: '盒',
					approve: '国药准字2738927',
					expected: '',
					package: '30'
				}
			],
			offersDialogShow: false,
			offers: [
				{
					id: '1',
					name: '新华制药',
					type: '零售连锁企业',
					update_at: '2019-09-09'
				}
			],
			goodCreateVisable: false,
			form1: {
				name: '',
				brand: '',
				cates: [],
				code: '',
				numbering: '',
				recnumber: '',
				manufacturer: '',
				specification: '',
				presclass: '',
				formulation: '',
				prounit: '',
				erp: '',
				images: []
			},
			rules1: {
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
			dialogResultVisible: false
		}
	},
	computed: {
		filterGoods() {
			return this.goods.filter((item) => {
				return item.name.indexOf(this.search.good.name) != -1
			})
		},
		filterOffers() {
			return this.offers.filter((item) => {
				return item.name.indexOf(this.search.offer.name) != -1
			})
		}
	},
	components: {
		cheader
	},
	methods: {
		cateChange(val) {
		},
		appendForm(field,item) {
			this.form[field].push(item)
		},
		deleteForm(field,item){
			let i = this.form[field].indexOf(item)
			this.form[field].splice(i,1)
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
