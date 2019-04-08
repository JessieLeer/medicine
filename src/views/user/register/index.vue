<template>
  <el-container>
	  <el-main>
			<el-steps v-bind:active="active" finish-status="success">
				<el-step title="填写账号信息"></el-step>
				<el-step title="填写公司信息"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<br>
			<el-form ref="form" :model="form" v-bind:rules='rules' size='small'>
			  <el-form-item prop="type">
					<el-radio-group v-model="form.type">
						<el-radio label="供应商" value='供应商'></el-radio>
						<el-radio label="采购商" value='采购商'></el-radio>
						<el-radio label="业务员" value='业务员'></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item prop='name'>
					<el-input v-model="form.name" placeholder='用户名'></el-input>
				</el-form-item>
			  <el-form-item prop='password'>
					<el-input v-model="form.password" type='password' placeholder='密码'></el-input>
				</el-form-item>
				<el-form-item prop='password_repeat'>
					<el-input v-model="form.password_repeat" type='password' placeholder='确认密码'></el-input>
				</el-form-item>
				<el-form-item prop='phone'>
					<el-input v-model="form.phone" type='tel' placeholder='手机号'></el-input>
				</el-form-item>
				<el-form-item prop='vcode'>
				  <el-input v-model="form.vcode" type='number' placeholder='验证码' min='0'>
					  <el-button slot="append" v-bind:disabled='!ableSend' v-on:click='sendCode'>{{btntext}}</el-button>
					</el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" size='small' v-on:click='submit("form")'>下一步</el-button>
					<el-button type="text" size='small' v-on:click='go("/login")'>已有账号？</el-button>
				</el-form-item>
			</el-form>
		</el-main>
	</el-container>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>