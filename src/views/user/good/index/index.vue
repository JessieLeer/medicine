<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/good'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form inline :model="search" size='small' ref='form' class='f-tar'>
					  <el-form-item class='f-fl' v-if='selectedGoods.length > 0'>
						  <el-button type="primary" size='small'>批量采购</el-button>
						</el-form-item>
						<el-form-item prop='name'>
							<el-input v-model="search.name" placeholder="商品名/生产厂家"></el-input>
						</el-form-item>
						<el-form-item prop='status'>
							<el-select v-model="search.status" placeholder="状态">
							  <el-option label="待审核" value="0"></el-option>
								<el-option label="审核通过" value="1"></el-option>
								<el-option label="未通过" value="2"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item>
						  <el-button type='primary' v-on:click="index(1)">查询</el-button>
							<el-button v-on:click="resetForm('form')">重置</el-button>
						</el-form-item>
					</el-form>
					<el-table ref="multipleTable" v-bind:data="goods" tooltip-effect="dark" v-on:selection-change="handleSelectionChange">
						<el-table-column type="selection" width="30"></el-table-column>
						<el-table-column label="商品名称" prop='name'></el-table-column>
						<el-table-column prop="manufacturer" label="生产厂家"></el-table-column>
						<el-table-column prop="specification" label="规格" width='120'></el-table-column>
						<el-table-column prop="status" label="状态" width='70'></el-table-column>
						<el-table-column prop="updateDate" label="更新日期" width='160'></el-table-column>
						<el-table-column label="操作" fixed='right' width='50'>
							<template slot-scope="scope">
								<el-button type="primary" size='mini' icon="el-icon-edit" circle title='编辑' v-on:click='handlEdit(scope.row)'></el-button>
							</template>
						</el-table-column>
					</el-table>
					<br>
					<el-pagination class='f-tac' layout="prev, pager, next" v-bind:total="total" v-on:current-change='index' v-bind:current-page='curpage'></el-pagination>
					<el-dialog title="编辑商品" :visible.sync="editFormVisiable" class='good-dialog'>
					  <el-form ref="form" :model="form" v-bind:rules='rules' size='small'>
							<el-row v-bind:gutter="20">
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='name'>
										<el-input v-model="form.name" placeholder='商品名称'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='brand'>
										<el-select v-model="form.brand" placeholder="品牌" value-key='id'>
											<el-option v-for='(item, index) in brands' v-bind:key='index' v-bind:label='item.name' v-bind:value='item.id'></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='cates'>
										<el-cascader placeholder="商品分类" v-bind:options="cates" filterable change-on-select v-model='form.cates'></el-cascader>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='code'>
										<el-input v-model="form.code" placeholder='助记码'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='numbering'>
										<el-input v-model="form.numbering" placeholder='产品编码'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='recnumber'>
										<el-input v-model="form.recnumber" placeholder='推荐文号'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='manufacturer'>
										<el-input v-model="form.manufacturer" placeholder='生产厂家'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='specification'>
										<el-input v-model="form.specification" placeholder='产品规格'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='presclass'>
										<el-select v-model="form.presclass" placeholder="处方分类" value-key='value'>
											<el-option v-for='(item, index) in presclass' v-bind:key='index' v-bind:label='item.label' v-bind:value='item.value'></el-option>
										</el-select>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='formulation'>
										<el-input v-model="form.formulation" placeholder='剂型'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='prounit'>
										<el-input v-model="form.prounit" placeholder='产品单位'></el-input>
									</el-form-item>
								</el-col>
								<el-col :sm='12' :xs='24'>
									<el-form-item prop='erp'>
										<el-input v-model="form.erp" placeholder='ERP编码'></el-input>
									</el-form-item>
								</el-col>
								<el-col :span='24'>
									<el-form-item label='上传图片'>
										<el-upload
											action="https://jsonplaceholder.typicode.com/posts/"
											:http-request='uploadImage'
											list-type="picture-card">
											<img v-if='form.image.length > 0' v-for='(item, index) in form.image' v-bind:src='item'>
											<i class="el-icon-plus"></i>
										</el-upload>
									</el-form-item>
								</el-col>
								<el-col :span='24' class='f-tac'>
									<el-form-item>
										<el-button type='primary' size='small' v-on:click='submit("form")'>提交</el-button>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</el-dialog>
				</el-main>
			</el-container>
		</el-main>
	</el-container>	
</template>

<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>