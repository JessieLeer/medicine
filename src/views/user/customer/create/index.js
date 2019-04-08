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
		return {
			form: {
				
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
					required: true,
					message: '请输入邮箱',
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