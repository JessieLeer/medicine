import echart from 'vue-echarts'
import 'echarts/lib/chart/radar'
import 'echarts/lib/component/tooltip'
import cheader from '@/components/header/index.vue'

export default {
	name: 'quote_qualification',
	data() {
		return {
			company: {
				logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
				name: '山东东美医药有限公司',
				legal: '李朝晖',
				capital: '200万',
				created_at: '2019-09-09',
				status: '在业',
				busnumber: '370104200064356',
				credit: '91370104076155471M',
				organization: '076155471',
				taxpayer: '91370104076155471M',
				type: '有限责任公司(自然人投资或控股)',
				opendate: '2013-08-27至无固定期限',
				industry: '软件和信息技术服务业',
				actualCapital: '40万',
				approved_at: '2019-09-09',
				insured: '20',
				staffNo: '小于50人',
				registration: '济南市槐荫区市场监督管理局',
				regaddress: '山东省济南市槐荫区经四路绿地新城4地块D2号楼1311室',
				buscope: '计质平的技活开皆打小都、技活咨询、技活政务；计质平及耗材的开皆打销售；计质平系罗年成；网页设计；智由网络控制系罗设备的设计及安装；计质平网络工然；批皆、零售：电须能应、指妆应、说用应、食应、健身器材、办公用应；医疗器械、监控器材、制冷设备、温湿果监控设备的销售及维修政务。',
				license: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
				gsp: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
				complex: [60,73,85,40]
			},
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
	}
}