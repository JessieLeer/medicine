import cheader from '@/components/header/index.vue'

export default {
	name: 'inquiry',
	data() {
		return {
			search: {
				name: '',
				range: 'whole'
			},
			activeName: 'all',
			datas: [
				{
					id: '1',
					title: '阿莫西林询价',
					created_at: '2017-10-10',
					deadline: '2-19-01-01',
					remark: '请于两个工作日前确认',
					status: '报价中'
				},
				{
					id: '2',
					title: '阿莫西林询价',
					created_at: '2017-10-10',
					deadline: '2-19-01-01',
					remark: '请于两个工作日前确认',
					status: '报价中'
				},
			],
			isWayShow: false,
			fileList: []
		}
	},
	components: {
		cheader
	},
	computed: {
		shows: {
			get() {
				return this.datas.map((item) => {
					return item.id
				})
			},
			set() {
			}	
		}
	},
	created() {
	},
	methods: {
		handleChange(val) {},
		handleRemove(file, fileList) {
    },
    handlePreview(file) {
    },
    handleExceed(files, fileList) {
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
    }
	}
}