import cheader from '@/components/header/index.vue'
import vueSeamlessScroll from 'vue-seamless-scroll'

export default {
	name: 'buyer',
	data() {
		return {
			banners: [
				{
					image: '/static/banner0.jpg'
				},
				{
					image: '/static/banner1.jpg'
				},
			],
			search: {
				name: ''
			},
			suppliers: [
				{
					id: '1',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '锤子科技',
					orderNum: '200',
					evalution: '0.9'
				},
				{
					id: '2',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '苹果科技苹果科技苹果科技苹果科技苹果科技',
					orderNum: '200',
					evalution: '0.5'
				},
				{
					id: '3',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '三星科技',
					orderNum: '200',
					evalution: '0.7'
				},
				{
					id: '4',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '魅族科技',
					orderNum: '200',
					evalution: '0.7'
				}
			],
			newers: [
				{
					id: '1',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '东兴数码',
					created_at: '2019-09-18'
				},
				{
					id: '2',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '敦煌科技',
					created_at: '2019-09-18'
				},
				{
					id: '3',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '苹果科技',
					created_at: '2019-09-18'
				},
				{
					id: '4',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '三星科技',
					created_at: '2019-09-18'
				},
				{
					id: '5',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '诺基亚科技',
					created_at: '2019-09-18'
				},
				{
					id: '6',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '阿尔卑斯科技',
					created_at: '2019-09-18'
				},
				{
					id: '7',
					logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					name: '蚂蚁花呗',
					created_at: '2019-09-18'
				},
			]
		}
	},
	components: {
		cheader,
		vueSeamlessScroll
	},
}