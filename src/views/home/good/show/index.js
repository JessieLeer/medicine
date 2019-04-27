import cheader from '@/components/header/index.vue'

export default {
	name: 'good_show',
	data() {
	  return {
			cates: [],
			form: {
				category: {},
				image: []
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
			this.$router.go(-1)
		},
		cateIndex() {
			this.$http.get('/api/category').then((res) => {
				this.cates = res.data.data
			})
		},
		show() {
			this.$http.get('/api/inquiry/productInfo', {params: {id: this.$route.params.id}}).then((res) => {
				this.form = res.data.data
			})
		}
	}
}