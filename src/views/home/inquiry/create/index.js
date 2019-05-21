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
			picker: {
				disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7
        },
			},
			form: {
				userId: this.$store.state.user.id,
				source: this.$route.params.source,
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
			brands: [],
			presclass: [],
			cates: [],
			goods: [],
			goodTotal: 0,
			offerTotal: 0,
			goodCur: 1,
			offerCur: 1,
			offersDialogShow: false,
			offers: [],
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
				},
				bagShl: {
					required: true,
					message: '请输入件包装(只能输入数字)',
					trigger: 'blur'
				}
			},
			dialogResultVisible: false,
			emptyText: '记载中...'
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	watch: {
		'form.cutoff.type'() {
			this.form.cutoff.value = ''
		}
	},
	components: {
		cheader
	},
	created() {
		this.contactInit()
		this.supplierCount()
		this.cateIndex()
		this.brandIndex()
		this.presclassIndex()
		this.goodInit()
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		cateChange(val) {
		},
		/*-- 获取用户联系方式 --*/
		contactInit() {
			this.$http.get("/api/inquiry/getLatestContact", {params: {userId: this.user.id}}).then((res) => {
				this.form.contact = res.data.data.contact
				this.form.phone = res.data.data.phone
				this.form.address = res.data.data.address
			})
		},
		/*-- 获取用户的供应商数量 --*/
		supplierCount() {
			this.$http.get('/api/inquiry/supplier', {params: {userId: this.user.id, name: this.search.offer.name, page: 1, pageSize: 10}}).then((res) => {
				this.offerTotal = res.data.total
			})
		},
		/*-- 获取产品分类 --*/
		cateIndex() {
			this.$http.get('/api/category').then((res) => {
				this.cates = res.data.data
			})
		},
		/*-- 获取产品品牌 --*/
		brandIndex() {
			this.$http.get('/api/brand').then((res) => {
				this.brands = res.data.data
			})
		},
		/*-- 获取产品处方分类 --*/
		presclassIndex() {
			this.$http.get('/api/chuffl').then((res) => {
				this.presclass = res.data.data
			})
		},
		/*-- 产品初始化 --*/
		goodInit() {
			if(this.$route.params.sid == 'none') {
			}else{
				let url
				switch(this.$route.params.source) {
					case 'erp':
						url = '/api/inquiry/procurementPlanInfo'
					  break
					case 'history':
						url = '/api/inquiry/myInquiryInfo'
						break
					case 'excel':
						url = '/api/excelInquiryInfo'
						break
				}
				this.$http.get(url, {params: {id: this.$route.params.sid}}).then((res) => {
					
					if(this.$route.params.source == 'erp') {
						for(let item of res.data.data) {
							item.product.expected = item.expected
							this.form.goods.push(item.product)
						}
					}else{
						res.data.data = res.data.data ? res.data.data : {pay: '',productList: []}
						
						this.form.name = res.data.data.name
						this.form.cutoff.type = res.data.data.type
						this.form.cutoff.value = res.data.data.endValue
						this.form.aimType = res.data.data.aimType
						this.form.isTicket = res.data.data.isTicket
						this.form.contact = res.data.data.contact
						this.form.phone = res.data.data.phone
						this.form.pay = res.data.data.pay.value
						this.form.address = res.data.data.address
						this.form.remark = res.data.data.remark
						for(let item of res.data.data.productList) {
							item.product.expected = item.expected
							this.form.goods.push(item.product)
						}
					}
				})
			}
		},
		goodIndex(page) {
			this.goodsDialogShow = true
			let cates = this.search.good.cate
			this.$http.get('/api/inquiry/product', {params: {cate: cates[cates.length - 1], name: this.search.good.name, page: page, pageSize: 10}}).then((res) => {
				res.data.data = res.data.data ? res.data.data : []
				if(res.data.data.length == 0) {
					this.emptyText = '暂无数据'
				}
				this.goods = res.data.data
				for(let item of this.goods){
					item.expected = 1
				}
				this.goodTotal = res.data.total
			})
		},
		offerIndex(page) {
			this.offersDialogShow = true
			this.$http.get('/api/inquiry/supplier', {params: {userId: this.user.id, name: this.search.offer.name, page: page, pageSize: 10}}).then((res) => {
				this.offers = res.data.data
				this.offerTotal = res.data.total
			})
		},
		appendForm(field,item) {
			this.form[field].push(item)
		},
		deleteForm(field,item) {
			let i = this.form[field].indexOf(item)
			this.form[field].splice(i,1)
		},
		uploadImage(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.image.push(res.data.message)
					
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		goodCreate(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('/api/ucenter/productAdd', this.form1).then((res) => {
						if(res.data.success){
							this.$message.success(res.data.message)
							this.goodCreateVisable = false
							this.goodIndex()
						}else{
							this.$message.error(res.data.message)
						}
					})
        } else {
					console.log('error')
          return false
        }
      })
		},
		inquiryCreate(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('/api/inquiry/save', this.form).then((res) => {
						if(res.data.success){
							this.dialogResultVisible = true
						}else{
							this.$message.error(res.data.message)
						}
					})
        } else {
					console.log('error')
          return false
        }
      })
		},
		refresher() {
			window.location.reload()
		}
	}
}
