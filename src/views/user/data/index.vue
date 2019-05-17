<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/data'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form ref='form' :model='form' v-bind:rules='rules' size='small'>
					  <el-row :gutter='20'>
							<el-col :md='12' :sm='24'>
								<el-card>
									<header slot="header" class="clearfix">个人信息</header>
									<el-form-item prop='headpic'>
										<el-upload
											class="avatar-uploader"
											action="nourl"
											accept=".jpg,.jpeg,.png,.gif"
						          :http-request='uploadAvatar'
											v-bind:show-file-list="false">
											<img v-if="form.headpic" v-bind:src="serverUrl + form.headpic" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<i slot="tip" class="el-upload__tip">头像</i>
										</el-upload>
									</el-form-item>
									<el-form-item prop='name'>
										<el-input placeholder='用户名' v-model='form.name'></el-input>
									</el-form-item>
									<el-form-item prop='phone'>
										<el-input placeholder='手机号' v-model='form.phone'></el-input>
									</el-form-item>
									<el-form-item prop='email'>
										<el-input placeholder='邮箱' v-model='form.email' type='email'></el-input>
									</el-form-item>
									<el-form-item prop='password'>
										<el-input placeholder='密码' v-model='form.password' type='password'></el-input>
									</el-form-item>
									<el-form-item prop='password_repeat'>
										<el-input placeholder='确认密码' v-model='form.password_repeat' type='password'></el-input>
									</el-form-item>
								</el-card>
						  </el-col>
						  <el-col :md='12' :sm='24'>
								<el-card>
									<header slot="header" class="clearfix">公司信息</header>
									<el-form-item prop='logo'>
										<el-upload
											class="avatar-uploader"
											action="https://jsonplaceholder.typicode.com/posts/"
											accept=".jpg,.jpeg,.png,.gif"
											:http-request='uploadLogo'
											:show-file-list="false">
											<img v-if="form.logo" :src="serverUrl + form.logo" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<i slot="tip" class="el-upload__tip">公司logo</i>
										</el-upload>
									</el-form-item>
									<el-form-item prop='company'>
										<el-input v-model='form.company' placeholder='公司名称'></el-input>
									</el-form-item>
									<el-form-item prop='license'>
										<el-upload
											class="avatar-uploader"
											action="https://jsonplaceholder.typicode.com/posts/"
											disabled
											accept=".jpg,.jpeg,.png,.gif"
											:http-request='uploadLicense'
											:show-file-list="false">
											<img v-if="form.license" :src="serverUrl + form.license" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<i slot="tip" class="el-upload__tip">营业执照</i>
										</el-upload>
									</el-form-item>
									<el-form-item prop='gsp'>
										<el-upload
											class="avatar-uploader"
											action="https://jsonplaceholder.typicode.com/posts/"
											disabled
											accept=".jpg,.jpeg,.png,.gif"
											:http-request='uploadGsp'
											:show-file-list="false">
											<img v-if="form.gsp" :src="serverUrl + form.gsp" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<i slot="tip" class="el-upload__tip">gsp证书</i>
										</el-upload>
									</el-form-item>
									<el-form-item prop='commission' v-if='form.type == "业务员"'>
										<el-upload
											class="avatar-uploader"
											action="nourl"
											accept=".jpg,.jpeg,.png,.gif"
											:http-request='uploadCommission'
											:show-file-list="false">
											<img v-if="form.commission" :src="serverUrl + form.commission" class="avatar">
											<i v-else class="el-icon-plus avatar-uploader-icon"></i>
											<i slot="tip" class="el-upload__tip">业务员委托书</i>
										</el-upload>
									</el-form-item>
									<el-form-item prop='regnum'>
										<el-input v-model="form.regnum" placeholder='工商注册号'></el-input>
									</el-form-item>
									<el-form-item prop='regaddress'>
										<el-input v-model="form.regaddress" placeholder='注册地址'></el-input>
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