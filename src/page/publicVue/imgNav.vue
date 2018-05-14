<template>
	<div class="imgNav">
		<div class="consultationList">
			<ul>
				<li v-for="(item,index) in consultationList" :style="item.listBgColor" :class="index == 0?'':'marLeft'">
					<div class="titleList">
						<h2>{{ item.title }}</h2>
						<p>{{ item.subTitle }}</p>
						<router-link :to="item.url" :style="item.btnColor">{{ item.btnRouter }}</router-link>
					</div>
					<div class="bgImg" :style="item.bgStyle"><img :src="item.bgImg"></div>
				</li>
			</ul>
		</div>
		<Notice :width="width"/>
	</div>
</template>
<script>
import Notice from "./notice"
export default {
	name:"imgNav",
	data(){
		return {
			consultationList:[
				{
					url:"/",
					title:"与医生",
					subTitle:"在线问诊",
					btnRouter:"按科室找医生",
					bgImg:require("../../assets/images/btn1.png"),
					bgStyle:"right:22px;",
					listBgColor:"background-color:#91abff",
					btnColor:"background-color:#8188ff"
				},
				{
					url:"/",
					title:"与律师",
					subTitle:"在线分析",
					btnRouter:"按领域找律师",
					bgImg:require("../../assets/images/btn2.png"),
					bgStyle:"right:18px;",
					listBgColor:"background-color:#ffc763",
					btnColor:"background-color:#ffa842"
				},
				{
					url:"/",
					title:"专家实名制认证",
					subTitle:"专业可信赖",
					btnRouter:"申请入驻",
					bgImg:require("../../assets/images/btn3.png"),
					bgStyle:"right:0;",
					listBgColor:"background-color:#ff9671",
					btnColor:"background-color:#ff834d"
				}
			],
			width:"width:420px;float:left;margin-left:25px;"
		}
	},
	components:{
		Notice
	}
}

</script>
<style lang="scss" scoped>
.marLeft {margin-left:25px;}
.imgNav {
	overflow:hidden;
	margin-top:20px;
	.consultationList {
		float:left;
		ul {
			height:120px;
			li {
				color:#fff;
				width:185px;
				height:88px;
				padding:16px 20px;
				float:left;
				position:relative;
				.titleList {
					float:left;
					h2 {
						font-size:20px;
						line-height:25px;
					}
					p {
						line-height:25px;
						font-size:16px;
					}
					a {
						width:100px;
						height:30px;
						border-radius:3px;
						display:block;
						color:#fff;
						text-align:center;
						line-height:30px;
						background-color:#8188ff;
						margin-top:8px;
					}
				}
				.bgImg {
					position:absolute;
					right:22px;
					bottom:0;
				}
			}
		}
	}
}


</style>