<template>
	<div class="layTitle">
		<h2>{{ titleList }}</h2>
		<router-link to=""><span>{{ more }}</span><i class="fa fa-chevron-right"></i></router-link>
		
	</div>
</template>
<script>
export default {
	data(){
		return {

		}
	},
	props:{
		titleList:{
			type:[String,Number],
			default:"标题"
		},
		more:{
			type:[String,Number],
			default:"更多"
		}
	}
}
</script>
<style lang="scss" scoped>

.layTitle {
	overflow:hidden;
	margin-bottom:30px;
	h2 {
		font-size:20px;
		color:#555;
		float:left;
	}
	a {
		float:right;
		position:relative;
		padding-right:20px;
		span {
			float:left;
			line-height:27px;
		}
		i {
			font-size:12px;
			position:absolute;
			right:0;
			top:9px;
		}
	}
}

</style>