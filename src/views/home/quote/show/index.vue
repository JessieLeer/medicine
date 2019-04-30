<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-card class="box-card">
			  <header slot='header'>订单信息</header>
				<el-row>
				  <el-col v-bind:span='18'>
					  <el-form label-width="80px">
							<el-form-item label="" label-width='12px'>
								<b>{{order.title}}</b>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='order.image' width='40' class='f-pa'>
								<router-link to='/quote/qualification' title='查看资质'>
									<el-button type="text" class='card-opera'>
										<i class='unit f-fsn'>{{order.unit}}</i>
									</el-button>	
								</router-link>
							</el-form-item>
							<el-form-item label="物资信息">{{order.info}}</el-form-item>
							<el-form-item v-bind:label="order.endValue.indexOf('-') == -1 ? '最大报价量' : '截止日期'">{{order.endValue}}</el-form-item>
							<el-form-item label="" label-width='12px' class='remark'>{{order.remark}}</el-form-item>
						</el-form>
					</el-col>
					<el-col v-bind:span='6'>
					  <el-steps v-bind:active="3" finish-status="success">
						  <el-step title="已询价"></el-step>
							<el-step title="报价中"></el-step>
							<el-step title="已定单"></el-step>
						</el-steps>
					</el-col>
				</el-row>
			</el-card>
			<br>
		  <el-card class="box-card">
			  <header slot='header'>
				  <el-row>
					  <el-col :span='4'>物资列表</el-col>
						<el-col :span='20'>
						  <el-input placeholder="输入商品名称" v-model="search.name" class="input-quote-select" size='small'>
								<el-select v-model="search.range" slot="prepend" placeholder="请选择">
									<el-option label="全部" value="all"></el-option>
									<el-option label="已忽略" value="ignored"></el-option>
								</el-select>
							</el-input>
						</el-col>
					</el-row>
				</header>
				<el-table v-bind:data="goods.filter((item) => {return item.name.indexOf(search.name) != -1})" class='w-100'>
					<el-table-column prop="name" label="商品名称"></el-table-column>
					<el-table-column prop="number" label="需求数量" width="120"></el-table-column>
					<el-table-column prop="ticket" label="带票报价" width='140'>
					</el-table-column>
					<el-table-column prop="unticket" label="不含票报价" width='140'>
					</el-table-column>
					<el-table-column prop="remark" label="备注" width='200'>
					</el-table-column>
				</el-table>
			</el-card>
		</el-main>
	</el-container>
</template>	

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>
