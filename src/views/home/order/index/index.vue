<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
		<router-view/>
	  <el-main>
		  <el-card class="box-card">
			  <header slot='header'>订单信息</header>
				<el-row>
				  <el-col v-bind:span='18'>
					  <el-form label-width="100px" label-position="left">
							<el-form-item label="" label-width='0'>
								<b>{{order.name}}</b>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='serverUrl + order.updateByphoto' width='36' class='f-pa'> &nbsp;
								<el-button type="text" class='card-opera' v-on:click='go(`/quote/qualification/${order.createByid}`)'>
									<i class='unit f-fsn'>{{order.updateByname}}</i>
								</el-button>	
							</el-form-item>
							<el-row>
							  <el-col :md='12'>
								  <el-form-item label="联系人">{{order.contact}} / {{order.phone}}</el-form-item>
								</el-col>
								<el-col :md='12'>
								  <el-form-item label="付款方式">{{order.pay.value}}</el-form-item>
								</el-col>
							</el-row>
							<el-row>
							  <el-col :md='12'>
								  <el-form-item label="是否发票">{{order.isTicket == "true" ? '是' : '否'}}</el-form-item>
								</el-col>
								<el-col :md='12'>
								  <el-form-item v-bind:label="order.endValue.indexOf('-') == -1 ? '最大报价量' : '截止日期'">{{order.endValue}}</el-form-item>
								</el-col>
							</el-row>
							<el-form-item label="" label-width='0px' class='remark'>{{order.remarks}}</el-form-item>
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
							</el-input>
						</el-col>
					</el-row>
				</header>
				<el-table v-bind:data="goodsFilter" class='w-100'  v-bind:span-method="objectSpanMethod" show-summary v-bind:summary-method="getSummaries">
					<el-table-column label="商品信息" width=''>
					  <template slot-scope='scope'>
						  <el-form>
						  <el-row>
							  <el-col :span='24'>
								  {{scope.row.product.name}}
								</el-col>
								<el-col :md='24'>
									<el-form-item class=''>
									  <small>{{scope.row.product.manufacturer}}</small>
								  </el-form-item>
							  </el-col>
							</el-row>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column width="50" label='选择'>
					  <template slot-scope='scope'>
					  	<el-checkbox-group v-model="subGoods">
							  <el-checkbox v-bind:label='scope.row.id'>&nbsp;</el-checkbox>
							</el-checkbox-group>
						</template>
					</el-table-column>
					<el-table-column prop="" label="供应商" width="260">
					  <template slot-scope='scope'>
						  {{scope.row.supplier.name}}{{(scope.row.supplier.company)}}
						</template>
					</el-table-column>
					<el-table-column prop="product.specification" label="规格" width='100'></el-table-column>
					<el-table-column prop="product.formulation" label="剂型" width='66'></el-table-column>
					<el-table-column prop="product.prounit" label="单位" width='50'></el-table-column>
					<el-table-column prop="product.bagShl" label="件包装" width='65'></el-table-column>
					<el-table-column prop="expected" label="计划采购量" width='100'></el-table-column>
					<el-table-column prop="available" label="可供应数量" width='100'></el-table-column>
					<el-table-column prop="ticket" v-if='order.isTicket == "true"' label="含票报价" width='80'></el-table-column>
					<el-table-column prop="unticket" v-if='order.isTicket == "false"' label="不含票报价" width='100'>
					</el-table-column>
					<el-table-column prop="remark" label="优惠政策" width='100'></el-table-column>
				</el-table>
				<br>
				<el-form size='small' class='f-tac'>
					<el-form-item>
						<el-button type="primary" v-on:click='submit' v-bind:disabled='subGoods.length == 0' v-bind:title='subGoods.length == 0 ? "请至少选择一条报价" : ""'>生成采购计划</el-button>
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