import cheader from '@/components/header/index.vue'

export default {
	name: 'good_show',
	data() {
	  return {
			serverUrl: this.$store.state.config.serverUrl,
			cates: [],
			form: {
				category: {},
				image: [],
				brand: {}
			}
		}	
	},
	created() {
		this.cateIndex()
		this.show()
	},
	components: {
		cheader
	},
	methods: {
		back() {
			this.$router.back()
		},
		cateIndex() {
			this.$http.get('/api/category').then((res) => {
				this.cates = res.data.data
			})
		},
		show() {
			this.$http.get('/api/inquiry/productInfo', {params: {id: this.$route.params.id}}).then((res) => {
				res.data.data.image = res.data.data.image.split('|')
				res.data.data.image.shift()
				this.form = res.data.data
				console.log(this.form)
			})
		}
	}
}