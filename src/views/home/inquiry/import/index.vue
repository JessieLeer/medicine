<template>
  <el-container>
	  <el-main>
		  <el-alert title="导入失败" type="error" center show-icon v-bind:description='message'></el-alert>
			<p class='f-tac'>
			  <el-button type='primary' size='small'>重新导入</el-button>
			</p>	
		</el-main>
	</el-container>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>