<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/inquiry'></cheader>
		</el-header>
	  <el-main>
		  <el-form ref="form" :model="form" label-width="80px" size='small' v-bind:rules='rules'>
				<el-form-item label="询价名称" prop='name'>
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="截止条件" prop='cutoff.type'>
				  <el-radio-group  v-model="form.cutoff.type">
					  <el-radio label="deadline">日期</el-radio>
            <el-radio label="maxnumber">最大报价量</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label='' prop='cutoff.value' v-if='form.cutoff.type != ""'>
				  <el-date-picker value-format='yyyy-MM-dd' v-if='form.cutoff.type == "deadline"' type='date' v-model="form.cutoff.value" placeholder="选择截止日期" v-bind:picker-options="picker"></el-date-picker>
					<el-input-number v-if='form.cutoff.type == "maxnumber"' v-model="form.cutoff.value" controls-position="right" v-bind:min="1" v-bind:max="10"></el-input-number>
				</el-form-item>
				<el-form-item label='选择产品' prop='goods'>
				  <el-table v-bind:data="form.goods" class='goods-table mt-20' v-if='form.goods.length > 0'>
					  <el-table-column type="expand" width='40'>
							<template slot-scope="scope">
								<el-form label-position="left" inline class='good-other'>
									<el-row>
										<el-col :sm='12' :xs='24'>
											<el-form-item label='规格'>
												{{scope.row.specification}}
											</el-form-item>
										</el-col>
										<el-col :sm='12' :xs='24'>
											<el-form-item label='单位'>
												{{scope.row.prounit}}
											</el-form-item>
										</el-col>
										<el-col :sm='12' :xs='24'>
											<el-form-item label='批准文号'>
												{{scope.row.recnumber}}
											</el-form-item>
										</el-col>
										<el-col :sm='12' :xs='24'>
											<el-form-item label='件包装'>
												{{scope.row.bagShl}}
											</el-form-item>
										</el-col>
									</el-row>
								</el-form>
							</template>
						</el-table-column>
						<el-table-column prop="name" label="商品名称" show-overflow-tooltip></el-table-column>
						<el-table-column prop="numbering" label="编号" width='100' show-overflow-tooltip></el-table-column>
						<el-table-column prop="manufacturer" label="生产厂家" show-overflow-tooltip></el-table-column>
						<el-table-column prop="expected" label="计划采购数量" width='140'>
						  <template slot-scope='scope'>
								<el-input-number v-model="scope.row.expected" :min="1" ></el-input-number>
							</template>
						</el-table-column>
						<el-table-column label="操作" width='70'>
						  <template slot-scope='scope'>
							  <el-button type="danger" v-on:click='deleteForm("goods",scope.row)'>删除</el-button>
							</template>
						</el-table-column>
					</el-table>
					<el-button type="primary" icon="el-icon-plus" v-on:click='goodIndex(goodCur)'>选择产品</el-button>
				</el-form-item>
				<el-form-item label='目标公开' prop='aimType'>
				  <el-radio-group v-model="form.aimType">
				    <el-radio label="whole">全网</el-radio>
            <el-radio label="wholeMine">我的全部（{{offerTotal}}）</el-radio>
					  <el-radio label="partMine">我的部分</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label='' v-if='form.aimType == "partMine"' prop='aims'>
				  <el-table v-bind:data="form.aims" class='goods-table mt-20' v-if='form.aims.length > 0'>
					  <el-table-column prop='name' label='名称'></el-table-column>
						<el-table-column prop='company' label='公司'></el-table-column>
						<el-table-column width='70' label='操作'>
						  <template slot-scope='scope'>
							  <el-button type="danger" v-on:click='deleteForm("aims",scope.row)'>删除</el-button>
							</template>
						</el-table-column>
					</el-table>
				  <el-button type="primary" icon="el-icon-plus" v-on:click='offerIndex(offerCur)'>选择供应商</el-button>
				</el-form-item>
				<el-form-item label='发票' prop='isTicket'>
				  <el-radio-group v-model="form.isTicket">
				    <el-radio label="true">含有</el-radio>
            <el-radio label="false">不含有</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label='付款方式' prop='pay'>
				  <el-radio-group v-model="form.pay">
				    <el-radio label="cash">现金</el-radio>
            <el-radio label="card">银行卡</el-radio>
					  <el-radio label="alipay">支付宝</el-radio>
					  <el-radio label="wechat">微信</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label='联系人' prop='contact'>
				  <el-input v-model='form.contact'></el-input>
				</el-form-item>
				<el-form-item label='联系方式' prop='phone'>
				  <el-input v-model='form.phone' type='tel'></el-input>
				</el-form-item>
				<el-form-item label='送货地址' prop='address'>
				  <el-input v-model='form.address'></el-input>
				</el-form-item>
				<el-form-item label='备注'>
				  <el-input v-model='form.remark' type='textarea'></el-input>
				</el-form-item>
				<el-form-item>
				  <el-button type='primary' size='small' v-on:click='inquiryCreate("form")' v-bind:disabled='!submitAble'>提交</el-button>
				</el-form-item>
			</el-form>
			<el-dialog title="选择产品" :visible.sync="goodsDialogShow" class='cate-dialog'>
			  <el-form v-bind:inline="true" size='small'>
				  <el-form-item>
					  <el-cascader placeholder="选择或输入分类名" v-bind:options="cates" filterable change-on-select v-model='search.good.cate' v-on:change='cateChange'></el-cascader>
					</el-form-item>
					<el-form-item>
						<el-input placeholder="输入商品名/生产厂家" v-model="search.good.name" class="input-with-select">
							<el-button slot="append" icon="el-icon-search" v-on:click='goodIndex(1)'></el-button>
						</el-input>
					</el-form-item>
					<el-form-item class='f-fr'>
					  <el-button type='text' size='small' v-on:click='goodCreateVisable = true'>手动添加</el-button>
					</el-form-item>
				</el-form>
				<el-table v-bind:data="goods" class='goods-table' v-bind:empty-text='emptyText'>
				  <el-table-column type="expand" width='40'>
            <template slot-scope="scope">
						  <el-form label-position="left" inline class='good-other'>
							  <el-row>
								  <el-col :sm='12' :xs='24'>
									  <el-form-item label='编号'>
											{{scope.row.numbering}}
										</el-form-item>
									</el-col>
									<el-col :sm='12' :xs='24'>
									  <el-form-item label='单位'>
											{{scope.row.prounit}}
										</el-form-item>
									</el-col>
									<el-col :sm='12' :xs='24'>
									  <el-form-item label='批准文号'>
											{{scope.row.recnumber}}
										</el-form-item>
									</el-col>
									<el-col :sm='12' :xs='24'>
									  <el-form-item label='件包装'>
											{{scope.row.bagShl}}
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
			      </template>
			    </el-table-column>
					<el-table-column prop="name" label="商品名称" show-overflow-tooltip></el-table-column>
					<el-table-column prop="specification" label="规格" width='90' show-overflow-tooltip></el-table-column>
					<el-table-column prop="manufacturer" label="生产厂家" show-overflow-tooltip></el-table-column>
					<el-table-column label="操作" fixed="right" width='50'>
					  <template slot-scope='scope'>
						  <el-button type="text" size='small' v-on:click='appendForm("goods",scope.row)' v-bind:disabled='form.goods.filter((itemer) => {return itemer.id == scope.row.id}).length > 0 ? true : false' v-bind:title='form.goods.filter((itemer) => {return itemer.id == scope.row.id}).length > 0 ? "已选择" : ""'>选择</el-button>
						</template>
					</el-table-column>
				</el-table>
				<br>
				<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="goodTotal" v-bind:current-page='goodCur' v-on:current-change='goodIndex'></el-pagination>
				<el-dialog width="50%" title="创建产品" :visible.sync="goodCreateVisable" append-to-body class='cate-dialog'>
				  <el-form ref="form1" :model="form1" v-bind:rules='rules1' size='small'>
					  <el-row v-bind:gutter="20">
						  <el-col :sm='12' :xs='24'>
							  <el-form-item prop='name'>
									<el-input v-model="form1.name" placeholder='商品名称'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='brand'>
									<el-select v-model="form1.brand" placeholder="品牌" value-key='id'>
										<el-option v-for='(item, index) in brands' v-bind:key='index' v-bind:label='item.name' v-bind:value='item.id'></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='cates'>
									<el-cascader placeholder="商品分类" v-bind:options="cates" filterable change-on-select v-model='form1.cates'></el-cascader>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='code'>
									<el-input v-model="form1.code" placeholder='助记码'></el-input>
							  </el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='numbering'>
									<el-input v-model="form1.numbering" placeholder='产品编码'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='recnumber'>
								  <el-input v-model="form1.recnumber" placeholder='批准文号'></el-input>
						    </el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='manufacturer'>
									<el-input v-model="form1.manufacturer" placeholder='生产厂家'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='specification'>
									<el-input v-model="form1.specification" placeholder='产品规格'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='presclass'>
									<el-select v-model="form1.presclass" placeholder="处方分类" value-key='value'>
										<el-option v-for='(item, index) in presclass' v-bind:key='index' v-bind:label='item.label' v-bind:value='item.value'></el-option>
									</el-select>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='formulation'>
									<el-input v-model="form1.formulation" placeholder='剂型'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='prounit'>
									<el-input v-model="form1.prounit" placeholder='产品单位'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='erp'>
									<el-input v-model="form1.erp" placeholder='ERP编码'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='bagShl'>
								  <el-input v-model="form1.bagShl" placeholder='件包装' type='number'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item label='上传图片'>
									<el-upload
										action="https://jsonplaceholder.typicode.com/posts/"
										v-bind:file-list='form1.images'
										:http-request='uploadImage'
										list-type="picture-card">
										<i class="el-icon-plus"></i>
									</el-upload>
								</el-form-item>
							</el-col>
							<el-col :span='24' class='f-tac'>
							  <el-form-item>
								  <el-button type='primary' size='small' v-on:click='goodCreate("form1")'>提交</el-button>
								</el-form-item>
							</el-col>
						</el-row>
					</el-form>
				</el-dialog>
			</el-dialog>
			<el-dialog title="选择供应商" :visible.sync="offersDialogShow" class='cate-dialog'>
			  <el-input placeholder="输入供应商名称" v-model="search.offer.name" class="input-with-select" size='small'>
					<el-button slot="append" icon="el-icon-search" v-on:click='offerIndex(1)'></el-button>
				</el-input>
				<br><br>
				<el-table v-bind:data="offers" class='goods-table'>
				  <el-table-column type="expand">
						<template slot-scope="props">
							<el-form label-position="left" inline class='good-other'>
							  <el-row>
								  <el-col :md='12' :sm='24'>
									  <el-form-item label="客户类型">
											{{ props.row.user.type }}
										</el-form-item>
									</el-col>
									<el-col :md='12' :sm='24'>
									  <el-form-item label="修改日期">
											{{ props.row.updateDate }}
										</el-form-item>
									</el-col>
								</el-row>
							</el-form>
						</template>
					</el-table-column>
				  <el-table-column prop="name" label="名称"></el-table-column>
					<el-table-column prop="company" label="公司名称"></el-table-column>
					<el-table-column prop="phone" label="联系方式" width='110'></el-table-column>
					<el-table-column label="操作" fixed="right" width='50'>
					  <template slot-scope='scope'>
						  <el-button type="text" size='small' v-on:click='appendForm("aims",scope.row)' v-bind:disabled='form.aims.indexOf(scope.row) == -1 ? false : true' v-bind:title='form.aims.indexOf(scope.row) == -1 ? "" : "已选择"'>选择</el-button>
						</template>
					</el-table-column>
				</el-table>
				<br>
				<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="offerTotal" v-bind:current-page='offerCur' v-on:current-change='offerIndex'></el-pagination>
			</el-dialog>
			<el-dialog title="操作反馈" :visible.sync="dialogResultVisible" class='cate-dialog' v-on:close='go("/inquiry/"+user.id)'>
			  <el-alert title="操作成功，请耐心等待" type="success" center show-icon description=""></el-alert>
				<br>
				<el-row>
				  <el-col :span='24' class='f-tac'>
					  <el-steps align-center :active="2" finish-status="success">
							<el-step title="创建单据"></el-step>
							<el-step title="发布成功"></el-step>
							<el-step title="供应商报价与沟通"></el-step>
							<el-step title="定单"></el-step>
						</el-steps>
					</el-col>
				</el-row>
				<br>
				<el-row>
				  <el-col :span='24' class='f-tac'>
						<router-link v-bind:to='"/inquiry/"+user.id'>
						  <el-button type='default' size='small'>返回列表</el-button>
						</router-link>
					</el-col>
				</el-row>
			</el-dialog>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>