<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-carousel indicator-position="outside">
				<el-carousel-item v-for='(item,index) in banners' v-bind:key='index' v-bind:style='`background: url(${item.image}) no-repeat center;`'>
				</el-carousel-item>
			</el-carousel>
			<br>
			<el-card class="box-card">
			  <header slot="header" class="clearfix">优选商品</header>
				<slider ref="slider" v-bind:options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <slideritem v-for="(item,index) in goods" v-bind:key="index" v-bind:style="item.style" class='f-fl' style='width: 160px; height: 160px;'></slideritem>
        </slider>
		  </el-card>
			<br>
			<el-card class="box-card">
			  <header slot="header" class="clearfix">优选供应商</header>
				<slider ref="slider" v-bind:options="options" @slide='slide' @tap='onTap' @init='onInit'>
          <slideritem v-for="(item,index) in suppliers" v-bind:key="index" v-bind:style="item.style" class='f-fl' style='width: 160px; height: 160px;'></slideritem>
        </slider>
		  </el-card>
			<br>
			<el-card class="box-card">
				<header slot="header" class="clearfix">
				  <el-row>
					  <el-col :span='12'>
						  <h4 class='card-title f-ib'>热门询价</h4>
					  </el-col>
						<el-col :span='12' class='f-tar'>
						  <el-button type="text" class='card-opera'>查看更多</el-button>	
						</el-col>
					</el-row>
				</header>
				<el-row>
				  <el-col :md='6' :sm='8' :xs='12' v-for='(item,index) in hots' v-bind:key='index' >
					  <el-form label-width="80px" class='index-hot w-100 f-ib'>
							<el-form-item label="" label-width='12px'>
								<el-button type="text" class='card-opera'>
								  <b>{{item.title}}</b>
							  </el-button>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='item.image' width='40' class='f-pa'>
								<i class='unit f-fsn'>{{item.unit}}</i>
							</el-form-item>
							<el-form-item label="物资信息">{{item.info}}</el-form-item>
							<el-form-item label="截止日期">{{item.deadline}}</el-form-item>
							<el-form-item label="发布时间">{{item.created_at}}</el-form-item>
						</el-form>
						<hr color='#e5e5e5'>
					</el-col>
				</el-row>
			</el-card>
			<br>
			<el-card class="box-card">
				<header slot="header" class="clearfix">
				  <el-row>
					  <el-col :span='12'>
						  <h4 class='card-title f-ib'>我的报价</h4>
					  </el-col>
						<el-col :span='12' class='f-tar'>
						  <el-button type="text" class='card-opera'>查看更多</el-button>	
						</el-col>
					</el-row>
				</header>
				<el-row>
				  <el-col :md='6' :sm='8' :xs='12' v-for='(item,index) in hots' v-bind:key='index' >
					  <el-form label-width="80px" class='index-hot w-100 f-ib'>
							<el-form-item label="" label-width='12px'>
								<el-button type="text" class='card-opera'>
								  <b>{{item.title}}</b>
							  </el-button>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='item.image' width='40' class='f-pa'>
								<i class='unit f-fsn'>{{item.unit}}</i>
							</el-form-item>
							<el-form-item label="物资信息">{{item.info}}</el-form-item>
							<el-form-item label="截止日期">{{item.deadline}}</el-form-item>
							<el-form-item label="发布时间">{{item.created_at}}</el-form-item>
						</el-form>
						<hr color='#e5e5e5'>
					</el-col>
				</el-row>
			</el-card>
			<br>
			<el-card class="box-card">
				<header slot="header" class="clearfix">
				  <el-row>
					  <el-col :span='12'>
						  <h4 class='card-title f-ib'>我的询价</h4>
					  </el-col>
						<el-col :span='12' class='f-tar'>
						  <el-button type="text" class='card-opera'>查看更多</el-button>	
						</el-col>
					</el-row>
				</header>
				<el-row>
				  <el-col :md='6' :sm='8' :xs='12' v-for='(item,index) in hots' v-bind:key='index' >
					  <el-form label-width="80px" class='index-hot w-100 f-ib'>
							<el-form-item label="" label-width='12px'>
								<el-button type="text" class='card-opera'>
								  <b>{{item.title}}</b>
							  </el-button>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='item.image' width='40' class='f-pa'>
								<i class='unit f-fsn'>{{item.unit}}</i>
							</el-form-item>
							<el-form-item label="物资信息">{{item.info}}</el-form-item>
							<el-form-item label="截止日期">{{item.deadline}}</el-form-item>
							<el-form-item label="发布时间">{{item.created_at}}</el-form-item>
						</el-form>
						<hr color='#e5e5e5'>
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