<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-alert title="成功生成报价单" type="success" center show-icon v-bind:description='`总共 ${orders.length} 项,总价${total}元`'></el-alert>
			<br>
			<el-collapse v-model="shows">
  			<el-collapse-item v-for='(item,index) in orders' v-bind:title="item.supplier" v-bind:name="item.id" v-bind:key='index'>
				  <el-table v-bind:data="item.goods" show-summary>
						<el-table-column prop="name" label="商品名称" width=""></el-table-column>
						<el-table-column prop="specification" label="规格"></el-table-column>
						<el-table-column prop="manufacturer" label="生产厂家"></el-table-column>
						<el-table-column prop="ticket" label="含票报价"></el-table-column>
						<el-table-column prop="unticket" label="不含票报价"></el-table-column>
						<el-table-column prop="expected" label="计划采购量"></el-table-column>
						<el-table-column prop="supply" label="可供应量"></el-table-column>
						<el-table-column prop="offer" label="优惠政策"></el-table-column>
					</el-table>
				</el-collapse-item>
			</el-collapse>	
			<br>
			<el-row>
			  <el-col :span='24' class='f-tac'>
				  <el-button type='success' size='small'>导出Excel</el-button>
					<el-button type='primary' size='small'>再询一单</el-button>
					<el-button type='default' size='small'>返回列表</el-button>
				</el-col>
			</el-row>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>