<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-form inline>
				<el-form-item>
					<el-input size='small' placeholder="请输入商品或供应商名称" v-model="search.name" class="input-inquiry-select">
						<el-select v-model="search.range" slot="prepend" placeholder="请选择" v-on:change='index(1)'>
						  <el-option label="全部" value="all"></el-option>
							<el-option label="全网" value="whole"></el-option>
							<el-option label="部分" value="wholeMine"></el-option>
						</el-select>
						<el-button slot="append" icon="el-icon-search" v-on:click='index(1)'></el-button>
					</el-input>
				</el-form-item>
				<el-form-item v-if='user.type == "供应商" || user.type == "业务员"'>
					<el-checkbox v-model="search.quoted" v-on:change='index(1)'>我的报价</el-checkbox>
				</el-form-item>
			</el-form>
			<br>
			<el-alert title="没有数据" type="warning" v-if='datas.length == 0'></el-alert>
			<el-collapse v-if='datas.length > 0' v-model="shows" @change="handleChange" class='inquiry-collapse'>
				<el-collapse-item v-for='(item,index) in datas' v-bind:title="item.name" v-bind:name="item.id" v-bind:key='index'>
					<el-form v-bind:inline="true">
					  <el-row>
						  <el-col :span='20'>
							  <el-form-item label="创建时间">
									{{item.createDate}}
								</el-form-item>
								<el-form-item v-bind:label="item.endValue.indexOf('-') == -1 ? '最大报价量' : '截止日期'">{{item.endValue}}</el-form-item>
								<el-form-item label="询价状态">
									{{item.status == '1' ? '询价中' : '已定单'}}
								</el-form-item>
                <el-form-item label="报价状态" v-if="user.type == '供应商' || user.type == '业务员'">
                  {{item.isQuoted == 'true' ? '已报价' : '未报价'}}
                </el-form-item>
                <el-form-item label="中标状态" v-if="item.status == '2' && user.type == '供应商' || item.status == '2' && user.type == '业务员'">
                  {{item.isBidding == 'true' ? '已中标' : '未中标'}}
                </el-form-item>
								<br v-if='item.remarks != ""'>
								<el-form-item label="" class='remark'>
									{{item.remarks}}
								</el-form-item>
								<br>
								<el-form-item label='已报价供应商' v-if='user.type == "采购商"'>
								  <img v-for='(supplier, i) in item.supplierList' v-bind:src='serverUrl + supplier.supplier.photos' class='avatar'>
								</el-form-item>
							</el-col>
							<el-col :span='4' class='f-tar'>
								<el-form-item>
									<el-button v-on:click='go(`/quote/edit/${item.id}`)' type='primary' size='small' v-if='user.type == "供应商" && item.status == "1" || user.type == "业务员" && item.status == "1"'>我要报价</el-button>
									<el-button v-on:click='go(`/quote/edit/${item.id}`)' type='primary' size='small' v-if='user.type == "供应商" && item.status == "2" || user.type == "业务员" && item.status == "2"'>查看询价</el-button>
									<el-button v-on:click='go(`/order/${item.id}`)' type='primary' size='small' v-if='user.type == "采购商" && item.status == "1"'>查看报价</el-button>
									<el-button v-on:click='go(`/order/result/${item.enquiryId}`)' type='primary' size='small' v-if='user.type == "采购商" && item.status == "2"'>查看报价</el-button>
								</el-form-item>
							</el-col>
						</el-row>
					 </el-form>
				</el-collapse-item>
			</el-collapse>
			<br>
			<el-row v-if='datas.length > 0'>
			  <el-col :span='24' class='f-tac'>
				  <el-pagination
						layout="prev, pager, next"
						:total="total"
						v-on:current-change='index'
						v-bind:current-page='curpage'
						class='f-tac'>
					</el-pagination>
				</el-col>
			</el-row>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>