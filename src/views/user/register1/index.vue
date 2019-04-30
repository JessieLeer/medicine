<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
			<el-steps v-bind:active="active" finish-status="success">
				<el-step title="填写账号信息"></el-step>
				<el-step title="填写公司信息"></el-step>
				<el-step title="完成"></el-step>
			</el-steps>
			<br>
			<el-form ref="form" :model="form" v-bind:rules='rules' size='small'>
			  <el-form-item prop='company'>
					<el-input v-model="form.company" placeholder='公司全称'></el-input>
				</el-form-item>
				<el-form-item prop='unit' v-if='form.type != "业务员"'>
					<el-input v-model="form.unit" placeholder='单位名称'></el-input>
				</el-form-item>
				<el-form-item prop='license' v-if='form.type != "业务员"'>
					<el-upload
						class="upload-demo"
						v-model='form.license'
						:http-request='uploadLicense'
						action='nourl'
						accept=".jpg,.jpeg,.png,.gif"
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
				<el-form-item prop='gsp' v-if='form.type != "业务员"'>
					<el-upload
						class="upload-demo"
						action="nourl"
						accept=".jpg,.jpeg,.png,.gif"
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
				<el-form-item prop='firstService' v-if='form.type != "采购商"'>
					<el-input v-model="form.firstService" placeholder='首次服务采购商'></el-input>
				</el-form-item>
				<el-form-item prop='commission' v-if='form.type == "业务员"'>
					<el-upload
						class="upload-demo"
						action="nourl"
						accept=".jpg,.jpeg,.png,.gif"
						:http-request='uploadCommission'
						:on-preview="handlePreview"
						:on-remove="handleRemove"
						:before-remove="beforeRemove"
						:limit="1"
						:on-exceed="handleExceed"
						:file-list="commission">
						<el-button size="small" type="primary">业务员委托书</el-button>
						&nbsp;
						<i slot="tip" class="el-upload__tip">只能上传jpg/png文件</i>
					</el-upload>
				</el-form-item>
				<el-form-item prop='regnum' v-if='form.type != "业务员"'>
					<el-input v-model="form.regnum" placeholder='工商注册号'></el-input>
				</el-form-item>
				<el-form-item prop='regaddress' v-if='form.type != "业务员"'>
					<el-input v-model="form.regaddress" placeholder='注册地址'></el-input>
				</el-form-item>
				<el-form-item>
				  <el-button type="default" size='small' v-on:click='back'>上一步</el-button>
					<el-button type="primary" size='small' v-on:click='submit("form")'>提交</el-button>
				</el-form-item>
			</el-form>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>