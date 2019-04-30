import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_customer_create',
	data() {
		let phoneVerify = (rule, value, callback) => {
			const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的手机号'))
      }
    }
		let emailVerify = (rule, value, callback) => {
			const reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
			if (reg.test(value) || value == undefined || value == '') {
				callback()
			} else {
				return callback(new Error('请输入正确格式的邮箱'))
			}
		}
		return {
			customerDialogShow: false,
			search: {
				name: ''
			},
			customers: [],
			emptyText: '记载中...',
			total: 0,
			curpage: 1,
			form: {
				creator: this.$store.state.user.id
			},
			rules: {
				name: {
					required: true,
					message: '请输入用户名',
					trigger: 'blur'
				},
				phone: {
					required: true,
					validator: phoneVerify, 
					trigger: 'blur' 
				},
				email: {
					required: false,
					validator: emailVerify,
					trigger: 'blur'
				},
				company: {
					required: true,
					message: '请输入公司名称',
					trigger: 'blur'
				},
				license: {
					required: true,
					message: '请上传营业执照',
					trigger: 'change'
				},
				gsp: {
					required: true,
					message: '请上传gsp证书',
					trigger: 'change'
				}
			},
			license: [],
			gsp: []
		}
	},
	components: {
		cheader,
		caside
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	methods: {
		customerIndex(page) {
			this.customerDialogShow = true
			this.$http.get('/api/ucenter/findNoneLinkList', {params: {userId: this.user.id, name: this.search.name, page: page, pageSize: 10}}).then((res) => {
				res.data.data = res.data.data ? res.data.data : []
				if(res.data.data.length == 0) {
					this.emptyText = '暂无数据'
				}
				this.customers = res.data.data
				this.total = res.data.total
			})
		},
		adder(cid) {
			this.$http.post('/api/ucenter/toApplyLink', {userId: this.user.id, customerId: cid}).then((res) => {
				if(res.data.success){
					this.$message.success(res.data.message)
					this.customerDialogShow = false
					this.customers = []
				}
			})
		},
		handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleExceed(files, fileList) {
      this.$message.warning('超出可以上传的数量限制，请先移除不需要的文件再上传')
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
    },
		uploadLicense(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.license = res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		uploadGsp(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.gsp = res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('/api/ucenter/customerAdd', this.form).then((res) => {
						if(res.data.success){
							this.$message.success(res.data.message)
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