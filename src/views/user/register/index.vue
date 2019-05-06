<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main class='main'>
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
				<el-form-item>
				  <i v-if='form.type == "供应商"'>适合药品生产企业、厂家等，提供药品招商、代理及货品供应</i>
					<i v-if='form.type == "采购商"'>仅批发采购账户，适合药品批发/零售、医疗机构、计划生育服务机构、医疗科研和教学 科研、军队的医疗机构等</i>
					<i v-if='form.type == "业务员"'>供应商管理下授权的业务员，拥有供应商账号类型的功能</i>
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
				  <el-input v-model="form.vcode" type='text' placeholder='验证码' min='0'>
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