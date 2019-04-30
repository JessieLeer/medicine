<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/good'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form inline :model="search" size='small' ref='form' class='f-tar'>
					  <el-form-item class='f-fl' v-if='selectedGoods.length > 0'>
						  <el-button type="primary" size='small'>批量采购</el-button>
						</el-form-item>
						<el-form-item prop='name'>
							<el-input v-model="search.name" placeholder="商品名/生产厂家"></el-input>
						</el-form-item>
						<!--<el-form-item prop='status'>
							<el-select v-model="search.status" placeholder="状态">
							  <el-option label="待审核" value="0"></el-option>
								<el-option label="审核通过" value="1"></el-option>
								<el-option label="未通过" value="2"></el-option>
							</el-select>
						</el-form-item>-->
						<el-form-item>
						  <el-button type='primary' v-on:click="index(1)">查询</el-button>
							<el-button v-on:click="resetForm('form')">重置</el-button>
						</el-form-item>
					</el-form>
					<el-table ref="multipleTable" v-bind:data="goods" tooltip-effect="dark" v-on:selection-change="handleSelectionChange">
						<el-table-column type="selection" width="30"></el-table-column>
						<el-table-column label="商品名称" prop='name'></el-table-column>
						<el-table-column prop="manufacturer" label="生产厂家"></el-table-column>
						<el-table-column prop="specification" label="规格" width='120'></el-table-column>
						<el-table-column prop="updateDate" label="更新日期" width='160'></el-table-column>
						<el-table-column label="操作" fixed='right' width='50'>
							<template slot-scope="scope">
								<el-button type="primary" size='mini' icon="el-icon-view" circle title='查看详情' v-on:click='go(`/good/show/${scope.row.id}`)'></el-button>
							</template>
						</el-table-column>
					</el-table>
					<br>
					<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="total" v-on:current-change='index' v-bind:current-page='curpage'></el-pagination>
				</el-main>
			</el-container>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>