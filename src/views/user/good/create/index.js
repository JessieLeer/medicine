import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user_good_create',
	data() {
	  return {
			form: {
				
			},
			cates: [
				{
					value: 'food',
					label: '食物',
					children: [
						{
							value: 'vegetable',
							label: '蔬菜',
							children: [
								{
									value: 'cabbage',
									label: '白菜'
								},
								{
									value: 'radish',
									label: '萝卜'
								},
								{
									value: 'eggplant',
									label: '茄子'
								},
							]
						},
						{
						  value: 'fruit',
							label: '水果',
							children: [
								{
									value: 'orange',
									label: '橘子'
								},
								{
									value: 'banana',
									label: '香蕉'
								},
								{
									value: 'watermelon',
									label: '西瓜'
								},
							]
						}
					]
				},
				{
					value: 'cloth',
					label: '服装',
					children: [
						{
							value: 'mens',
							label: '男装',
							children: [
								{
									value: 'shirt',
									label: 'T桖'
								},
								{
									value: 'jacket',
									label: '夹克'
								}
							]
						},
						{
							value: 'womens',
							label: '女装',
							children: [
								{
									value: 'dress',
									label: '连衣裙'
								},
								{
									value: 'leggings',
									label: '打底裤'
								}
							]
						}
					]
				}
			],
			editFormVisiable: false,
			form: {
				
			},
			rules: {
				name: {
					required: true,
					message: '请输入产品名称',
					trigger: 'blur'
				},
				brand: {
					required: true,
					message: '请选择品牌',
					trigger: 'change'
				},
				cates: {
					required: true,
					message: '请选择产品分类',
					trigger: 'change'
				},
				code: {
					required: true,
					message: '请输入助记码',
					trigger: 'blur'
				},
				numbering: {
					required: true,
					message: '请输入产品编码',
					trigger: 'blur'
				},
				recnumber: {
					required: true,
					message: '请输入批准文号',
					trigger: 'blur'
				},
				manufacturer: {
					required: true,
					message: '请输入生产厂家',
					trigger: 'blur'
				},
				specification: {
					required: true,
					message: '请输入产品规格',
					trigger: 'blur'
				},
				presclass: {
					required: true,
					message: '请选择处方分类',
					trigger: 'change'
				},
				formulation: {
					required: true,
					message: '请输入剂型',
					trigger: 'blur'
				},
				prounit: {
					required: true,
					message: '请输入产品单位',
					trigger: 'blur'
				},
				erp: {
					required: true,
					message: '请输入erp编码',
					trigger: 'blur'
				}
			},
		}	
	},
	components: {
		cheader,
		caside
	},
	methods: {
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					console.log('right')
        } else {
					console.log('error')
          return false
        }
      })
		}
	}
}