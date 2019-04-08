import cheader from '@/components/header/index.vue'

export default {
	name: 'shopping',
	data() {
		return {
			shoppings: [
				{
					id: '1',
					numbering: 'JHFZDA00000199',
					variety: '25',
					expected: '15500'
				},
				{
					id: '2',
					numbering: 'JHFZDA00000199',
					variety: '125',
					expected: '15500'
				},
			],
			detailShow: false,
			details: [
				{
					id: '1',
					name: '医用退热贴',
					manufacturer: '浙江银达生物技术有限公司',
					specification: '120mm*50mm*2贴',
					offer: '盒',
					expected: '3000'
				}
			]
		}
	},
	components: {
		cheader
	}
}