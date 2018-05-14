<template>
	<div class="aabb">
		<ul>
			<li v-for="(item,index) in leftNavData">
				<router-link :to="item.url"><i :style="item.ico"></i>{{ item.name }}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>

export default {
	name:"",
	data(){
		return {
			leftNavData: [
				{ name:'医疗',url:'/',ico:'background-position:-3px -2px;' },
				{ name:'法律',url:'/',ico:'background-position:-31px 0px;' },
				{ name:'人力资源',url:'/',ico:'background-position:-57px 0px;' },
				{ name:'企业文化',url:'/',ico:'background-position:-80px 0px;' },
				{ name:'财会',url:'/',ico:'background-position:-105px 0px;' },
				{ name:'国家政策',url:'/',ico:'background-position:-130px 0px;' },
				{ name:'互联网',url:'/',ico:'background-position:-156px 0px;' },
				{ name:'信息化',url:'/',ico:'background-position:-182px 0px;' },
				{ name:'职业发展',url:'/',ico:'background-position:-208px 0px;' },
				{ name:'工业4.0',url:'/',ico:'background-position:-233px 0px;' }
			]
		}
	}

}
</script>
<style lang="scss" scoped>
	.aabb {
		height:350px;
		position:absolute;
		top:0;
		left:50%;
		margin-left:-600px;
		z-index:20;
		width:150px;
		background-color:rgba(242,241,242,0.8);
		ul {
			li {
				a {
					line-height:35px;
					display:block;
					position:relative;
					padding-left:60px;
					i {
						width:26px;
						height:23px;
						display:block;
						position:absolute;
						left:28px;
						top:6px;
						background:url("../../assets/images/leftNavIco.png");
					}
					&:hover {
						background-color:#f2f1f2;

					}
				}
			}
		}
	}
</style>