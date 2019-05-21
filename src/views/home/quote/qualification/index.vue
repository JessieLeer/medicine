<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-form>
			  <el-row>
				  <el-col :span='24'>
					  <el-form-item label="" class='f-pr'>
							<img v-bind:src='company.photos ? serverUrl + company.photos : serverUrl + "/static/front/images/companylogo.png"' width='40' class='f-pa'>
							<b class='unit'>{{company.company}}</b>
						</el-form-item>
					</el-col>
				  <el-col :md='8' :sm='12'>
					  <el-form-item label="法人">
							{{company.legal}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="注册资本">
							{{company.capital}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="成立日期">
							{{company.createAt}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="经营状态">
							{{company.openStatus}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="工商注册号">
							{{company.busnumber}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="统一社会信用代码">
							{{company.credit}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="组织机构代码">
							{{company.organization}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="纳税人识别号">
							{{company.taxpayer}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="公司类型">
							{{company.genre}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="营业期限">
							{{company.opendate}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="行业">
							{{company.industry}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="实缴资本">
							{{company.actualCapital}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="核准日期">
							{{company.approvedAt}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="参保人数">
							{{company.insured}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="人员规模">
							{{company.staffNo}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="登记机关">
							{{company.registration}}
						</el-form-item>
					</el-col>
					<el-col :md='16' :sm='24'>
					  <el-form-item label="注册地址">
							{{company.regaddress}}
						</el-form-item>
					</el-col>
					<el-col :span='24'>
					  <el-form-item label="经营范围">
							{{company.buscope}}
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="营业执照">
							<img v-bind:src='serverUrl + "/" + company.license' width='200' />
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="gsp证书">
							<img v-bind:src='serverUrl + "/" + company.gsp' width='200' />
						</el-form-item>
					</el-col>
					<el-col :md='8' :sm='12'>
					  <el-form-item label="综合指数">
							<echart v-bind:options="option" class='w-100'/>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>	
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>