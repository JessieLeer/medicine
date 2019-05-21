<template>
  <el-menu v-bind:default-active="active" router>
		<el-submenu index="/user">
			<template slot="title">
				<i class="el-icon-location"></i>
				<i class='f-fsn'>个人中心</i>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/user">基本信息</el-menu-item>
				<el-menu-item index="/user/data">个人资料</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="/user/good">
			<template slot="title">
				<i class="el-icon-goods"></i>
				<i class='f-fsn'>商品管理</i>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/user/good">商品列表</el-menu-item>
				<el-menu-item index="/user/good/create">添加商品</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">
				<i class="el-icon-mobile-phone"></i>
				<i class='f-fsn'>往来单位</i>
			</template>
			<el-menu-item-group>
				<el-menu-item index="/user/customer">往来单位列表</el-menu-item>
				<el-menu-item index="/user/customer/create">添加往来单位</el-menu-item>
				<el-menu-item index="/user/customer/applier">申请列表</el-menu-item>
			</el-menu-item-group>
		</el-submenu>
		<!--<el-menu-item index="/user/erp">
      <i class="el-icon-setting"></i>
      <i class='f-fsn' slot="title">erp设置</i>
    </el-menu-item>-->
		<el-menu-item index="/user/message">
      <i class="el-icon-message"></i>
      <i class='f-fsn' slot="title">消息管理</i>
    </el-menu-item>
	</el-menu>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>