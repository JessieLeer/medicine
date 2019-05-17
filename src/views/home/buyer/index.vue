<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/buyer'></cheader>
		</el-header>
	  <el-main>
			<el-carousel indicator-position="outside" :autoplay='false' height='400px' v-bind:arrow='banners.length > 1 ? "hover" : "never"'>
			  <a v-bind:href='item.url' target='_blank' v-for='(item,index) in banners' v-bind:key='index' class='f-tac'>
				  <el-carousel-item v-bind:name='item.name' >
					  <div v-bind:style='`background: url(${serverUrl}${item.photos}) no-repeat center; height: 400px;`'></div>
					</el-carousel-item>
				</a>
			</el-carousel>
			<el-container>
			  <el-main>
					<el-card class="box-card">
						<header slot="header" class="clearfix">
							<el-input placeholder="输入供应商名称" v-model="search.name" size='small'>
								<el-button slot="append" icon="el-icon-search" v-on:click='index(1)'></el-button>
							</el-input>
						</header>
						<el-row>
							<el-col :md='8' :sm='12' :xs='24' v-for='(item,index) in suppliers' v-bind:key='index'>
								<el-form label-width="60px" class='index-hot' label-position="left">
									<el-form-item label="" label-width='0' class='f-pr'>
										<img v-bind:src='item.image ? serverUrl + item.image : serverUrl + "/static/front/images/companylogo.png"' width='40' class='logo f-pa'>
										<el-button type='text' size='' title='查看资质' v-on:click='go(`/quote/qualification/${item.id}`)'>
											<b class='name'>{{item.name}}</b>
										</el-button>
									</el-form-item>
									<el-form-item label="订单数">{{item.orderCount}}</el-form-item>
								</el-form>
								<hr color='#e5e5e5'>
							</el-col>
						</el-row>
						<el-pagination
							layout="prev, pager, next"
							:page-size='9'
							:total="total"
							v-on:current-change='index'
							v-bind:current-page='curpage'
							class='f-tac'>
						</el-pagination>
					</el-card>
				</el-main>
				<el-aside width='260px'>
				  <h4>最新入驻</h4>
				  <vue-seamless-scroll v-bind:data="newers" class='seamless-warp'>
						<ul class='newers'>
							<li v-for='(item,index) in newers' v-bind:key='index' class='newer'>
								<img v-bind:src='serverUrl + item.logo' width='30' class='f-ib'>
								<i class='f-ib f-vat f-fsn'><b>{{item.name}}</b>于{{item.created_at.substr(0,10)}}入驻</i>
							</li>
						</ul>
					</vue-seamless-scroll>
				</el-aside>
			</el-container>	
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>