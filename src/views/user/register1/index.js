export default {
	name: 'resgiter1',
	data() {
		return {
			active: 1,
			form: {
				
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
          trigger: 'change'
				},
				gsp: {
					required: true, 
          message: '请上传GSP证书',
          trigger: 'change'
				}
			},
			license: [
				{
					name: 'food.jpeg', 
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}
			],
			gsp: [
				{
					name: 'food.jpeg', 
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}
			],
			commission: [
				{
					name: 'food.jpeg', 
					url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
				}
			]
		}
	},
	created() {
		this.form = {...this.$route.params}
	},
	methods: {
		back() {
			this.$router.back()
		},
		handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
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