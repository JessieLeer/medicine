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
	},
	methods: {
		logout() {
			this.$store.commit('logout')
			location.reload()
		}
	}
}
