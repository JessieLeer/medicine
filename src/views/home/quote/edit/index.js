import cheader from '@/components/header/index.vue'

export default {
	name: 'quote_edit',
	data() {
		return {
			order: {
				id: '1',  
				image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
				title: '阿莫西林',
				unit: '锤子科技',
				info: '阿莫西林消炎药阿莫西林消炎药阿莫西林消炎药阿莫西林消炎药',
				deadline: '2018-09-09',
				created_at: '17分钟前',
				remark: '运输速度快者优先，价低者优先'
			},
			search: {
				name: '',
				range: 'default'
			},
			goods: [
				{
					id: '1',
					name: '阿莫西林胶囊',
					number: '2000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '2',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '3',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '4',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '5',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '6',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '7',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '8',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '9',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
				{
					id: '10',
					name: '感冒灵颗粒',
					number: '1000',
					available: '',
					ticket: '',
					unticket: '',
					remark: '',
					flag: 'default'
				},
			],
			remark: ''
		}
	},
	computed: {
		goodsFilter()  {
			return this.goods.filter((item) => {
				return item.flag == this.search.range && item.name.indexOf(this.search.name) != -1
			})
		},
	},
	components: {
		cheader
	},
}