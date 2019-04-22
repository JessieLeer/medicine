<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-card class="box-card">
			  <header slot='header'>订单信息</header>
				<el-row>
				  <el-col v-bind:span='18'>
					  <el-form label-width="80px">
							<el-form-item label="" label-width='12px'>
								<b>{{order.name}}</b>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='order.createBy.photo' width='40' class='f-pa'>
								<el-button type="text" class='card-opera' v-on:click='go(`/quote/qualification/${order.createBy.id}`)'>
									<i class='unit f-fsn'>{{order.createBy.name}}</i>
								</el-button>	
							</el-form-item>
							<el-form-item label="联系人">{{order.contact}} / {{order.phone}}</el-form-item>
							<el-form-item label="截止日期">{{order.endValue}}</el-form-item>
							<el-form-item label="" label-width='12px' class='remark'>{{order.remark}}</el-form-item>
						</el-form>
					</el-col>
					<el-col v-bind:span='6'>
					  <el-steps v-bind:active="parseInt(order.status)" finish-status="success">
						  <el-step title="已询价"></el-step>
							<el-step title="报价中"></el-step>
							<el-step title="已定单"></el-step>
						</el-steps>
					</el-col>
				</el-row>
			</el-card>
			<br>
		  <el-card class="box-card">
			  <header slot='header'>
				  <el-row>
					  <el-col :span='4'>物资列表</el-col>
						<el-col :span='20'>
						  <el-input placeholder="输入商品名称" v-model="search.name" class="input-quote-select" size='small'>
								<el-select v-model="search.range" slot="prepend" placeholder="请选择">
									<el-option label="默认" value="default"></el-option>
									<el-option label="已忽略" value="ignored"></el-option>
								</el-select>
							</el-input>
						</el-col>
					</el-row>
				</header>
				<el-table v-bind:data="goodsFilter" class='w-100' max-height="500">
					<el-table-column prop="product.name" label="商品名称"></el-table-column>
					<el-table-column prop="expected" label="需求数量" width="120"></el-table-column>
					<el-table-column prop="expected" label="可供应数量" width='140'>
					  <template slot-scope='scope'>
						  <el-input v-model="scope.row.available" type='number' size='small' min='0'></el-input>
						</template>
					</el-table-column>
					<el-table-column prop="ticket" label="带票报价" width='140'>
					  <template slot-scope='scope'>
						  <el-input v-model="scope.row.ticket" type='number' size='small' min='0'></el-input>
						</template>
					</el-table-column>
					<el-table-column prop="unticket" label="不含票报价" width='140'>
					  <template slot-scope='scope'>
						  <el-input v-model="scope.row.unticket" type='number' size='small' min='0'></el-input>
						</template>
					</el-table-column>
					<el-table-column prop="remark" label="备注" width='200'>
					  <template slot-scope='scope'>
						  <el-input type="textarea" :rows="1" v-model="scope.row.remark"></el-input>
						</template>
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="80">
						<template slot-scope="scope">
							<el-button type="warning" size="small" v-if='scope.row.flag == "default"' v-on:click='scope.row.flag = "ignored"'>忽略</el-button>
							<el-button type="primary" size="small" v-if='scope.row.flag == "ignored"' v-on:click='scope.row.flag = "default"'>还原</el-button>
						</template>
					</el-table-column>	
				</el-table>
				<br>
				<el-form size='small' class='f-tac'>
					<el-form-item label="">
						<el-input v-model="remark" placeholder="备注" type='textarea' :rows='1'></el-input>
					</el-form-item>
					<br>
					<el-form-item>
						<el-button type="primary" v-bind:disabled='subGoods.length == "0"' v-on:click='save'>提交</el-button>
					</el-form-item>
				</el-form>
			</el-card>
		</el-main>
	</el-container>
</template>	

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>
