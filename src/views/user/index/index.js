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
			serverUrl: this.$store.state.config.serverUrl,
			ranking: '',
			cusNum: '',
			turnover: {
				total: 0,
				daily: 0,
				duration: [],
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
						data: [],
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
						  data: [],
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
						data: []
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
						  data: [],
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
				total: 0,
				daily: 0,
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
						data: [],
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
						  data: [],
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
				total: 0,
				daily: 0,
				duration: [],
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
						data: [],
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
						  data: [],
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
						data: []
					},
					yAxis: {
						type: 'value'
					},
					series: [
						{
						  data: [],
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
						data: []
					},
					series : [
						{
							name: '订单来源',
							type: 'pie',
							radius: '90%',
							center: ['50%', '50%'],
							data: [
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
				},
				reach: {
					total: 0,
					success: 0,
					tooltip : {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)",
						position: ['20%', '0%']
					},
					legend: {
						orient: 'horizontal',
						left: 'left',
						data: ['已达成','未达成']
					},
					series : [
						{
							name: '订单达成率',
							type: 'pie',
							radius: ['50%', '70%'],
              avoidLabelOverlap: false,
							label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '14',
                    fontWeight: 'bold'
                  }
                }
              },
							center: ['45%', '58%'],
							labelLine: {
                normal: {
                  show: false
                }
              },
							data: [
								{
									value: 0, 
									name: '未达成'
								},
								{
									value: 0, 
									name: '已达成'
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
				},
			},
			activeName: '',
			inquiries: [],
			inquiryTotal: 0
		}
	},
	created() {
		this.rank()
		this.info()
		this.turnoverIndex()
		this.orderIndex()
		this.inquiry(1)
		this.orderSource()
	},
	mounted() {
		this.activeName = 'first'
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
	},
	methods: {
		/*获取排名，客户数量*/
		rank() {
			this.$http.get('/api/ucenter/getRank', {params: {userId: this.user.id}}).then((res) => {
				this.ranking = `${res.data.data.rank}/${res.data.data.total}`
				this.cusNum = res.data.data.customer
			})
		},
		/*获取成交额/访问量/浏览量等信息*/
		info() {
			this.$http.get('/api/ucenter/tvor',{params: {userId: this.user.id}}).then((res) => {
				if(res.data.success) {
					let result = res.data.data
					let objs = ['turnover','views','order']
					for(let obj of objs){
						this[obj].total = result[obj].total
						this[obj].daily = result[obj].daily
						this[obj].trend.xAxis.data = result[obj].days
						this[obj].trend.series[0].data = result[obj].datas
					}		
					this.order.reach.total = result.reach.total
					this.order.reach.success = result.reach.success
					this.order.reach.series[0].data[0].value = result.reach.total - result.reach.success
					this.order.reach.series[0].data[1].value = result.reach.success
				}
			})
		},
		/*获取成交额*/
		turnoverIndex() {
			this.$http.get('/api/ucenter/turnover',{params: {userId: this.user.id, duration: this.turnover.duration}}).then((res) => {
				this.turnover.data.xAxis.data = res.data.data.month
				this.turnover.data.series[0].data = res.data.data.datas
			})
		},
		/*获取订单数*/
		orderIndex() {
			this.$http.get('/api/ucenter/orderamount', {params: {userId: this.user.id, duration: this.order.duration}}).then((res) => {
				this.order.data.xAxis.data = res.data.data.month
				this.order.data.series[0].data = res.data.data.datas
			})
		},
		/*获取我的询价*/
		inquiry(page) {
			this.$http.get('/api/ucenter/myxjp', {params: {userId: this.user.id, page: page, pageSize: 4}}).then((res) => {
				this.inquiries = res.data.data
				this.inquiryTotal = res.data.total
			})
		},
		/*获取订单来源*/
		orderSource() {
			this.$http.get('/api/ucenter/source', {params: {userId: this.user.id}}).then((res) => {
				this.order.source.legend.data = res.data.data.source
				for(let i = 0; i < res.data.data.source.length; i++){
					this.order.source.series[0].data.push({
						name: res.data.data.source[i],
						value: res.data.data.data[i]
					})
				}
			})
		}
	}
}