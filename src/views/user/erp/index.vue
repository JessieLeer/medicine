<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/erp'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form :model='form' ref='form' size='small' label-width='80px'>
					  <el-form-item label='同步资料'>
						  <el-checkbox-group v-model="form.syncs">
								<el-checkbox label="商品资料" name='syncs'></el-checkbox>
								<el-checkbox label="客户资料" name='syncs'></el-checkbox>
								<el-checkbox label="采购计划" name='syncs'></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label=''>
						  <el-button type='primary' v-on:click='submit'>提交</el-button>
						</el-form-item>
					</el-form>
				</el-main>
			</el-container>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>