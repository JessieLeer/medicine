<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
			<el-card class="quote box-card">
				<header slot="header" class="header clearfix f-pr">
					<img v-bind:src='company.photos ? serverUrl + company.photos : serverUrl + "/static/front/images/companylogo.png"' width='40' class='logo f-pa'>
					<b class='unit'>{{company.company}}</b>
				</header>
				<el-form label-width='100px' class='f-pr'>
				  <el-form-item label="工商注册号">
						{{company.busnumber}}
					</el-form-item>
					<el-form-item label="注册地址">
						{{company.regaddress}}
					</el-form-item>
					<el-form-item label="公司地址">
						{{company.province}}{{company.city}}{{company.region}}
					</el-form-item>
					<el-form-item label="注册地址">
						{{company.regaddress}}
					</el-form-item>
					<el-form-item label="营业执照">
						<img v-bind:src='serverUrl + "/" + company.license' width='200' />
					</el-form-item>
					<el-form-item label="gsp证书">
						<img v-bind:src='serverUrl + "/" + company.gsp' width='200' />
					</el-form-item>
					<echart v-bind:options="option" class='echart'/>
				</el-form>
			</el-card>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>