<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-card>
						<el-row>
							<el-col :md='12' :sm='12'>
								<img v-bind:src='serverUrl + user.headpic' width='30' class='headpic f-fl'>
								<i class='name f-fsn f-fl'>Hello<b> {{user.name}}</b>！<i class='f-fs1 f-fsn'>({{user.type}})</i></i>
							</el-col>
							<el-col :md='12' :sm='12' class='f-tar'>
							  <el-form inline class='form-nomar'>
								  <el-form-item label='排名'>{{ranking}}</el-form-item>
									<el-form-item label='客户数量'>{{cusNum}}</el-form-item>
								</el-form>
							</el-col>
						</el-row>
					</el-card>
					<br>
					<el-row :gutter='20'>
					  <el-col :md='6' :sm='12' :xs='24'>
						  <el-card class='user-card'>
							  <el-form slot="header" class='info-form f-fs2'>
								  <el-form-item label='总成交额'>
									  <b>{{turnover.total}}</b>
									</el-form-item>
									<el-form-item label='日均成交'>
									  <b>{{turnover.daily}}</b>
									</el-form-item>
								</el-form>
								<echart v-bind:options="turnover.trend" class='w-100 intro-canvas'/>
							</el-card>
						</el-col>
						<el-col :md='6' :sm='12' :xs='24'>
						  <el-card class='user-card'>
							  <el-form slot="header" class='info-form f-fs2'>
								  <el-form-item label='总访问量'>
									  <b>{{views.total}}</b>
									</el-form-item>
									<el-form-item label='日均访问'>
									  <b>{{views.daily}}</b>
									</el-form-item>
								</el-form>
								<echart v-bind:options="views.trend" class='w-100 intro-canvas'/>
							</el-card>
						</el-col>
						<el-col :md='6' :sm='12' :xs='24'>
						  <el-card class='user-card'>
							  <el-form slot="header" class='info-form f-fs2'>
								  <el-form-item label='总成单量'>
									  <b>{{order.total}}</b>
									</el-form-item>
									<el-form-item label='日均成单'>
									  <b>{{order.daily}}</b>
									</el-form-item>
								</el-form>
								<echart v-bind:options="order.trend" class='w-100 intro-canvas'/>
							</el-card>
						</el-col>
						<el-col :md='6' :sm='12' :xs='24'>
						  <el-card class='user-card'>
							  <el-form slot="header" class='info-form f-fs2'>
								  <el-form-item label='已达成订单'>
									  <b>{{order.reach.success}}</b>
									</el-form-item>
								  <el-form-item label='订单达成率'>
									  <b>{{Math.round(order.reach.success/order.reach.total*100)}}%</b>
									</el-form-item>
								</el-form>
								<echart v-bind:options="order.reach" class='w-100 intro-canvas'/>
							</el-card>	
						</el-col>
					</el-row>
					<el-tabs v-model="activeName">
						<el-tab-pane label="成交额" name="first" lazy>
						  <el-row>
							  <el-col :span='24' class='f-tar'>
								  <el-date-picker size='small' v-model="turnover.duration" type="monthrange" range-separator="-" start-placeholder="开始月份"end-placeholder="结束月份" value-format="yyyy-MM" v-on:change='turnoverIndex'></el-date-picker>
								</el-col>
							</el-row>
						  <echart v-bind:options="turnover.data" class='w-100 intro-canvas'/>
						</el-tab-pane>
						<el-tab-pane label="订单数" name="second" lazy>
						  <el-row>
							  <el-col :span='24' class='f-tar'>
								  <el-date-picker size='small' v-model="order.duration" type="monthrange" range-separator="-" start-placeholder="开始月份"end-placeholder="结束月份" value-format="yyyy-MM" v-on:change='orderIndex'></el-date-picker>
								</el-col>
							</el-row>
						  <echart v-bind:options="order.data" class='w-100 intro-canvas'/>
						</el-tab-pane>
					</el-tabs>
					<br>
					<el-row :gutter='20'>
					  <el-col :md='12' :sm='12' :xs='24'>
						  <el-card class="user-inquiry">
							  <header slot='header'>我的询价</header>
								<el-table v-bind:data="inquiries">
									<el-table-column prop='name' label='产品名称' show-overflow-tooltip></el-table-column>
									<el-table-column prop='times' label='询价次数' width='80'></el-table-column>
									<el-table-column prop='manufacturer' label='生产厂家' show-overflow-tooltip></el-table-column>
								</el-table>	
								<el-pagination class='mt-10 f-tac' layout="prev, pager, next" v-bind:total="inquiryTotal" v-on:current-change='inquiry'></el-pagination>
							</el-card>
						</el-col>
						<el-col :md='12' :sm='12' :xs='24'>
						  <el-card>
							  <header slot='header'>订单来源</header>
								<echart v-bind:options="order.source" class='w-100 canvas-pie intro-canvas'/>
							</el-card>	
						</el-col>
					</el-row>
				</el-main>
			</el-container>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>