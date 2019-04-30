import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_data',
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
		let confirmPass = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
		return {
			serverUrl: this.$store.state.config.serverUrl,
			form: this.$store.state.user,
			rules: {
				headpic: {
					required: true,
					message: '请输上传头像',
					trigger: 'change'
				},
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
				password: [
					{
						min: 6, 
            message: '密码长度不得小于6位',
            trigger: 'blur'
					},
					{
						max: 16, 
            message: '密码长度不得大于16位',
            trigger: 'blur'
					}
				],
				password_repeat: {
					validator: confirmPass, 
					trigger: 'blur' 
				},
				company: {
					required: true,
					message: '请输入公司名称',
					trigger: 'blur'
				},
				unit: {
					required: true,
					message: '请输入单位简称',
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
			}
		}
	},
	components: {
		cheader,
		caside
	},
	methods: {
		/*上传头像*/
		uploadAvatar(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.headpic = '/' + res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		/*上传营业执照*/
		uploadLicense(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.license = this.serverUrl + res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		/*上传gsp证书*/
		uploadGsp(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.gsp = this.serverUrl + res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		/*上传业务员委托书*/
		uploadCommission(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.commission = this.serverUrl + res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('/api/ucenter/update', this.form).then((res) => {
						if(res.data.success){
						  let user = {}
							user.id = res.data.data.id
							user.name = res.data.data.name
							user.phone = res.data.data.phone
							user.headpic = res.data.data.photo ? res.data.data.photo : '/static/front/images/avatar.png'
							user.type = res.data.data.customerType
							user.company = res.data.data.group.company
							user.unit = res.data.data.group.unit
							user.license = res.data.data.group.license
							user.gsp = res.data.data.group.gsp
							user.firstService = res.data.data.group.firstService
							user.commission = res.data.data.group.commission
							user.regnum = res.data.data.group.regnum
							user.regaddress = res.data.data.group.regaddress
							this.$store.commit('login',user)
							this.$message.success(res.data.message)
						}else{
							this.$message.warning(res.data.message)
						}
					})
        } else {
          return false
        }
      })
		}
	}
}