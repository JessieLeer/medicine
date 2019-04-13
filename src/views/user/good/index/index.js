import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_good',
	data() {
		return {
			search: {
				name: '',
				status: ''
			},
			selectedGoods: [],
			goods: [],
			total: 0,
			curpage: 1,
			cates: [],
			brands: [],
			presclass: [],
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
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		caside
	},
	created() {
		this.index(1)
		this.cateIndex()
		this.brandIndex()
		this.presclassIndex()
	},
	methods: {
		index(page) {
			this.$http.get('/api/ucenter/product', {params: {userId: this.user.id, search: this.search, page: page, pageSize: 10}}).then((res) => {
				for(let item of res.data.data) {
					if(item.image == ''){
						item.image = []
					}else {
						item.image = item.image.split('|')
					}
					if(item.cates == ''){
						item.cates = []
					}else{
						item.cates = item.cates.split(',')
					}
					if(item.brand) {
						item.brand = item.brand.id
					}else{
						item.brand = ''
					}
				}
				this.goods = res.data.data
				this.total = res.data.total
			})
		},
		resetForm(form) {
			this.$refs[form].resetFields()
			this.index(1)
		},
		handleSelectionChange(val) {
      this.selectedGoods = val
    },
		cateIndex() {
			this.$http.get('/api/category').then((res) => {
				this.cates = res.data.data
			})
		},
		brandIndex() {
			this.$http.get('/api/brand').then((res) => {
				this.brands = res.data.data
			})
		},
		presclassIndex() {
			this.$http.get('/api/chuffl').then((res) => {
				this.presclass = res.data.data
			})
		},
		handlEdit(good) {
			this.form = good
			this.editFormVisiable = true
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
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('/api/ucenter/productAdd', this.form).then((res) => {
						if(res.data.success){
							this.$message.success(res.data.message)
							this.index(this.curpage)
						}else{
							this.$message.error(res.data.message)
						}
					})
        } else {
          return false
        }
      })
		}
	}
}