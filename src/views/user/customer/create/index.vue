<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/customer/create'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form ref='form' :model='form' v-bind:rules='rules' label-width='80px' label-position="left" size='small'>
					  <el-row :gutter='20'>
							<el-col :md='12' :sm='24'>
								<el-card>
									<header slot="header" class="clearfix">个人信息</header>
									<el-form-item label='用户名' prop='name'>
										<el-input v-model='form.name'></el-input>
									</el-form-item>
									<el-form-item label='手机号' prop='phone'>
										<el-input v-model='form.phone'></el-input>
									</el-form-item>
									<el-form-item label='邮箱' prop='email'>
										<el-input v-model='form.email' type='email'></el-input>
									</el-form-item>
								</el-card>
						  </el-col>
						  <el-col :md='12' :sm='24'>
								<el-card>
									<header slot="header" class="clearfix">公司信息</header>
									<el-form-item label='公司名称' prop='company'>
										<el-input v-model='form.company'></el-input>
									</el-form-item>
									<el-form-item label='单位简称' prop='unit'>
										<el-input v-model='form.unit'></el-input>
									</el-form-item>
									<el-form-item label='营业执照' prop='license'>
										<el-upload
											class="avatar-uploader"
											action="https://jsonplaceholder.typicode.com/posts/"
											:show-file-list="false">
											<img v-if="form.license" :src="form.license" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
										</el-upload>
									</el-form-item>
									<el-form-item label='gsp证书' prop='gsp'>
										<el-upload
											class="avatar-uploader"
											action="https://jsonplaceholder.typicode.com/posts/"
											:show-file-list="false">
											<img v-if="form.gsp" :src="form.gsp" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
										</el-upload>
									</el-form-item>
								</el-card>
						  </el-col>
						</el-row>
						<br>
						<el-row>
						  <el-col :span='24' class='f-tac'>
							  <el-button type='primary' size='small' v-on:click='submit("form")'>保存</el-button>
							</el-col>
						</el-row>
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