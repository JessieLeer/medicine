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
				  <el-tabs v-model="activeName">
						<el-tab-pane label="通知" name="first">
						  <el-form inline size='small' ref='form' class='f-tar'>
							  <el-form-item class='f-fl' v-if='selectedNotice.length > 0'>
									<el-button type='primary'>批量已读</el-button>
								</el-form-item>
								<el-form-item class='f-fl' v-if='selectedNotice.length > 0'>
									<el-button type='danger'>批量删除</el-button>
								</el-form-item>
								<el-form-item prop='name'>
									<el-input v-model="notice.search" placeholder="输入标题">
									  <el-button slot="append" icon="el-icon-search" v-on:click='noticeIndex(1)'></el-button>
									</el-input>
								</el-form-item>
							</el-form>
							<el-table v-bind:data="notice.data" @selection-change="noticeSelect">
							  <el-table-column type="selection" width="30"></el-table-column>
								<el-table-column label="标题">
								  <template slot-scope='scope'>
									  <router-link to='/user/message/show' v-if='scope.row.status == "未读"'>
											<el-badge is-dot class='message-badge'>
												{{scope.row.title}}
											</el-badge>
										</router-link>
										<router-link to='/user/message/show' v-if='scope.row.status == "已读"'>
											{{scope.row.title}}
										</router-link>
									</template>
								</el-table-column>
								<el-table-column prop="createDate" label="" width='160'></el-table-column>
								<el-table-column label="操作" width='150'>
									<template slot-scope="scope">
										<el-button size="mini" type='primary'>已读</el-button>
										<el-button size="mini" type="danger">删除</el-button>
									</template>
								</el-table-column>
							</el-table>	
							<br>
							<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="notice.total" v-on:current-change='noticeIndex' v-bind:current-page='notice.curpage'></el-pagination>
						</el-tab-pane>
						<el-tab-pane label="系统消息" name="second">
						  <el-form inline size='small' ref='form' class='f-tar'>
							  <el-form-item class='f-fl' v-if='selectedSystem.length > 0'>
									<el-button type='primary'>批量已读</el-button>
								</el-form-item>
								<el-form-item class='f-fl' v-if='selectedSystem.length > 0'>
									<el-button type='danger'>批量删除</el-button>
								</el-form-item>
								<el-form-item prop='name'>
									<el-input v-model="system.search" placeholder="输入标题">
									  <el-button slot="append" icon="el-icon-search" v-on:click='systemIndex(1)'></el-button>
									</el-input>
								</el-form-item>
							</el-form>
							<el-table v-bind:data="system.data" @selection-change="systemSelect">
							  <el-table-column type="selection" width="30"></el-table-column>
								<el-table-column label="标题">
								  <template slot-scope='scope'>
									  <router-link to='/user/message/show' v-if='scope.row.status == "未读"'>
											<el-badge is-dot class='message-badge'>
												{{scope.row.title}}
											</el-badge>
										</router-link>
										<router-link to='/user/message/show' v-if='scope.row.status == "已读"'>
											{{scope.row.title}}
										</router-link>
									</template>
								</el-table-column>
								<el-table-column prop="createDate" label="" width='160'></el-table-column>
								<el-table-column label="操作" width='150'>
									<template slot-scope="scope">
										<el-button size="mini" type='primary'>已读</el-button>
										<el-button size="mini" type="danger">删除</el-button>
									</template>
								</el-table-column>
							</el-table>	
							<br>
							<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="system.total" v-on:current-change='systemIndex' v-bind:current-page='system.curpage'></el-pagination>
						</el-tab-pane>
					</el-tabs>
				</el-main>
			</el-container>
		</el-main>
	</el-container>
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>