import cheader from '@/components/header/index.vue'

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
	components: {
		cheader
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
		submit(form,url) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					let params = url == 'loginto' ? this.form.account : this.form.phone
					this.$http.post(`/api/user/${url}`, params).then((res) => {
						if(res.data.success) {
							let user = {}
							user.id = res.data.data.id
							user.name = res.data.data.name
							user.phone = res.data.data.phone
							user.headpic = res.data.data.photo ? res.data.data.photo : 'http://img1.imgtn.bdimg.com/it/u=1990481010,1624812997&fm=26&gp=0.jpg'
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
							window.setTimeout(() => {
								this.$router.push('/')
							},1000)
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