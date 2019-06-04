import cheader from '@/components/header/index.vue'

export default {
	name: 'good_show',
	data() {
	  return {
			serverUrl: this.$store.state.config.serverUrl,
			cates: [],
			presclass: [],
			form: {
				category: {},
				image: [],
				brand: {}
			}
		}	
	},
	created() {
		this.cateIndex()
		this.presclassIndex()
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
		/*-- 获取产品处方分类 --*/
		presclassIndex() {
			this.$http.get('/api/chuffl').then((res) => {
				this.presclass = res.data.data
			})
		},
		show() {
			this.$http.get('/api/inquiry/productInfo', {params: {id: this.$route.params.id, userId: this.$store.state.user.id}}).then((res) => {
				res.data.data.image = res.data.data.image.split('|')
				res.data.data.image.shift()
				this.form = res.data.data
				this.form.presclass = this.presclass.filter((item) => {
					return item.value == this.form.presclass
				})[0].label
			})
		}
	}
}