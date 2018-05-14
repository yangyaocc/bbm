<template>
    <div class="zjList">
        <ul>
            <li v-for="(item,key) in doctorData" :class="key ==0? '':'marLeft20' ">
                <div class="doctor">
                    <div class="docHeader"><img :src="item.urlHeader"></div>
                    <div class="docName">
                        <h2>{{ item.name }}</h2>
                        <p>{{ item.position }}</p>
                    </div>
                    <div class="company">
                        <p>{{ item.department }}</p>
                        <p>{{ item.address }}</p>
                    </div>
                </div>
                <div class="good">
                    <p>擅长：{{ item.beGood }}</p>
                    <span>已服务  <em>{{ item.people }}</em>人</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'fw',
    data() {
        return {
            doctorData:[
                {
                    urlHeader:require("../../../assets/images/head1.jpg"),
                    name:"拜欣合",
                    position:"主任医生",
                    department:"疼痛科",
                    address:"西安交通大学第一附属医院",
                    beGood:"手足先天畸形的矫治、儿童手外科、周围神经电生理检查与诊断",
                    people:"685"
                },
                {
                    urlHeader:require("../../../assets/images/head2.jpg"),
                    name:"蒲承宣",
                    position:"副主任医生",
                    department:"疼痛科",
                    address:"西安交通大学第一附属医院",
                    beGood:"周围神经电生理检查与诊断",
                    people:"685"
                },
                {
                    urlHeader:require("../../../assets/images/head3.jpg"),
                    name:"公良涵亮",
                    position:"专家医生",
                    department:"疼痛科",
                    address:"西安交通大学第一附属医院",
                    beGood:"儿童手外科",
                    people:"685"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.marLeft20 {margin-left:20px;}
.zjList {
    ul {
        li {
            width:283px;
            height:355px;
            float:left;
            border:1px solid #eee;
            .doctor {
                padding:30px 0 16px 0;
                text-align:center;
                .docHeader {
                    img {
                        width:80px;
                        height:80px;
                        border-radius:50%;
                    }
                }
                .docName {
                    h2 {
                        color:#55626c;
                        font-size:20px;
                        line-height:30px;
                        margin-top:18px;
                    }
                    p {
                        color:#55626c;
                        font-weight:bold;
                    }
                }
                .company {
                    margin-top:20px;
                    p {
                        font-size:12px;
                        color:#999;
                    }
                }
            }
            .good {
                padding:20px 0;
                border-top:1px solid #eee;
                p {
                    font-size:12px;
                    padding:0 28px;
                    height:34px;
                    overflow:hidden;
                }
                span {
                    display:block;
                    text-align:center;
                    font-size:12px;
                    margin-top:16px;
                    em {
                        color:#ff594f;
                        font-weight:bold;
                    }
                }
            }
        }
    }
}  
</style>