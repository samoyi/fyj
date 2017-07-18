<template>
    <section class="addAddr" :style="{height:sWinHeight}">
        <header>
            <span class="back" @click="back">返回</span>
            <h3>添加配送地址</h3>
            <span class="save" @click="save">保存</span>
        </header>
        <section>
            <div>姓名： <input type="text" v-model="name" @blur="checkName" @focus="getFocus('nameErr')" placeholder="收货人姓名" :value="name" /><span class="error" v-show="nameErr">请填写姓名</span></div>
            <div>手机： <input type="number" v-model="tel" @blur="checkTel" @focus="getFocus('telErr')" placeholder="收货人手机号" :value="tel" pattern="^1\d{10}$" /><span class="error" v-show="telErr">手机号码格式错误</span></div>
            <div>地址： <input type="text" v-model="addr" @blur="checkAddr" @focus="getFocus('addrErr')" placeholder="详细地址" :value="addr" /><span class="error" v-show="addrErr">请填写详细地址</span></div>
        </section>
        <div>
            <input type="checkbox" v-model="isDefult" :checked="isDefult" id="default" /><label for="default">设为默认地址</label>
        </div>
    </section>
</template>

<script>

    import {nWindowHeight} from "../../js/common.js";

    export default {
        data: function () {
            return {
                name: "",
                tel: "",
                addr: "",
                isDefult: true,
                // 提交时要要验证这三个err都是false。所以这里不能一开始就是false
                nameErr: null,
                telErr: null,
                addrErr: null,
                sWinHeight: nWindowHeight+"px",
            };
        },
        methods: {
            // 失去焦点检查是否有正确输入
            checkName(){
                if( 0 === this.name.trim().length){
                    this.nameErr = true;
                }
            },
            checkTel(){
                if( !/^1\d{10}$/.test(this.tel) ){
                    this.telErr = true;
                }
            },
            checkAddr(){
                if( 0 === this.addr.trim().length){
                    this.addrErr = true;
                }
            },
            // 获得焦点让错误提示消失
            getFocus(err){
                this[err] = false;
            },
            back(){
                history.back();
            },
            save(){

                if(false===this.nameErr && false===this.telErr && false===this.addrErr){
                    let oNewAddr = {
                        "tel": this.tel,
                        "consignee": this.name,
                        "addr": this.addr,
                        "isDefault": this.isDefult,
                    };

                    // 过滤掉{}之后，现有的有效地址
                    let addrList = this.$parent.$parent.$parent.userData.addr.filter((item)=>item.consignee);
                    if(this.isDefult){ // 新添加的设为默认地址
                        this.$parent.$parent.defaultAddrIndex = addrList.length;
                    }
                    addrList.push(oNewAddr);
                    // 因为地址列表必须要有三个（空的用{}补），所以这里在实际地址的数组
                    // 上用{}补全三项

                    while(addrList.length<3){
                        addrList.push({});
                    }
                    // this.$parent.$parent.$parent.addrList = addrList;
                    this.$parent.$parent.$parent.userData.addr = addrList;
                    console.log(this.$parent.$parent.$parent.userData);
                    console.log("提交地址列表")
                    history.back();
                }
            },
        },
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.addAddr{
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    header{
        width: 100%;
        height: $headerHeight;
        background-color: white;
        .back{
            line-height: 55px;
            position: absolute;
            left: 14px;
        }
        h3{
            line-height: 55px;
            display: block;
            text-align: center;
            font-size: 16px;
        }
        .save{
            line-height: 55px;
            position: absolute;
            right: 14px;
            top: 0;
        }
    }
    section{
        height: 132px;
        margin-top: 10px;
        background-color: white;
        >div{
            height: 44px; line-height: 44px;
            border-bottom: 1px solid #9b9b9b;
            box-sizing: border-box;
            padding-left: 14px;
            input{
                border: none;
                height: 30px;
            }
        }
        >div:last-child{
            border-bottom: none;
        }
        .error{
            color: red;
            line-height: 44px;
            font-size: 12px;
            float: right;
            margin-right: 14px;
        }
    }
    >div{
        height: 44px;
        margin-top: 10px;
        background-color: white;
        line-height: 44px;
        padding-left: 14px;
        box-sizing: border-box;
    }
}
</style>
