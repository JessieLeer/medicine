import echart from 'vue-echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import cheader from '@/components/header/index.vue'

export default {
	name: 'quote_qualification',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			company: {},
			option : {
				tooltip: {
					trigger: 'axis'
				},
				radar: [
				  {
						indicator: [
							{text: '询价', max: 100},
							{text: '成单', max: 100},
							{text: '热度', max: 100},
							{text: '口碑', max: 100}
						],
						center: ['50%','50%'],
						radius: 80
					}
				],
				series: [
					{
						type: 'radar',
						tooltip: {
							trigger: 'item'
						},
						itemStyle: {normal: {areaStyle: {type: 'default'}}},
						data: [
							{
								value: [60,73,85,40],
								name: '综合指数'
							}
						]
					},
				]
		  }
		}
	},
	components: {
		cheader,
		echart
	},
	created() {
		this.show()
	},
	methods: {
		show() {
			this.$http.get('/api/ucenter/viewCredentials', {params: {id: this.$route.params.id}}).then((res) => {
				this.company = res.data.data
			})
		}
	}
}