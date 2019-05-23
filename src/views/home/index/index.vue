<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-carousel indicator-position="outside" :autoplay='true' height='400px' v-bind:arrow='banners.length > 1 ? "hover" : "never"'>
			  <a v-bind:href='item.url' target='_blank' v-for='(item,index) in banners' v-bind:key='index' class='f-tac'>
				  <el-carousel-item v-bind:name='item.name'>
					  <div v-bind:style='`background: url(${serverUrl}${item.photos}) no-repeat center; height: 400px;`'></div>
					</el-carousel-item>
				</a>
			</el-carousel>
			<br>
			<el-card class="box-card">
			  <header slot="header" class="clearfix">优选商品</header>
				<el-row>
				  <el-col :md='3' :sm='6' v-for='(item,index) in goods' v-bind:key="index" class='f-tac'>
					  <a :href='`/#/good/show/${item.id}`' >
						  <section class='image-wrapper f-tac'>
							  <img v-bind:src='serverUrl + item.image' >
							</section>
							<br>
							{{item.name}}
						</a>
					</el-col>
				</el-row>
		  </el-card>
			<br>
			<el-card class="box-card">
			  <header slot="header" class="clearfix">优选供应商</header>
				<el-row>
				  <el-col :md='3' :sm='6' v-for='(item,index) in suppliers' v-bind:key="index" class='f-tac'>
					  <a :href='`/#/quote/qualification/${item.id}`' target='_blank'>
						  <section class='image-wrapper f-tac'>
							  <img v-bind:src='item.image ? serverUrl + item.image : serverUrl + "/static/front/images/companylogo.png"' >
							</section>
							<br>
							{{item.name}}
						</a>
					</el-col>
				</el-row>
		  </el-card>
			<br>
			<el-card class="box-card" v-if='user.type != "采购商" || !user.id'>
				<header slot="header" class="clearfix">
				  <el-row>
					  <el-col :span='12'>
						  <h4 class='card-title f-ib'>热门询价</h4>
					  </el-col>
						<el-col :span='12' class='f-tar'>
						  <router-link to='/inquiry/none' v-if='user.type == "供应商" || user.type == "业务员"'>
						    <el-button type="text" class='card-opera'>查看更多</el-button>
							</router-link>
						</el-col>
					</el-row>
				</header>
				<el-row>
				  <el-col :md='6' :sm='8' :xs='12' v-for='(item,index) in hots' v-bind:key='index' >
					  <el-form label-width="100px" class='index-hot w-100 f-ib'>
							<el-form-item label="" label-width='12px'>
								<el-button type="text" class='card-opera'>
								  <router-link v-bind:to='`/quote/edit/${item.id}`' v-if='user.id && user.type == "供应商" || user.id && user.type == "业务员"'>
								    <b>{{item.title}}</b>
									</router-link>
									<router-link to='/login' v-if='!user.id'>
								    <b>{{item.title}}</b>
									</router-link>
									<b v-if='user.id && user.type != "供应商" && user.type != "业务员"'>{{item.title}}</b>
							  </el-button>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='item.image ? serverUrl + item.image : serverUrl + "/static/front/images/companylogo.png"' width='40' class='f-pa'>
								<i class='unit f-fsn'>{{item.unit}}</i>
							</el-form-item>
							<el-form-item label="物资信息">{{item.info}}</el-form-item>
							<el-form-item v-bind:label="item.deadline.indexOf('-') == -1 ? '最大报价量' : '截止日期'">{{item.deadline}}</el-form-item>
							<el-form-item label="发布时间">{{item.created_at.substr(0,10)}}</el-form-item>
						</el-form>
						<hr color='#ffffff'>
					</el-col>
				</el-row>
			</el-card>
			<br>
			<el-card class="box-card" v-if='user.id'>
				<header slot="header" class="clearfix">
				  <el-row>
					  <el-col :span='12'>
						  <h4 class='card-title f-ib'>{{user.type == '采购商' ? '我的询价' : '我的报价'}}</h4>
					  </el-col>
						<el-col :span='12' class='f-tar'>
						  <router-link :to='`/inquiry/${user.id}`'>
						    <el-button type="text" class='card-opera'>查看更多</el-button>
							</router-link>
						</el-col>
					</el-row>
				</header>
				<el-row>
				  <el-col :md='6' :sm='8' :xs='12' v-for='(item,index) in orders' v-bind:key='index' >
					  <el-form label-width="100px" class='index-hot w-100 f-ib'>
							<el-form-item label="" label-width='12px'>
								<el-button v-on:click='go(`/order/${item.id}`)' type='text' size='small' v-if='user.type == "采购商" && item.status == "1"'>
								  <b>{{item.title}}</b>
								</el-button>
								<el-button v-on:click='go(`/order/result/${item.enquiryId}`)' type='text' size='small' v-if='user.type == "采购商" && item.status == "2"'>
								  <b>{{item.title}}</b>
								</el-button>
								<el-button type="text" class='card-opera' v-if='user.type == "供应商" || user.type == "业务员"' v-on:click='go(`/quote/edit/${item.id}`)' >
								  <b>{{item.title}}</b>
							  </el-button>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<i class='f-fsn'>{{item.unit}}</i>
							</el-form-item>
							<el-form-item label="物资信息">{{item.info}}</el-form-item>
							<el-form-item v-bind:label="item.deadline.indexOf('-') == -1 ? '最大报价量' : '截止日期'">{{item.deadline}}</el-form-item>
							<el-form-item label="发布时间">{{item.created_at.substr(0,10)}}</el-form-item>
						</el-form>
					</el-col>
				</el-row>
			</el-card>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>