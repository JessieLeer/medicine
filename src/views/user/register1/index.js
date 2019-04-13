export default {
	name: 'resgiter1',
	data() {
		return {
			active: 1,
			form: {
				firstService: '',
				commission: '',
				regnum: '',
				regaddress: ''
			},
			rules: {
				company: {
					required: true, 
          message: '请输入公司名称',
          trigger: 'blur'
				},
				unit: {
					required: true, 
          message: '请输入单位名称',
          trigger: 'blur'
				},
				license: {
					required: true, 
          message: '请上传营业执照',
          trigger: 'blur'
				},
				gsp: {
					required: true, 
          message: '请上传GSP证书',
          trigger: 'blur'
				}
			},
			license: [
			],
			gsp: [
			],
			commission: [
			]
		}
	},
	created() {
		this.form = Object.assign(this.form,this.$store.state.user)
	},
	methods: {
		back() {
			this.$router.back()
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
		uploadCommission(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/fileUpload',formData).then((res) => {
				if(res.data.success){
					this.form.commission = res.data.message
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('/api/user/register1', this.form).then((res) => {
						if(res.data.success) {
							window.setTimeout(() => {
								this.$router.push('/register2')
							},1000)
						}
					})
        } else {
          this.$message.warning(res.data.message)
        }
      })
		}
	}
}