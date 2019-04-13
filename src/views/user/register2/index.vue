<template>
  <el-container>
	  <el-main>
			<el-steps v-bind:active="active" finish-status="success">
				<el-step title="填写账号信息"></el-step>
				<el-step title="填写公司信息"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<br><br>
			<el-alert title="操作成功，等待后台审核" type="success" center show-icon></el-alert>
			<br><br>
			<el-row>
			  <el-col :span='24' class='f-tac'>
				  <router-link to='/'>
				    <el-button type="primary" size='small'>返回首页</el-button>
					</router-link>
				</el-col>
			</el-row>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>