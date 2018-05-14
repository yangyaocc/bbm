<template>
	<div class="select">
		<p>--请选择--</p>
		<ul>
			<li v-for="(item,index) in seldata">{{ item }}</li>
		</ul>
	</div>
</template>
<script>
export default {
	name:"selectList",
	data(){
		return {
			
		}
	},
	props:["seldata"],
	methods: {
	}
}	
</script>
<style lang="scss" scoped>

.select {
	$borderColor:#e7e7e7;
	width:100px;
	border:1px solid $borderColor;
	p {border-bottom:1px solid $borderColor;line-height:25px;}
	ul {
		li {line-height:25px;cursor:pointer;border-bottom:1px solid $borderColor;}
	}
}	

</style>