import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_erp',
	data() {
		return {
			form: {
				syncs: []
			}
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
		show() {
			this.$http.get('/api/ucenter/getErpSetting',{params: {userId: this.user.id}}).then((res) => {
				if(res.data.data) {
					this.form.syncs = res.data.data
				}
			})
		},
		submit() {
			this.$http.post('/api/ucenter/saveErpSetting', {userId: this.user.id, syncs: this.form.syncs}).then((res) => {
				console.log(res)
				if(res.data.success) {
					this.$message.success('保存成功')
				}
			})
		}
	}
}