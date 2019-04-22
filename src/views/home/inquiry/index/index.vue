<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-row>
			  <el-col :span='20'>
				  <el-form inline>
						<el-form-item>
							<el-input size='small' placeholder="请输入商品或供应商名称" v-model="search.name" class="input-inquiry-select">
								<el-select v-model="search.range" slot="prepend" placeholder="请选择">
									<el-option label="全网" value="whole"></el-option>
									<el-option label="部分" value="wholeMine"></el-option>
								</el-select>
								<el-button slot="append" icon="el-icon-search" v-on:click='index(1)'></el-button>
							</el-input>
						</el-form-item>
						<el-form-item v-if='user.type == "供应商"'>
							<el-checkbox v-model="search.quoted">我的报价</el-checkbox>
						</el-form-item>
					</el-form>
				</el-col>
				<el-col :span='4' class='f-tar' v-if='user.type == "采购商"'>
				  <el-button type='primary' size='small' v-on:click='isWayShow = true'>新增询价</el-button>
				</el-col>
			</el-row>
			<br>
			<el-collapse v-model="shows" @change="handleChange" class='inquiry-collapse'>
				<el-collapse-item v-for='(item,index) in datas' v-bind:title="item.name" v-bind:name="item.id" v-bind:key='index'>
					<el-form v-bind:inline="true">
					  <el-row>
						  <el-col :span='20'>
							  <el-form-item label="创建时间">
									{{item.createDate}}
								</el-form-item>
								<el-form-item label="截止日期">
									{{item.endValue}}
								</el-form-item>
								<el-form-item label="状态">
									{{item.status == '1' ? '报价中' : '已定单'}}
								</el-form-item>
								<br v-if='item.remarks != ""'>
								<el-form-item label="" class='remark'>
									{{item.remarks}}
								</el-form-item>
							</el-col>
							<el-col :span='4' class='f-tar'>
								<el-form-item>
									<el-button v-on:click='go(`/quote/edit/${item.id}`)' type='primary' size='small' v-if='user.type == "供应商"'>我要报价</el-button>
									<el-button v-on:click='go(`/order/${item.id}`)' type='primary' size='small' v-if='user.type == "采购商"'>查看报价</el-button>
								</el-form-item>
							</el-col>
						</el-row>
					 </el-form>
				</el-collapse-item>
			</el-collapse>
			<br>
			<el-row>
			  <el-col :span='24' class='f-tac'>
				  <el-pagination
						v-bind:page-size="20"
						v-bind:pager-count="11"
						layout="prev, pager, next"
						v-bind:total="1000">
					</el-pagination>
				</el-col>
			</el-row>
			<el-dialog title="方式选择" v-bind:visible.sync="isWayShow" width='60%' class='way-dialog'>
			  <el-row>
				  <el-col :md='12' :sm='24'>
					  <el-card class="box-card">
							<header slot="header" class="clearfix">
								<el-row>
									<el-col :span='16'>线上手动询价</el-col>
									<el-col :span='8' class='f-tar'>
									  <router-link to='/inquiry/create/manual/none'>
										  <el-button type="text" class='chose'>选择</el-button>
										</router-link>
									</el-col>
								</el-row>
							</header>
							<i class='remark f-fsn'>自主选择品种、供应商</i>
						</el-card>
					</el-col>
					<el-col :md='12' :sm='24'>
					  <el-card class="box-card">
							<header slot="header" class="clearfix">
								<el-row>
									<el-col :span='16'>ERP采购计划导入</el-col>
									<el-col :span='8' class='f-tar'>
									  <router-link to='/shopping/erp'>
										  <el-button type="text" class='chose'>选择</el-button>
										</router-link>
									</el-col>
								</el-row>
							</header>
							<i class='remark f-fsn'>从ERP的采购计划提取、生成询价比价</i>
						</el-card>
					</el-col>
					<el-col :md='12' :sm='24'>
					  <el-card class="box-card">
							<header slot="header" class="clearfix">
								<el-row>
									<el-col :span='16'>历史采购计划倒入</el-col>
									<el-col :span='8' class='f-tar'>
									  <router-link to='/shopping/history'>
									  	<el-button type="text" class='chose'>选择</el-button>
										</router-link>
									</el-col>
								</el-row>
							</header>
							<i class='remark f-fsn'>从历史采购记录中倒入采购模版</i>
						</el-card>
					</el-col>
					<el-col :md='12' :sm='24'>
					  <el-card class="box-card">
							<header slot="header" class="clearfix">
								<el-row>
									<el-col :span='12'>EXCEL模版导入</el-col>
									<el-col :span='12' class='f-tar'>
										<a href='http://192.168.1.65:8088/static/doc/询价导入模板.xlsx'>
										  <el-button type="text" class='chose'>下载</el-button>
									  </a>
										<el-upload 
										  class='f-ib'
											:http-request='uploadTemplate'
						          action='nourl'
											accept='.xlsx'
											v-bind:on-preview="handlePreview" 
											v-bind:on-remove="handleRemove" 
											v-bind:before-remove="beforeRemove" 
											v-bind:limit="1" 
											v-bind:on-exceed="handleExceed" 
											v-bind:file-list="fileList">
										  <el-button type="text" class='chose'>导入</el-button>
										</el-upload>	
									</el-col>
								</el-row>
							</header>
							<i class='remark f-fsn'>下载模版excel，根据模版填入询价内容</i>
						</el-card>
					</el-col>
				</el-row>
			</el-dialog>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>