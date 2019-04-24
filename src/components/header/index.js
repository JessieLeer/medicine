export default {
	name: 'cheader',
	props: {
		activeIndex: {
			type: String,
			default: '/'
		}
	},
	data() {
		return {
			unread: 0
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
		unreadIndex() {
			if(this.user.id){
				this.$http.get('/api/unReadMessageCount', {params: {userId: this.user.id}}).then((res) => {
					this.unread = res.data.data
				})
			} 
		},
		logout() {
			this.$store.commit('logout')
			this.$router.push('/')
		}
	}
}
