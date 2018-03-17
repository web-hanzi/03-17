<template>
	<div class="tabbarWrap">
	<!-- 确定隐藏/显示设定一个mark值 -->
		<Item txt="首页" mark="home" :sel="selected" @c="getVal">
			<img src="../assets/img/10.png" alt="" slot="img1">
			<img src="../assets/img/11.png" alt="" slot="img2">
		</Item>
		<Item txt="微淘" mark="weitao" :sel="selected" @c="getVal">
			<img src="../assets/img/2.png" alt="" slot="img1">
			<img src="../assets/img/3.png" alt="" slot="img2">
		</Item>
		<Item txt="发现" mark="faxian" :sel="selected" @c="getVal">
			<img src="../assets/img/4.png" alt="" slot="img1">
			<img src="../assets/img/5.png" alt="" slot="img2">
		</Item>
		<Item txt="购物车" mark="shopping" :sel="selected" @c="getVal">
			<img src="../assets/img/6.png" alt="" slot="img1">
			<img src="../assets/img/7.png" alt="" slot="img2">
		</Item>
		<Item txt="我的商城" mark="mine" :sel="selected" @c="getVal">
			<img src="../assets/img/8.png" alt="" slot="img1">
			<img src="../assets/img/9.png" alt="" slot="img2">
		</Item>
	</div>
</template>

<script>
import Item from '../components/item.vue'
export default{
	components:{
		Item
	},
	data:function(){
		return {
			selected:"home"
		}
	},
	methods:{
		getVal:function(val){
			//val就是子组件点击传过来的值
			this.selected = val
		}
	}
}
</script>
<style>
	.tabbarWrap{width: 100%;position: fixed;bottom: 0;border-top: 1px solid #ccc;}
</style>
