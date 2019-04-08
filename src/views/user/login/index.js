export default {
	name: 'login',
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
			activeName: 'first',
			countdown: 0,
			form: {
				account: {},
				phone: {}
			},
			rules: {
				account: {
					name: {
						required: true,
						message: '请输入用户名或手机号',
						trigger: 'blur'
					},
					password: {
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}
				},
				phone: {
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
		}
	},
	computed: {
		phoneVerify() {
			return /^1[3|4|5|7|8][0-9]\d{8}$/.test(this.form.phone.phone) ? true : false
		},
		btntext() {
			return this.countdown == 0 ? '获取验证码' : `${this.countdown}s后重新发送`
		},
		ableSend() {
			return this.countdown == 0 && this.phoneVerify == true ? true : false
		}
	},
	methods: {
		sendCode() {
			this.countdown = 60
			this.$http.get('/static/vcode.json',{phone: this.form.phone}).then((res) => {
				if(res.data.success){
					let count = setInterval(() => {
						if(this.countdown > 0){
							this.countdown--
						}else{
							clearInterval(count)
						}
					},1000)
				}else{
					this.countdown = 0
				}
			})
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					
        } else {
          return false
        }
      })
		}
	}
}