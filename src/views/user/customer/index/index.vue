<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/customer'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form inline :model="search" size='small' ref='form' class='f-tar'>
					  <el-form-item class='f-fl' v-if='selectedCustomers.length > 0'>
							<el-button type='danger'>批量删除</el-button>
						</el-form-item>
						<el-form-item prop='name'>
							<el-input v-model="search.name" placeholder="名称"></el-input>
						</el-form-item>
						<el-form-item prop='status'>
							<el-select v-model="search.status" placeholder="状态">
								<el-option label="正常" value="正常"></el-option>
								<el-option label="冻结" value="冻结"></el-option>
								<el-option label="未激活" value="未激活"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
							<el-button type="primary">查询</el-button>
							<el-button v-on:click="resetForm('form')">重置</el-button>
						</el-form-item>
					</el-form>
					<el-table ref="multipleTable" v-bind:data="filterCustomers" tooltip-effect="dark" v-on:selection-change="handleSelectionChange">
						<el-table-column type="selection" width="30"></el-table-column>
						<el-table-column label='名称'>
						  <template slot-scope='scope'>
							  <router-link to='/' title='查看资质'>
								  {{scope.row.name}}
								</router-link>
							</template>
						</el-table-column>
						<el-table-column label='描述' prop='description'></el-table-column>
						<el-table-column label='状态' prop='status' width='80'></el-table-column>
						<el-table-column label='注册日期' prop='created_at' width='160'></el-table-column>
					</el-table>	
					<br>
					<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="50"></el-pagination>
				</el-main>
			</el-container>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>