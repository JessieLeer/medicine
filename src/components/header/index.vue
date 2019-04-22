<template>
  <el-menu v-bind:default-active="activeIndex" class="el-menu" mode="horizontal" v-on:select='' router>
	  <el-row>
		  <el-col :md='4' :sm='3'>
			  <el-menu-item index="/" class='f-ib'>
					<img src="../../assets/image/logo.png" width='100'>
				</el-menu-item>
			</el-col>
			<el-col :md='10' :sm='11'>
			  <el-menu-item index="/inquiry" class='f-ib'>询价比价</el-menu-item>
		    <el-menu-item index="/buyer" class='f-ib'>优选采购商</el-menu-item>
		    <el-menu-item index="/supplier" class='f-ib'>优选供应商</el-menu-item>
			</el-col>
			<el-col :md='10' :sm='10' class='f-tar'>
			  <el-menu-item index="/inquiry/create/manual/none" class='f-ib' v-if='user.type == "采购商"'>
					<el-button type='primary' size='small'>发布询价</el-button>
				</el-menu-item>
				<el-menu-item index="/register" class='f-ib' v-if='!user.id'>注册</el-menu-item>
				<el-menu-item index="/login" class='f-ib' v-if='!user.id'>登录</el-menu-item>
				<el-menu-item index="#" class='f-ib' v-if='user.id'>
				  <router-link to='/user/message'>
				    <el-badge is-dot class="bell-my item">
					  	<i class='bell el-icon-bell'></i>
					  </el-badge>
					</router-link>
				</el-menu-item>
				<el-submenu index="/user" class='f-ib' v-if='user.id'>
					<template slot="title">
						<img v-bind:src='user.headpic' width='40' class='headpic'>
					</template>
					<el-menu-item index="/user">个人中心</el-menu-item>
					<el-menu-item v-on:click='logout'>退出</el-menu-item>
				</el-submenu>
			</el-col>
		</el-row>
	</el-menu>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>