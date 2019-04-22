<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-table v-bind:data="shoppings">
				<el-table-column label="单据编号">
				  <template slot-scope='scope'>
					  {{scope.row.numbering ? scope.row.numbering : scope.row.id}}
					</template>
				</el-table-column>
				<el-table-column prop="variety" label="品种数" width='80'></el-table-column>
				<el-table-column prop="expected" label="需求总数量" width='100'></el-table-column>
				<el-table-column label="操作" width='160'>
				  <template slot-scope='scope'>
					  <el-button type='default' size='mini' v-on:click='show(scope.row.id)'>查看</el-button>
						<el-button v-on:click='go(`/inquiry/create/${scope.row.source}/${scope.row.id}`)' type='primary' size='mini'>选择</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-dialog title="" v-bind:visible.sync="detailShow" width='60%'>
			  <el-table v-bind:data="details">
				  <el-table-column prop="product.name" label="商品名称" width='180'></el-table-column>
					<el-table-column prop="product.manufacturer" label="生产厂家"></el-table-column>
					<el-table-column prop="product.specification" label="规格" width='160'></el-table-column>
					<el-table-column prop="product.prounit" label="单位" width='50'></el-table-column>
					<el-table-column prop="expected" label="需求数量" width='80'></el-table-column>
				</el-table>
			</el-dialog>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>