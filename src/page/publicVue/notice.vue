<template>
	<div class="notice" :style="width">
		<p>公告</p>
		<ul>
			<li v-for="(item,index) in dataList">
				<router-link :to="item.url"><em></em>{{ item.content }}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>

export default {
	name:"",
	data(){
		return {
			dataList:[
				{ content:"咨询过程中如何描述我的问题",url:"" },
				{ content:"如何选择我要咨询的律师？",url:"" },
				{ content:"电话咨询律师能给我们提供什么",url:"" }
			]
		}
	},
	props:["width"]
}

</script>
<style lang="scss" scoped>
.notice {
	border:1px solid #e4e4e4;
	padding:9px 14px;
	p {
		font-weight:bold;
		color:#555;
	}
	ul {
		margin-top:6px;
		li {
			a {
				padding-left:20px;
				display:block;
				position:relative;
				line-height:25px;
				em {
					width:4px;
					height:4px;
					border-radius:50%;
					background-color:#ccc;
					display:block;
					position:absolute;
					left:0;
					top:50%;
					margin-top:-2px;
				}
			}
		}
	}
}


</style>