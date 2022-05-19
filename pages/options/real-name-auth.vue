<template>
	<view style="margin: 20px;">
    <uni-forms :modelValue="formData" :rules="rules">
      <uni-forms-item label="姓名" name="name">
        <uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
      </uni-forms-item>
      <uni-forms-item label="身份证号" name="id_card">
        <uni-easyinput type="text" v-model="formData.id_card" placeholder="请输入身份证号" />
      </uni-forms-item>
      <uni-forms-item label="手机号" name="mobile">
        <uni-easyinput type="text" v-model="formData.mobile" placeholder="请输入手机号" />
      </uni-forms-item>
      <uni-forms-item label="验证码" name="code">
        <uni-easyinput type="text" v-model="formData.code" placeholder="请输入验证码" />
        <button @click="getCode" class="code-button">获取验证码(60)</button>
      </uni-forms-item>
      <uni-forms-item>
        <button @click="submit" class="submit-button">认证</button>
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
          id_card: '',
          mobile: '',
          code: ''
        },
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.code-button {
  color: #FFFFFF;
  background-color: #b2b2b2;
  font-size: 12px;
  margin: 20px;
  width: 125px;
}

.submit-button {
  color: #FFFFFF;
  background-color: #0A98D5;
  font-size: 16px;
  margin: 20px;
}
</style>
