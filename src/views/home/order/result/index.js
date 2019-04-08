import cheader from '@/components/header/index.vue'

export default {
	name: 'ordeResult',
	data() {
		return {
			orders: [
				{
					id: '1',
					supplier: '山东东美医药有限公司',
					goods: [
						{
							name: '阿莫西林胶囊',
						  specification: '0.25g*20s/盒',
							manufacturer: '山东淄博新达制药有限公司',
							ticket: '5.0',
							unticket: '4.9',
							expected: '100',
							supply: '200',
							offer: '无'
						},
						{
							name: '阿莫西林胶囊',
						  specification: '0.25g*20s/盒',
							manufacturer: '江苏淄博新达制药有限公司',
							ticket: '5.0',
							unticket: '4.9',
							expected: '100',
							supply: '200',
							offer: '无'
						},
					]
				},
				{
					id: '2',
					supplier: '山东西世界医药有限公司',
					goods: [
						{
							name: '感冒灵颗粒',
						  specification: '0.25g*20s/盒',
							manufacturer: '山东淄博新达制药有限公司',
							ticket: '5.0',
							unticket: '4.9',
							expected: '100',
							supply: '200',
							offer: '无'
						},
						{
							name: '感冒灵颗粒',
						  specification: '0.25g*20s/盒',
							manufacturer: '江苏淄博新达制药有限公司',
							ticket: '5.0',
							unticket: '4.9',
							expected: '100',
							supply: '200',
							offer: '无'
						},
					]
				}
			],
		}
	},
	computed: {
		shows: {
			get() {
				return this.orders.map((item) => {
					return item.id
				})
			},
			set() {
			}	
		},
		total() {
			let total = 0
			for(let order of this.orders){
				for(let good of order.goods){
					total += good.supply*good.ticket
				}
			}
			return total
		}
	},
	components: {
		cheader
	},
	methods: {
	}
}