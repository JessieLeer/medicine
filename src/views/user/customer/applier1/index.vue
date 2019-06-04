<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
				<el-aside width='200px'>
					<caside active='/user/customer/applier1'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form v-bind:inline="true" size='small'>
						<el-form-item>
							<el-input placeholder="输入商户名/公司名称" v-model="search.name" class="input-with-select">
								<el-button slot="append" icon="el-icon-search" v-on:click='index(1)'></el-button>
							</el-input>
						</el-form-item>
					</el-form>
				  <el-table v-bind:data="suppliers" class='goods-table' v-bind:empty-text='emptyText'>
						<el-table-column prop="name" label="用户名" show-overflow-tooltip></el-table-column>
						<el-table-column prop="company" label="公司名称" show-overflow-tooltip></el-table-column>
						<el-table-column prop="user.customerLabel.label" width='80' label="用户类型" show-overflow-tooltip></el-table-column>
						<el-table-column prop="status" width='80' label="状态" show-overflow-tooltip>
						  <template slot-scope='scope'>
								{{scope.row.status == '0' ? '已同意' : scope.row.status == '1' ? '已驳回' : '待审核'}}
							</template>
						</el-table-column>
					</el-table>
					<br>
					<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="total" v-bind:current-page='curpage' v-on:current-change='index'></el-pagination>
				</el-main>
			</el-container>
		</el-main>
	</el-container>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>