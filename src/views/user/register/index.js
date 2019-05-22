import cheader from '@/components/header/index.vue'

export default {
	name: 'register',
	data() {
		let confirmPass = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
		let phoneVerify = (rule, value, callback) => {
			const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的手机号'))
      }
    }
		return {
			active: 0,
			countdown: 0,
			form: {
				type: '',
        name: '',
				password: '',
				password_repeat: '',
				phone: '',
				vcode: ''
      },
			rules: {
				type: {
					required: true, 
          message: '请选择用户类型',
          trigger: 'change'
				},
				name: {
					required: true, 
          message: '请输入用户名',
          trigger: 'blur'
				},
				password: [
					{
						required: true, 
            message: '请输入密码',
            trigger: 'blur'
					},
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
				phone: { 
					validator: phoneVerify, 
					trigger: 'blur' 
				},
				vcode: { 
					required: true, 
          message: '请输入验证码',
          trigger: 'blur'
				}
			}
		}
	},
	computed: {
		phoneVerify() {
			return /^1[3|4|5|7|8][0-9]\d{8}$/.test(this.form.phone) ? true : false
		},
		btntext() {
			return this.countdown == 0 ? '获取验证码' : `${this.countdown}s后重新发送`
		},
		ableSend() {
			return this.countdown == 0 && this.phoneVerify == true ? true : false
		}
	},
	components: {
		cheader
	},
	methods: {
		go(url){
			this.$router.push(url)
		},
		sendCode() {
			this.countdown = 60
			this.$http.get('/api/user/sendCode',{params: {phone: this.form.phone, type: 'register'}}).then((res) => {
				if(res.data.success){
					let count = setInterval(() => {
						if(this.countdown > 0){
							this.countdown--
						}else{
							clearInterval(count)
						}
					},1000)
				}else{
					this.$message({
						message: res.data.message,
						type: 'error'
					})
					this.countdown = 0
				}
			})
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('/api/user/register',this.form).then((res) => {
						if(res.data.success) {
							this.$message({
								message: res.data.message,
								type: 'success'
							})
							this.$store.commit('register',this.form)
							window.setTimeout(() => {
								this.$router.push({
									name: 'register1'
								})
							},1500)
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