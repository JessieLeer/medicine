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
				  <el-button type='primary' size='small' v-on:click='customerIndex(curpage)'>从已有商户列表中添加</el-button>
					<br><br>
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
					<el-dialog title="选择商户" :visible.sync="customerDialogShow" class='cate-dialog'>
						<el-form v-bind:inline="true" size='small'>
							<el-form-item>
								<el-input placeholder="输入商户名/公司名称" v-model="search.name" class="input-with-select">
									<el-button slot="append" icon="el-icon-search" v-on:click='customerIndex(1)'></el-button>
								</el-input>
							</el-form-item>
						</el-form>
						<el-table v-bind:data="customers" class='goods-table' v-bind:empty-text='emptyText'>
							<el-table-column prop="name" label="用户名" show-overflow-tooltip></el-table-column>
							<el-table-column prop="company" label="公司名称" show-overflow-tooltip></el-table-column>
							<el-table-column prop="user.customerLabel.label" width='80' label="用户类型" show-overflow-tooltip></el-table-column>
							<el-table-column label="操作" fixed="right" width='50'>
								<template slot-scope='scope'>
								  <el-button type='text' v-on:click='adder(scope.row.user.id)'>选择</el-button>
								</template>
							</el-table-column>
						</el-table>
						<br>
						<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="total" v-bind:current-page='curpage' v-on:current-change='customerIndex'></el-pagination>
					</el-dialog>	
				</el-main>
			</el-container>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>