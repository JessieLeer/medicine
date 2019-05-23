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
					  <el-form label-width="100px">
							<el-form-item label="" label-width='12px'>
								<b>{{order.name}}</b>
							</el-form-item>
							<el-form-item label="询价单位" class='f-pr'>
								<img v-bind:src='order.updateByphoto ? serverUrl + order.updateByphoto : serverUrl + "/static/front/images/companylogo.png"' width='40' class='f-pa'>&nbsp;
								<el-button type="text" class='card-opera' v-on:click='go(`/quote/qualification/${order.createByid}`)'>
									<i class='unit f-fsn'>{{order.createByname}}</i>
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
					  <el-steps v-bind:active="parseInt(order.status) + 1" finish-status="success">
						  <el-step title="已询价"></el-step>
							<el-step title="报价中"></el-step>
							<el-step title="已定单"></el-step>
						</el-steps>
						<el-form v-if='order.status == "2"'> 
						  <el-form-item label='中标状态'>
							  {{order.isBidding == "true" ? "中标" : '未中标'}}
							</el-form-item>
						</el-form>
					</el-col>
				</el-row>
			</el-card>
			<br>
		  <el-card class="box-card">
			  <header slot='header'>
				  <el-row>
					  <el-col :span='4'>物资列表</el-col>
						<el-col :span='16'>
						  <el-input placeholder="输入商品名称" v-model="search.name" class="input-quote-select" size='small'>
								<el-select v-model="search.range" slot="prepend" placeholder="请选择">
									<el-option label="默认" value="default"></el-option>
									<el-option label="已忽略" value="ignored"></el-option>
								</el-select>
							</el-input>
						</el-col>
						<el-col :span='4' class='f-tar' v-if='order.status == "2" && order.isBidding == "true"'>
						  <el-button type='primary' size='small' v-on:click='importer'>导出excel</el-button>
						</el-col>
					</el-row>
				</header>
				<el-table v-bind:data="goodsFilter" class='w-100'>
				  <el-table-column type="expand">
						<template slot-scope="scope">
							<el-form label-position="left" inline >
							  <el-row>
								  <el-col :md='12' :sm='24'>
									  <el-form-item label="生产厂家">
											{{scope.row.product.manufacturer}}
										</el-form-item>
									</el-col>
								  <el-col :md='3' :sm='12'>
									  <el-form-item label="规格">
											{{scope.row.product.specification}}
										</el-form-item>
									</el-col>
									<el-col :md='3' :sm='12'>
									  <el-form-item label="剂型">
											{{scope.row.product.formulation}}
										</el-form-item>
									</el-col>
									<el-col :md='3' :sm='12'>
									  <el-form-item label="品牌">
											{{scope.row.product.brand}}
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</template>
					</el-table-column>
					<el-table-column prop="product.name" label="商品名称"></el-table-column>
					<el-table-column prop="expected" label="需求数量" width="120"></el-table-column>
					<el-table-column prop="expected" label="可供应数量" width='140'>
					  <template slot-scope='scope'>
						  <el-input v-model="scope.row.available" type='number' size='small' min='0' v-bind:disabled='order.status == "2" ? true : false'></el-input>
						</template>
					</el-table-column>
					<el-table-column prop="ticket" label="带票报价" width='140' v-if='order.isTicket == "true"'>
					  <template slot-scope='scope'>
						  <el-input v-model="scope.row.ticket" type='number' size='small' min='0' v-bind:disabled='order.status == "2" ? true : false'></el-input>
						</template>
					</el-table-column>
					<el-table-column prop="unticket" label="不含票报价" width='140' v-if='order.isTicket == "false"'>
					  <template slot-scope='scope'>
						  <el-input v-model="scope.row.unticket" type='number' size='small' min='0' v-bind:disabled='order.status == "2" ? true : false'></el-input>
						</template>
					</el-table-column>
					<el-table-column prop="remark" label="备注" width='200'>
					  <template slot-scope='scope'>
						  <el-input type="textarea" :rows="1" v-model="scope.row.remark" v-bind:disabled='order.status == "2" ? true : false'></el-input>
						</template>
					</el-table-column>
					<el-table-column fixed="right" label="状态" width="80" v-if='order.status == "2"' prop='status'></el-table-column>	
					<el-table-column fixed="right" label="操作" width="80" v-if='order.status == "1"'>
						<template slot-scope="scope">
							<el-button type="warning" size="small" v-if='scope.row.flag == "default"' v-on:click='scope.row.flag = "ignored"'>忽略</el-button>
							<el-button type="primary" size="small" v-if='scope.row.flag == "ignored"' v-on:click='scope.row.flag = "default"'>还原</el-button>
						</template>
					</el-table-column>	
				</el-table>
				<br>
				<el-form size='small' class='f-tac'>
					<el-form-item>
						<el-button type="primary" v-bind:disabled='subGoods.length == "0"' v-on:click='save' v-if='order.status != "2"'>提交</el-button>
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
