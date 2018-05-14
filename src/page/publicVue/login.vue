<template>
	<div class="login">
		<div class="userHead">
			<img src="../../assets/images/userHeader.png">
		</div>
		<div class="loginWra">
			<form>
				<input type="text" placeholder="用户名">
				<input type="password" class="marTop_10" placeholder="登录密码">
				<div class="loginBtn marTop_10">
					<button>登录</button>
					<router-link to="/" @click.native.prevent="handleSubmit2">注册</router-link>
					<router-link to="/" @click.native.prevent="handleSubmit2">找回密码</router-link>
				</div>
			</form>
			<div class="share">
				<router-link v-for="(item,index) in shareList" :to="item.url" :style="item.distance" :key="index">
					<i :class="item.class"></i>
				</router-link>
<!-- 				<router-link :to=""><i class="fa fa-qq"></i></router-link>
				<router-link :to=""><i class="fa fa-weibo"></i></router-link> -->
<!-- 				<a href="" style="margin-left:48px;"><i class="fa fa-qq"></i></a>
				<a href="" style="margin-left:48px;"><i class="fa fa-weibo"></i></a> -->
			</div>
		</div>
	</div>
</template>
<script>
import {LoginUsers} from '../../mock/mock.js'
export default {
	name:"login",
	data(){
		return {
			shareList:[
				{ url:"/",class:"fa fa-wechat",distance:"background-color:#72ce60;" },
				{ url:"/",class:"fa fa-qq",distance:"margin-left:48px;background-color:#53b2fc;" },
				{ url:"/",class:"fa fa-weibo",distance:"margin-left:48px;background-color:#fe8180;" }
			]
		}
	},
	methods:{
		handleSubmit2(ev){
			console.log(111);
		}
	}
}

</script>
<style lang="scss" scoped>
.marTop_10 {margin-top:10px;}

.login {
	$border-color:#e8e6e5;
	width:285px;
	height:350px;
	background-color:rgba(255,255,255,0.9);
	position:absolute;
	top:0;
	right:50%;
	z-index:10;
	margin-right:-600px;
	.userHead {text-align:center;margin-top:40px;}
	.loginWra {
		form {
			padding:0 32px;
			margin-top:18px;
			input {
				width:200px;
				height:30px;
				display:block;
				border:1px solid $border-color;
				border-radius:2px;
				font-weight:bold;
				&:focus {
					border-color:red;
				}
			}
			.loginBtn {
				button {
					width:100px;
					height:30px;
					background-color:#fff;
					border:1px solid $border-color;
					cursor:pointer;
					&:hover {background-color:#f0f0f0;}
				}
				a {
					margin-left:14px;
					font-weight:bold;
					color:#999;
					&:hover {color:#cd0200;}
				}
			}
		}
	}
	.share {
		padding:0 32px;
		overflow:hidden;
		margin-top:20px;
		a {
			width:40px;
			height:40px;
			border-radius:50%;
			font-size:18px;
			background-color:#000;
			color:#fff;
			float:left;
			text-align:center;
			line-height:40px;
		}
	}
}
	
</style>