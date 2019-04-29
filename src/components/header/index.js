export default {
	name: 'cheader',
	props: {
		activeIndex: {
			type: String,
			default: '/',
		}
	},
	data() {
		return {
			unread: 0,
			isWayShow: false,
			fileList: [],
			serverUrl: this.$store.state.config.serverUrl
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.unreadIndex()
	},
	methods: {
		go(url) {
			this.$router.push(url)
			window.location.reload()
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
		handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleExceed(files, fileList) {
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
    },
		unreadIndex() {
			if(this.user.id){
				this.$http.get('/api/unReadMessageCount', {params: {userId: this.user.id}}).then((res) => {
					this.unread = res.data.data
				})
			} 
		},
		logout() {
			this.$store.commit('logout')
			window.location.href = '/'
		}
	}
}
