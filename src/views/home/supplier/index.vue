<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/supplier'></cheader>
		</el-header>
	  <el-main>
		  <el-carousel indicator-position="outside">
				<el-carousel-item v-for='(item,index) in banners' v-bind:key='index' v-bind:style='`background: url(${item.image}) no-repeat center;`'>
				</el-carousel-item>
			</el-carousel>
			<el-container>
			  <el-main>
					<el-card class="box-card">
						<header slot="header" class="clearfix">
							<el-input placeholder="输入供应商名称" v-model="search.name" size='small'>
								<el-button slot="append" icon="el-icon-search"></el-button>
							</el-input>
						</header>
						<el-row>
							<el-col :md='8' :sm='12' :xs='24' v-for='(item,index) in suppliers' v-bind:key='index' v-if='item.name.indexOf(search.name) != -1'>
								<el-form label-width="60px" class='index-hot' label-position="left">
									<el-form-item label="" label-width='0' class='f-pr'>
										<router-link to='/' title='查看资质'>
											<img v-bind:src='item.logo' width='40' class='logo f-pa'>
											<el-button type='text' size=''>
												<b class='name'>{{item.name}}</b>
											</el-button>
										</router-link>
									</el-form-item>
									<el-form-item label="订单数">{{item.orderNum}}</el-form-item>
									<el-form-item label="评分">
										<el-rate v-model='item.evalution*5' disabled text-color="#ff9900"></el-rate>
									</el-form-item>
								</el-form>
								<hr color='#e5e5e5'>
							</el-col>
						</el-row>
						<el-pagination
							layout="prev, pager, next"
							:total="50"
							class='f-tac'>
						</el-pagination>
					</el-card>
				</el-main>
				<el-aside width='260px'>
				  <h4>最新入驻</h4>
				  <vue-seamless-scroll v-bind:data="newers" class='seamless-warp'>
						<ul class='newers'>
							<li v-for='(item,index) in newers' v-bind:key='index' class='newer'>
								<img v-bind:src='item.logo' width='30' class='f-ib'>
								<i class='f-ib f-vat f-fsn'><b>{{item.name}}</b>与{{item.created_at}}入驻</i>
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