import cheader from '@/components/header/index.vue'

export default {
	name: 'inquiry',
	data() {
		return {
			search: {
				name: '',
				range: 'whole',
				quoted: false
			},
			activeName: 'all',
			datas: [],
			isWayShow: false,
			fileList: []
		}
	},
	components: {
		cheader
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		shows: {
			get() {
				return this.datas.map((item) => {
					return item.id
				})
			},
			set() {
			}	
		}
	},
	created() {
		this.index(1)
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index(page) {
			this.$http.get('/api/inquiry', {params: {userId: this.user.id, keywords: this.search.name, quoted: this.search.quoted, aimType: this.search.range, page: page, pageSize: 10}}).then((res) => {
				this.datas = res.data.data ? res.data.data : []
			})
		},
		uploadTemplate(param) {
			let formData = new FormData()
			formData.append('file',param.file)
			this.$http.post('/api/excelUpload',formData).then((res) => {
				if(res.data.success){
					this.$router.push(`/inquiry/create/excel/${res.data.data}`)
				}else{
					this.$message.warning(res.data.message)
				}
			})
		},
		handleChange(val) {},
		handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleExceed(files, fileList) {
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
    }
	}
}