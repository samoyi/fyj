<template>
    <section>
        <p>
            绑定手机号码后可以进行购买操作<br />
            如果之前用手机号注册过，请输入注册时的手机号，这里会同步已有的信息
        </p>
        <div class="form">
            <input v-model="tel" class="tel" type="number" placeholder="手机号码" />
            <input v-model="code" class="code" type="number" placeholder="验证码" />
            <input @click="sendCode" class="sendCode" type="button" value="发送验证码" />
            <input @click="sendTel" class="sendTel" type="button" value="绑定手机号" />
        </div>
        <p class="err" v-show="err">{{err}}</p>
        <p class="codeTip" v-show="codeTip">
            <span v-show="second">{{second}} </span>
            <span>{{codeTip}}</span>
        </p>
    </section>
</template>

<script>

    let sHash = location.hash,
        sOpenID = sHash.slice(sHash.indexOf("openid")+7);


    import {AJAX_GET, AJAX_POST} from "../js/common.js";


    export default {
        data: function () {
            return {
                tel: "",
                code: "",
                err: null,
                second: 12,
                codeTip: "",
            }
        },
        methods: {
            sendCode(){
                if( !/^1\d{10}$/.test(this.tel) ){
                    this.err = "手机号码格式错误";
                }
                else{
                    let sURL = "http://www.fuyj.com.cn/ajax/getPhone.php?act=vcode&phone=" + this.tel,
                        fnSucceccCallback = ()=>{
                            this.codeTip = "秒后还没收到就重试";
                            let timer = setInterval(()=>{
                                    if(!--this.second){
                                        clearInterval(timer);
                                        this.codeTip = "没收到验证码请重试";
                                    }
                                }, 1000);
                        },
                        fnFailCallback = (status)=>{alert("发送失败，请重试");};
                    AJAX_GET(sURL, fnSucceccCallback, fnFailCallback);
                }
            },
            sendTel(){
                if( !/^1\d{10}$/.test(this.tel) ){
                    this.err = "手机号码格式错误";
                }
                else if(!this.code.trim()){
                    this.err = "没写验证码";
                }
                else{
                    let sURL = "http://www.fuyj.com.cn/ajax/getPhone.php",
                        data = "act=phone&phone=" + this.tel + "&vCode=" + this.code + "&openid=" + sOpenID,
                        fnSucceccCallback = (status)=>{
                            alert("检查验证码是否正确。正确则跳转到订单页面");
                        },
                        fnFailCallback = (status)=>{alert("发送失败，请重试");};
                    AJAX_POST(sURL, data, fnSucceccCallback, fnFailCallback);
                }
            },
        },
    };

</script>
<style lang="scss" scoped>

</style>
