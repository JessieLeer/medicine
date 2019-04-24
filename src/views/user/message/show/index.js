import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_message_show',
	data() {
		return  {
			article: {}
		}
	},
	components: {
		cheader,
		caside
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.show()
	},
	methods: {
		back() {
			this.$router.back()
		},
		show() {
			this.$http.get('/api/getMessageById', {params: {id: this.$route.params.id, userId: this.user.id}}).then((res) => {
				this.article = res.data.data
			})
		}
	}
}