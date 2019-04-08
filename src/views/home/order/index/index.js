import cheader from '@/components/header/index.vue'

export default {
	name: 'order',
	data() {
		return {
			order: {
				id: '1',  
				image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
				title: '阿莫西林',
				unit: '锤子科技',
				deadline: '2018-09-09',
				quoteds: [
					'http://img1.imgtn.bdimg.com/it/u=1990481010,1624812997&fm=26&gp=0.jpg',
					'http://img1.imgtn.bdimg.com/it/u=1990481010,1624812997&fm=26&gp=0.jpg',
					'http://img1.imgtn.bdimg.com/it/u=1990481010,1624812997&fm=26&gp=0.jpg',
					'http://img1.imgtn.bdimg.com/it/u=1990481010,1624812997&fm=26&gp=0.jpg',
					'http://img1.imgtn.bdimg.com/it/u=1990481010,1624812997&fm=26&gp=0.jpg'
				],
				remark: '运输速度快者优先，价低者优先'
			},
			search: {
				name: ''
			},
			goods: [
				{
					id: '1',
					gid: '1',
					name: '阿莫西林胶囊',
					supplier: '山东淄博新达制药邮箱有限公司',
					single: '盒',
					ticket: '5.9',
					unticket: '4.9',
					approve: '国药准字H1234567',
					singleNumber: '400',
					expected: '100',
					supply: '100',
					offer: '无'
				},
				{
					id: '2',
					gid: '1',
					name: '阿莫西林胶囊',
					supplier: '江苏淄博新达制药邮箱有限公司',
					single: '盒',
					ticket: '5.9',
					unticket: '4.9',
					approve: '国药准字H1234567',
					singleNumber: '400',
					expected: '100',
					supply: '100',
					offer: '无'
				},
				{
					id: '3',
					gid: '1',
					name: '阿莫西林胶囊',
					supplier: '黑龙江淄博新达制药邮箱有限公司',
					single: '盒',
					ticket: '5.9',
					unticket: '4.9',
					approve: '国药准字H1234567',
					singleNumber: '400',
					expected: '100',
					supply: '100',
					offer: '无'
				},
				{
					id: '4',
					gid: '2',
					name: '感冒灵颗粒',
					supplier: '山东淄博新达制药邮箱有限公司',
					single: '盒',
					ticket: '5.9',
					unticket: '4.9',
					approve: '国药准字H1234567',
					singleNumber: '400',
					expected: '100',
					supply: '100',
					offer: '无'
				},
				{
					id: '5',
					gid: '2',
					name: '感冒灵颗粒',
					supplier: '江苏淄博新达制药邮箱有限公司',
					single: '盒',
					ticket: '5.9',
					unticket: '4.9',
					approve: '国药准字H1234567',
					singleNumber: '400',
					expected: '100',
					supply: '100',
					offer: '无'
				},
				{
					id: '6',
					gid: '2',
					name: '感冒灵颗粒',
					supplier: '黑龙江淄博新达制药邮箱有限公司',
					single: '盒',
					ticket: '5.9',
					unticket: '4.9',
					approve: '国药准字H1234567',
					singleNumber: '400',
					expected: '100',
					supply: '100',
					offer: '无'
				}
			],
			subGoods: {}
		}	
	},
	computed: {
		goodsFilter() {
			return this.goods.filter((item) => {
				return item.name.indexOf(this.search.name) != -1
			})
		}
	},
	created() {
	},
	components: {
		cheader
	},
	methods: {
		objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
				let rows = this.goods.filter((item) => {
					return item.name == row.name
				})
        if (rows.indexOf(row) == 0) {
          return {
            rowspan: rows.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
		getSummaries(param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = `已选择 ${Object.keys(this.subGoods).length} 项`
					return 
        }else{
					sums[index] = ''
					return 
				}
      })
      return sums
    },
		submit() {
			this.$router.push('/order/result')
		}
	}
}