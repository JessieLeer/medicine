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
			serverUrl: this.$store.state.config.serverUrl + '/',
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
				logo: {
					required: true,
					message: '请上传公司logo',
					trigger: 'change'
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
			mapJson:'../../../assets/map.json',
      province:'',
      shi1: [],
      qu1: [],
      city:'',
      block:'',
		}
	},
	components: {
		cheader,
		caside
	},
	mounted() {
	},
	created() {
		this.getCityData()
	},
	methods: {
		getCityData(){
      var that = this
      this.$http.get('https://raw.githubusercontent.com/LLJJTT/threelink/master/static/json/map.json').then(function(response){
        if (response.status==200) {
          var data = response.data
          that.province = []
          that.city = []
          that.block = []
          // 省市区数据分类
          for (var item in data) {
            if (item.match(/0000$/)) {//省
              that.province.push({id: item, value: data[item], children: []})
            } else if (item.match(/00$/)) {//市
              that.city.push({id: item, value: data[item], children: []})
            } else {//区
              that.block.push({id: item, value: data[item]})
            }
          }
          // 分类市级
          for (var index in that.province) {
            for (var index1 in that.city) {
              if (that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
                that.province[index].children.push(that.city[index1])
              }
            }
          }
          // 分类区级
          for(var item1 in that.city) {
            for(var item2 in that.block) {
              if (that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
                that.city[item1].children.push(that.block[item2])
              }
            }
          }
        }else{
          console.log(response.status)
        }}
																																																					      ).catch((error) => {console.log(typeof+ error)})
    },
    // 选省
    choseProvince(e) {
      for (var index2 in this.province) {
        if (e === this.province[index2].id) {
          this.shi1 = this.province[index2].children
          this.form.city = this.province[index2].children[0].value
          this.qu1 =this.province[index2].children[0].children
          this.form.region = this.province[index2].children[0].children[0].value
          this.E = this.qu1[0].id
        }
      }
    },
    // 选市
    choseCity(e) {
      for (var index3 in this.city) {
        if (e === this.city[index3].id) {
          this.qu1 = this.city[index3].children
          this.form.region = this.city[index3].children[0].value
          this.E = this.qu1[0].id
        }
      }
    },
    // 选区
    choseBlock(e) {
      this.E = e
    },
		
		/*上传头像*/
		uploadAvatar(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.headpic = res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		/*上传公司logo*/
		uploadLogo(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.$set(this.form,'logo',res.data.message)
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
					this.$set(this.form,'license', res.data.message)
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
					this.$set(this.form,'gsp',res.data.message)
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
					this.$set(this.form,'commission',res.data.message)
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
							console.log(res.data)
						  let user = {}
							console.log(res.data)
							user.id = res.data.data.id
							user.name = res.data.data.name
							user.phone = res.data.data.phone
							user.email = res.data.data.email
							user.headpic = res.data.data.photo ? res.data.data.photo : '/static/front/images/avatar.png'
							user.type = res.data.data.customerType
							user.province = res.data.data.group.province ? res.data.data.group.province : ''
							user.city = res.data.data.group.city ? res.data.data.group.city : ''
							user.region = res.data.data.group.region ? res.data.data.group.region : ''
							user.company = res.data.data.group.company
							user.unit = res.data.data.group.unit
							user.license = res.data.data.group.license
							user.logo = res.data.data.group.photos
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