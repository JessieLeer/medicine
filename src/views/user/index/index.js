import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import echart from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'

export default {
	name: 'user',
	data() {
		return {
			ranking: '8/24',
			visits: '2002',
			turnover: {
				total: 10000,
				daily: 1000,
				trend: {
					title: {
						text: '本周成交走势',
						textStyle: {
							fontSize: '12px',
							color: '#409EFF'
						}
					},
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						position: 'bottom'
					},
					yAxis: {
						type: 'value'
					},
					tooltip: {
						trigger: 'item'
					},
					series: [
						{
						  data: [820, 932, 901, 934, 1290, 1330, 1320],
						  type: 'line',
					  }
					],
					grid: {
						left: 0,
						top: 0,
						right: 0,
						bottom: 20
					}
				},
				data: {
					xAxis: {
						type: 'category',
						data: ['2019-01', '2019-01', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12']
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
						  data: [120, 200, 150, 80, 70, 110, 130, 140, 90, 100, 80, 100],
						  type: 'bar'
					  }
					],
					grid: {
						left: 40,
						top: 15,
						right: 0,
						bottom: 20
					},
					tooltip: {
						trigger: 'item'
					},
				}
			},
			views: {
				total: 10000,
				daily: 1000,
				trend: {
					title: {
						text: '本周访问走势',
						textStyle: {
							fontSize: '12px',
							color: '#409EFF'
						}
					},
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						position: 'bottom'
					},
					yAxis: {
						type: 'value'
					},
					tooltip: {
						trigger: 'item'
					},
					series: [
						{
						  data: [820, 932, 901, 934, 1290, 1330, 1320],
						  type: 'line',
					  }
					],
					grid: {
						left: 0,
						top: 0,
						right: 0,
						bottom: 20
					}
				}
			},
			order: {
				total: 10000,
				daily: 1000,
				rate: 70,
				trend: {
					title: {
						text: '本周访问走势',
						textStyle: {
							fontSize: '12px',
							color: '#409EFF'
						}
					},
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						position: 'bottom'
					},
					yAxis: {
						type: 'value'
					},
					tooltip: {
						trigger: 'item'
					},
					series: [
						{
						  data: [820, 932, 901, 934, 1290, 1330, 1320],
						  type: 'line',
					  }
					],
					grid: {
						left: 0,
						top: 0,
						right: 0,
						bottom: 20
					}
				},
				data: {
					xAxis: {
						type: 'category',
						data: ['2019-01', '2019-01', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12']
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
						  data: [120, 200, 150, 80, 70, 110, 130, 140, 90, 100, 80, 100],
						  type: 'bar'
					  }
					],
					grid: {
						left: 40,
						top: 15,
						right: 0,
						bottom: 20
					},
					tooltip: {
						trigger: 'item'
					},
				},
				source: {
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						data: ['线上','erp','导入']
					},
					series : [
						{
							name: '订单来源',
							type: 'pie',
							radius: '90%',
							center: ['50%', '50%'],
							data:[
								{
									value: 335, 
									name: '线上'
							  },
								{
									value: 310, 
									name: 'erp'
								},
								{
									value: 234, 
									name: '导入'
								}
							],
							itemStyle: {
								emphasis: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
						  }
						}
					]
				}
			},
			activeName: 'first',
			inquiries: [
				{
					id: '1',
					name: '阿莫西林颗粒',
					times: '2201',
					manufacturer: '新华制药有限公司'
				},
				{
					id: '2',
					name: '阿莫西林颗粒',
					times: '2201',
					manufacturer: '新华制药有限公司'
				},
				{
					id: '3',
					name: '阿莫西林颗粒',
					times: '2201',
					manufacturer: '新华制药有限公司'
				},
				{
					id: '4',
					name: '阿莫西林颗粒',
					times: '2201',
					manufacturer: '新华制药有限公司'
				}
			]
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		caside,
		echart
	}
}