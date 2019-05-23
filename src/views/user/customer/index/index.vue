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
							<el-button type='danger' v-on:click='del'>批量删除</el-button>
						</el-form-item>
						<el-form-item prop='name'>
							<el-input v-model="search.name" placeholder="名称"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" v-on:click='index(1)'>查询</el-button>
							<el-button v-on:click="resetForm('form')">重置</el-button>
						</el-form-item>
					</el-form>
					<el-table ref="multipleTable" v-bind:data="customers" tooltip-effect="dark" v-on:selection-change="handleSelectionChange">
						<el-table-column type="selection" width="30"></el-table-column>
						<el-table-column label='名称'>
						  <template slot-scope='scope'>
							  <router-link v-bind:to='`/quote/qualification/${scope.row.user.id}`' title='查看资质'>
								  {{scope.row.name}}
								</router-link>
							</template>
						</el-table-column>
						<el-table-column prop="company" label="公司名称" show-overflow-tooltip></el-table-column>
            <el-table-column prop="user.customerLabel.label" width='80' label="用户类型" show-overflow-tooltip></el-table-column>
						<el-table-column label='注册地址' prop='regaddress'></el-table-column>
						<el-table-column label='注册时间' prop='createDate' width='160'></el-table-column>
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