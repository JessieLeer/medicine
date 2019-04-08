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
					  <el-form label-width="100px" label-position="left">
							<el-form-item label="" label-width='0'>
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
							<el-form-item label="截止日期">{{order.deadline}}</el-form-item>
							<el-form-item label="已报价单位">
							  <img v-for='(item,index) in order.quoteds' v-bind:src='item' width='20' class='quoter'>
							</el-form-item>
							<el-form-item label="" label-width='0' class='remark'>{{order.remark}}</el-form-item>
						</el-form>
					</el-col>
					<el-col v-bind:span='6'>
					  <el-steps v-bind:active="2" finish-status="success">
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
							</el-input>
						</el-col>
					</el-row>
				</header>
				<el-table v-bind:data="goodsFilter" class='w-100' max-height="500"  v-bind:span-method="objectSpanMethod" show-summary v-bind:summary-method="getSummaries">
					<el-table-column prop="name" label="商品名称" width='200'></el-table-column>
					<el-table-column width="50" label='选择'>
					  <template slot-scope='scope'>
						  <el-radio v-model="subGoods[scope.row.gid]" v-bind:label="scope.row.id">&nbsp;</el-radio>
						</template>
					</el-table-column>
					<el-table-column prop="supplier" label="供应商" width="300"></el-table-column>
					<el-table-column prop="single" label="单位" width='50'></el-table-column>
					<el-table-column prop="ticket" label="含票报价" width='80'></el-table-column>
					<el-table-column prop="unticket" label="不含票报价" width='100'>
					</el-table-column>
					<el-table-column prop="approve" label="批准文号" width=''></el-table-column>
					<el-table-column prop="singleNumber" label="件包装" width='65'></el-table-column>
					<el-table-column prop="expected" label="计划采购量" width='100'></el-table-column>
					<el-table-column prop="supply" label="可供应数量" width='100'></el-table-column>
					<el-table-column prop="offer" label="优惠政策" width='100'></el-table-column>
				</el-table>
				<br>
				<el-form size='small' class='f-tac'>
					<el-form-item>
						<el-button type="primary" v-on:click='submit'>生成采购计划</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>