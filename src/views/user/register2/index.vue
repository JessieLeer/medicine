<template>
  <el-container>
	  <el-main>
			<el-steps v-bind:active="active" finish-status="success">
				<el-step title="填写账号信息"></el-step>
				<el-step title="填写公司信息"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<br><br>
			<el-alert title="操作成功，等待后台审核" type="success" center show-icon description="登录账号：17076467717，单位名称：阿里巴巴"></el-alert>
			<br><br>
			<el-row>
			  <el-col class='f-tac'>
				  <el-button type="primary" size='small'>返回首页</el-button>
				</el-col>
			</el-row>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>