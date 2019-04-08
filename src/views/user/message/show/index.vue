<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/message'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-card class="user-card">
						<header slot="header" class="clearfix">
					    <el-row>
							  <el-col :span='20'>
								  <b>{{article.title}}</b>
								</el-col>
								<el-col :span='4' class='f-tar'>
								  <el-button type="text" size='mini'>返回</el-button>
								</el-col>
							</el-row>
						</header>
						<div>
						  {{article.content}}
							<br>
						  <time class='f-fs2'>{{article.created_at}}</time>
						</div>
					</el-card>
				</el-main>
			</el-container>
		</el-main>
	</el-container>
</template>	

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>
