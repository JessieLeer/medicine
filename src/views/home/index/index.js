import { slider, slideritem } from 'vue-concise-slider'
import cheader from '@/components/header/index.vue'

export default {
	name: 'index',
	data() {
		return {
			serverUrl: this.$store.state.config.serverUrl,
			banners: [],
			goods: [],
			suppliers: [],
			options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: false,
        loop: true,
        direction: 'horizontal',
        loopedSlides: 0,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 300
      },
			hots: [],
			orders: []
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		slider,
		slideritem
	},
	created() {
		this.bannerIndex()
		this.optimalIndex()
		this.supplierIndex()
		this.hotIndex()
		this.orderIndex()
	},
	mounted() {
		
	},
	methods: {
    slide (data) {},
    onTap (data) {},
    onInit (data) {},
		go(url) {
			this.$router.push(url)
		},
		// 获取banner
		bannerIndex() {
			this.$http.get('/api/banner').then((res) => {
				this.banners = res.data.data
			})
		},
		// 获取优选商品
		optimalIndex() {
			this.$http.get('/api/optimal').then((res) => {
				for(let item of res.data.data) {
					this.goods.push({
						id: item.id,
						style: {
							background: `url(${item.image}) no-repeat`
						}
					})
				}
			})
		},
		// 获取优选供应商
		supplierIndex() {
			this.$http.get('/api/supplier').then((res) => {
				for(let item of res.data.data) {
					item.image == '' ? item.image = '/static/a.jpg' : item.image = item.image
					this.suppliers.push({
						id: item.id,
						style: {
							background: `url(${item.image}) no-repeat`
						}
					})
				}
			})
		},
		// 获取热门询价
		hotIndex() {
			this.$http.get('/api/hot', {params: {userId: this.user.id}}).then((res) => {
				this.hots = res.data.data
			})
		},
		// 获取我的报价或者询价
		orderIndex() {
			if(this.user) {
				let url = this.user.type == '供应商' ? '/api/myquate' : '/api/myinquiry'
				this.$http.get(url, {params: {userId: this.user.id}}).then((res) => {
					this.orders = res.data.data
				})
			}
		}
	}
}




