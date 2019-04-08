import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/home/index/index.vue'
import Inquiry from '@/views/home/inquiry/index/index.vue'
import InquiryImport from '@/views/home/inquiry/import/index.vue'
import Shopping from '@/views/home/inquiry/shopping/index.vue'
import InquiryCreate from '@/views/home/inquiry/create/index.vue'
import QuoteEdit from '@/views/home/quote/edit/index.vue'
import QuoteShow from '@/views/home/quote/show/index.vue'
import QuoteQualification from '@/views/home/quote/qualification/index.vue'
import Order from '@/views/home/order/index/index.vue'
import OrdeResult from '@/views/home/order/result/index.vue'
import Supplier from '@/views/home/supplier/index.vue'
import Buyer from '@/views/home/buyer/index.vue'
import Register from '@/views/user/register/index.vue'
import Register1 from '@/views/user/register1/index.vue'
import Register2 from '@/views/user/register2/index.vue'
import Login from '@/views/user/login/index.vue'
import User from '@/views/user/index/index.vue'
import UserData from '@/views/user/data/index.vue'
import UserGood from '@/views/user/good/index/index.vue'
import UserGoodCreate from '@/views/user/good/create/index.vue'
import UserCustomer from '@/views/user/customer/index/index.vue'
import UserCustomerCreate from '@/views/user/customer/create/index.vue'
import UserErp from '@/views/user/erp/index.vue'
import UserMessage from '@/views/user/message/index/index.vue'
import UserMessageShow from '@/views/user/message/show/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
      path: '/',
      name: 'index',
      component: Index
    },
		{
      path: '/inquiry',
      name: 'inquiry',
      component: Inquiry
    },
		{
      path: '/inquiry/import',
      name: 'inquiry_import',
      component: InquiryImport
    },
		{
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
		{
			path: '/inquiry/create',
      name: 'inquiry_create',
      component: InquiryCreate
		},
		{
      path: '/quote/show',
      name: 'quote_show',
      component: QuoteShow
    },
		{
      path: '/quote/edit',
      name: 'quote_edit',
      component: QuoteEdit
    },
		{
      path: '/quote/qualification',
      name: 'quote_qualification',
      component: QuoteQualification
    },
		{
      path: '/order',
      name: 'order',
      component: Order
    },
		{
      path: '/order/result',
      name: 'ordeResult',
      component: OrdeResult
    },
		{
			path: '/supplier',
      name: 'supplier',
      component: Supplier
		},
		{
			path: '/buyer',
      name: 'buyer',
      component: Buyer
		},
    {
      path: '/register',
      name: 'register',
      component: Register
    },
		{
      path: '/register1',
      name: 'register1',
      component: Register1,
			beforeEnter(to, from, next){
			  if(from.name == 'register'){
					next()
				}else{
					/*next({
						path: '/register'
					})*/
					next()
				}
			}
    },
		{
      path: '/register2',
      name: 'register2',
      component: Register2,
			beforeEnter(to, from, next){
			  if(from.name == 'register1'){
					next()
				}else{
					/*next({
						path: '/register'
					})*/
					next()
				}
			}
    },
		{
			path: '/login',
      name: 'login',
      component: Login
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
		{
			path: '/user/data',
			name: 'user_data',
			component: UserData
		},
		{
			path: '/user/good',
			name: 'user_good',
			component: UserGood
		},
		{
			path: '/user/good/create',
			name: 'user_good_create',
			component: UserGoodCreate
		},
		{
			path: '/user/customer',
			name: 'user_customer',
			component: UserCustomer
		},
		{
			path: '/user/customer/create',
			name: 'user_customer_create',
			component: UserCustomerCreate
		},
		{
			path: '/user/erp',
			name: 'user_erp',
			component: UserErp
		},
		{
			path: '/user/message',
			name: 'user_message',
			component: UserMessage
		},
		{
			path: '/user/message/show',
			name: 'user_message_show',
			component: UserMessageShow
		},
  ]
})
