<template>
  <view style="margin: 20px;">
		<uni-forms :modelValue="formData">
      <uni-forms-item label="法人姓名" name="name">
        <uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
      </uni-forms-item>
      <uni-forms-item label="法人手机号" name="phone">
        <uni-easyinput type="text" v-model="formData.phone" placeholder="请输入法人手机号"/>
      </uni-forms-item>
      <uni-forms-item label="法人身份证" name="id_card">
        <uni-easyinput type="text" v-model="formData.id_card" placeholder="请输入法人身份证"/>
      </uni-forms-item>
      <uni-forms-item label="营业执照名称" name="license_name">
        <uni-easyinput type="text" v-model="formData.license_name" placeholder="请输入营业执照"/>
      </uni-forms-item>
      <uni-forms-item label="营业执照号" name="license_no">
        <uni-easyinput type="text" v-model="formData.license_no" placeholder="请输入营业执照号"/>
      </uni-forms-item>
      <uni-forms-item label="营业执照图片" name="license_img">
        <view class="example-body">
          <uni-file-picker
              v-model="formData.license_img"
              fileMediatype="image"
              mode="grid"
              :limit="1"
              @select="select"
              @progress="progress"
              @success="success"
              @fail="fail"
          />
        </view>
      </uni-forms-item>
    </uni-forms>
	</view>
</template>

<script>
  export default {
    data() {
			return {
        formData: {
          name: '',
          phone:'',
          id_card:'',
          license_name:'',
          license_no:'',
          license_img:''
        },
			}
		},
		methods: {
      // 获取上传状态
      select(e){
        console.log('选择文件：',e)
      },
      // 获取上传进度
      progress(e){
        console.log('上传进度：',e)
      },

      // 上传成功
      success(e){
        console.log('上传成功',e)
      },

      // 上传失败
      fail(e){
        console.log('上传失败：',e)
      }
		}
	}
</script>

<style>

</style>
