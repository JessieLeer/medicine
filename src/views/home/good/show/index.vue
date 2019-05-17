<template>
  <el-container>
	  <el-header class='w-100'>
		  <cheader activeIndex='/'></cheader>
		</el-header>
	  <el-main>
		  <el-container direction='horizontal'>
				<el-main class='pt-0'>
				  <el-form ref="form" :model="form"  size='small'>
						<el-row v-bind:gutter="20">
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='name' label='商品名称'>
									{{form.name}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='brand' label='品牌'>
								  {{form.brand.name}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='cates' label='商品分类'>
								  {{form.category.name}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='code' label='助记码'>
								  {{form.code}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='numbering' label='产品编码'>
								  {{form.numbering}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='recnumber' label='批准文号'>
								  {{form.recnumber}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='manufacturer' label='生产厂家'>
								  {{form.manufacturer}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='specification' label='产品规格'>
								  {{form.specification}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='presclass' label='处方分类'>
								  {{form.presclass}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='formulation' label='剂型'>
								  {{form.formulation}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='prounit' label='产品单位'>
								  {{form.prounit}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item prop='erp' label='ERP编码'>
								  {{form.erp}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
							  <el-form-item prop='bagShl' label='件包装'>
								  {{form.bagShl}}
								</el-form-item>
							</el-col>
							<el-col :sm='12' :xs='24'>
								<el-form-item label='图片'>
								  <img v-for='(item,index) in form.image' v-bind:key='index' v-bind:src='serverUrl + item'>
								</el-form-item>
							</el-col>
							<el-col :span='24' class='f-tac'>
								<el-form-item>
									<el-button type='default' size='small' v-on:click='back'>返回</el-button>
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