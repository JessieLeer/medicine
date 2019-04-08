import { slider, slideritem } from 'vue-concise-slider'
import cheader from '@/components/header/index.vue'

export default {
	name: 'index',
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
			goods: [
				{
          id: '1',
          style:{
            background:'url(/static/a.jpg) no-repeat'
          }
        },
				{
          id: '2',
          style:{
            background:'url(/static/b.jpg) no-repeat'
          }
        },
				{
          id: '3',
          style:{
            background:'url(/static/c.jpg) no-repeat'
          }
         },
				{
          id: '4',
          style:{
            background:'url(/static/d.jpg) no-repeat'
          }
        },
				{
          id: '5',
          style:{
            background:'url(/static/e.jpg) no-repeat'
          }
        }
			],
			suppliers: [
				{
          id: '1',
          style:{
            background:'url(/static/a.jpg) no-repeat'
          }
        },
				{
          id: '2',
          style:{
            background:'url(/static/b.jpg) no-repeat'
          }
        },
				{
          id: '3',
          style:{
            background:'url(/static/c.jpg) no-repeat'
          }
         },
				{
          id: '4',
          style:{
            background:'url(/static/d.jpg) no-repeat'
          }
        },
				{
          id: '5',
          style:{
            background:'url(/static/e.jpg) no-repeat'
          }
        }
			],
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
			hots: [
				{
					id: '1',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '阿莫西林',
					unit: '锤子科技',
					info: '阿莫西林消炎药阿莫西林消炎药阿莫西林消炎药阿莫西林消炎药',
					deadline: '2018-09-09',
					created_at: '17分钟前' 
				},
				{
					id: '2',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '头孢氨苄',
					unit: '苹果科技',
					info: '头孢氨苄消炎药',
					deadline: '2018-09-09',
					created_at: '90分钟前' 
				},
				{
					id: '2',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '头孢氨苄',
					unit: '苹果科技',
					info: '头孢氨苄消炎药',
					deadline: '2018-09-09',
					created_at: '90分钟前' 
				},
				{
					id: '2',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '头孢氨苄',
					unit: '苹果科技',
					info: '头孢氨苄消炎药',
					deadline: '2018-09-09',
					created_at: '90分钟前' 
				},
				{
					id: '2',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '头孢氨苄',
					unit: '苹果科技',
					info: '头孢氨苄消炎药',
					deadline: '2018-09-09',
					created_at: '90分钟前' 
				},{
					id: '2',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '头孢氨苄',
					unit: '苹果科技',
					info: '头孢氨苄消炎药',
					deadline: '2018-09-09',
					created_at: '90分钟前' 
				}
				,{
					id: '2',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '头孢氨苄',
					unit: '苹果科技',
					info: '头孢氨苄消炎药',
					deadline: '2018-09-09',
					created_at: '90分钟前' 
				}
				,{
					id: '2',  
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553687174824&di=3af3e76413b2a24beaf2fad0261354bb&imgtype=0&src=http%3A%2F%2Fwww.ziboshouji.com%2Fimages%2Fup_images%2F2015615212139.png',
					title: '头孢氨苹果科技苹果科技苹果科技苹果科技苹果科技苄',
					unit: '苹果科技',
					info: '头孢氨苄消炎药',
					deadline: '2018-09-09',
					created_at: '90分钟前' 
				}
			]
		}
	},
	computed: {
	},
	components: {
		cheader,
		slider,
		slideritem
	},
	mounted() {
	},
	methods: {
    slide (data) {},
    onTap (data) {},
    onInit (data) {}
	}
}