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
	methods: {
		submit() {
			console.log(this.form)
		}
	}
}