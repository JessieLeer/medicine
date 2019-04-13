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
				  <el-form ref='form' :model='form' v-bind:rules='rules' size='small'>
					  <el-row :gutter='20'>
							<el-col :md='12' :sm='24'>
								<el-card>
									<header slot="header" class="clearfix">个人信息</header>
									<el-form-item prop='name'>
										<el-input v-model='form.name' placeholder='用户名'></el-input>
									</el-form-item>
									<el-form-item prop='phone'>
										<el-input v-model='form.phone' placeholder='手机号'></el-input>
									</el-form-item>
									<el-form-item prop='email'>
										<el-input v-model='form.email' type='email' placeholder='邮箱'></el-input>
									</el-form-item>
								</el-card>
						  </el-col>
						  <el-col :md='12' :sm='24'>
								<el-card>
									<header slot="header" class="clearfix">公司信息</header>
									<el-form-item prop='company'>
										<el-input v-model='form.company' placeholder='公司名称'></el-input>
									</el-form-item>
									<el-form-item prop='unit'>
										<el-input v-model='form.unit' placeholder='单位简称'></el-input>
									</el-form-item>
									<el-form-item prop='license'>
										<el-upload
											class="upload-demo"
											:http-request='uploadLicense'
											action='nourl'
											:on-preview="handlePreview"
											:on-remove="handleRemove"
											:before-remove="beforeRemove"
											:limit="1"
											:on-exceed="handleExceed"
											:file-list="license">
											<el-button size="small" type="primary">上传营业执照</el-button>
											&nbsp;
											<i slot="tip" class="el-upload__tip">只能上传jpg/png文件</i>
										</el-upload>
									</el-form-item>
									<el-form-item prop='gsp'>
										<el-upload
											class="upload-demo"
											action="nourl"
											:http-request='uploadGsp'
											:on-preview="handlePreview"
											:on-remove="handleRemove"
											:before-remove="beforeRemove"
											:limit="1"
											:on-exceed="handleExceed"
											:file-list="gsp">
											<el-button size="small" type="primary">上传GSP证书</el-button>
											&nbsp;
											<i slot="tip" class="el-upload__tip">只能上传jpg/png文件</i>
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