<template>
  <el-menu v-bind:default-active="activeIndex" class="el-menu" mode="horizontal" v-on:select='' router>
	  <el-row>
		  <el-col :md='4' :sm='3'>
			  <el-menu-item v-on:click='go("/")' class='logo f-ib'>
					<img src="../../assets/image/logo.png" width='120'>
				</el-menu-item>
			</el-col>
			<el-col :md='10' :sm='11'>
			  <el-menu-item index="/" class='f-ib'>首页</el-menu-item>
			  <el-menu-item index="/inquiry/none" class='f-ib'>询价比价</el-menu-item>
		    <el-menu-item index="/buyer" class='f-ib'>优选采购商</el-menu-item>
		    <el-menu-item index="/supplier" class='f-ib'>优选供应商</el-menu-item>
				<el-menu-item class='f-ib'>
				  <a href='http://www.yaozhicai.cn:8081/' target='_blank' style='color: #f54100;'>药追溯平台</a>
				</el-menu-item>
			</el-col>
			<el-col :md='10' :sm='10' class='f-tar'>
			  <el-menu-item v-on:click='isWayShow = true' class='f-ib' v-if='user.id && user.type == "采购商"'>
					<el-button type='primary' size='small'>发布询价</el-button>
				</el-menu-item>
				<el-menu-item index="/register" class='f-ib' v-if='!user.id'>注册</el-menu-item>
				<el-menu-item index="/login" class='f-ib' v-if='!user.id'>登录</el-menu-item>
				<el-menu-item index="#" class='f-ib' v-if='user.id'>
				  <router-link to='/user/message'>
				    <el-badge v-bind:is-dot='unread > 0 ? true : false' class="bell-my item">
					  	<i class='bell el-icon-bell'></i>
					  </el-badge>
					</router-link>
				</el-menu-item>
				<el-submenu index="/user" class='f-ib' v-if='user.id'>
					<template slot="title">
						<img v-bind:src='serverUrl + user.headpic' width='34' class='headpic'>
						{{user.name}}({{user.type}})
					</template>
					<el-menu-item index="/user">个人中心</el-menu-item>
					<el-menu-item v-on:click='logout'>退出</el-menu-item>
				</el-submenu>
			</el-col>
		</el-row>
		<el-dialog title="方式选择" v-bind:visible.sync="isWayShow" width='60%' class='way-dialog' style='position: fixed;z-index: 100'>
		  <el-row>
			  <el-col :md='12' :sm='24'>
	  		  <el-card class="box-card">
						<header slot="header" class="clearfix">
							<el-row>
								<el-col :span='16'>线上手动询价</el-col>
								<el-col :span='8' class='f-tar'>
								  <router-link to='/inquiry/create/manual/none' target="_blank">
									  <el-button type="text" class='chose'>选择</el-button>
									</router-link>
								</el-col>
							</el-row>
						</header>
						<i class='remark f-fsn'>自主选择品种、供应商</i>
					</el-card>
				</el-col>
				<!--<el-col :md='12' :sm='24'>
				  <el-card class="box-card">
						<header slot="header" class="clearfix">
							<el-row>
								<el-col :span='16'>ERP采购计划导入</el-col>
								<el-col :span='8' class='f-tar'>
									<el-button type="text" class='chose' v-on:click='go("/shopping/erp")'>选择</el-button>
								</el-col>
							</el-row>
						</header>
						<i class='remark f-fsn'>从ERP的采购计划提取、生成询价比价</i>
					</el-card>
				</el-col>-->
				<el-col :md='12' :sm='24'>
				  <el-card class="box-card">
						<header slot="header" class="clearfix">
							<el-row>
								<el-col :span='16'>历史采购计划导入</el-col>
								<el-col :span='8' class='f-tar'>
								  <el-button type="text" class='chose' v-on:click='go("/shopping/history")'>选择</el-button>
								</el-col>
							</el-row>
						</header>
						<i class='remark f-fsn'>从历史采购记录中导入采购模版</i>
					</el-card>
				</el-col>
				<!--<el-col :md='12' :sm='24'>
				  <el-card class="box-card">
						<header slot="header" class="clearfix">
							<el-row>
								<el-col :span='12'>EXCEL模版导入</el-col>
								<el-col :span='12' class='f-tar'>
									<a v-bind:href='serverUrl + "/static/doc/询价导入模板.xlsx"'>
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
				</el-col>-->
			</el-row>
		</el-dialog>
	</el-menu>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>