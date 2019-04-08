<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
			  <el-aside width='200'>
				  <caside active='/user/good/create'></caside>
				</el-aside>
				<el-main class='pt-0'>
				  <el-form ref="form" :model="form" v-bind:rules='rules' size='small'>
						<el-row v-bind:gutter="20">
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='name'>
									<el-input v-model="form.name" placeholder='商品名称'></el-input>
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='brand'>
									<el-select v-model="form.brand" placeholder="品牌">
										<option label='苹果' value='apple'></option>
										<option label='三星' value='sumsun'></option>
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
									<el-select v-model="form.presclass" placeholder="处方分类">
										<option label='处方' value='prescription'></option>
										<option label='非处方' value='overprescription'></option>
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
										v-bind:file-list='form.images'
										list-type="picture-card">
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
				</el-main>
			</el-container>
		</el-main>
	</el-container>	
</template>

<<style lang='stylus' scoped>
@import './index.styl'
</style>

<script src='./index.js'></script>