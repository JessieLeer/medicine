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
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.$store.commit('login')
	},
	methods: {
		logout() {
			this.$store.commit('logout')
			this.$router.go(0)
		}
	}
}
