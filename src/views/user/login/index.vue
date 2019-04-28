<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-tabs v-model="activeName">
				<el-tab-pane label="账号密码登录" name="first">
				  <el-form ref="form.account" :model="form.account" v-bind:rules='rules.account' size='small'>
					  <el-form-item prop='name'>
							<el-input v-model="form.account.name" placeholder='用户名/手机号'></el-input>
						</el-form-item>
						<el-form-item prop='name'>
							<el-input v-model="form.account.password" type='password' placeholder='密码'></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" size='small' v-on:click='submit("form.account","loginto")'>登录</el-button>
							<!--<el-button type="text" size='small'>忘记密码？</el-button>-->
						</el-form-item>
					</el-form>
				</el-tab-pane>
				<el-tab-pane label="手机验证码登录" name="second">
				  <el-form ref="form.phone" :model="form.phone" v-bind:rules='rules.phone' size='small'>
					  <el-form-item prop='phone'>
							<el-input v-model="form.phone.phone" type='tel' placeholder='手机号'></el-input>
						</el-form-item>
						<el-form-item prop='vcode'>
							<el-input v-model="form.phone.vcode" type='text' placeholder='验证码' min='0'>
								<el-button slot="append" v-bind:disabled='!ableSend' v-on:click='sendCode'>{{btntext}}</el-button>
							</el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" size='small' v-on:click='submit("form.phone","logintov")'>登录</el-button>
							<el-button type="text" size='small'>忘记密码？</el-button>
						</el-form-item>
					</el-form>
				</el-tab-pane>
			</el-tabs>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>