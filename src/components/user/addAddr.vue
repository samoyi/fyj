<template>
    <section class="addAddr" :style="{height:sWinHeight}">
        <header>
            <span class="back" @click="back">返回</span>
            <h3>添加配送地址</h3>
            <span class="save" @click="save">保存</span>
        </header>
        <section>
            <div>
                姓名：
                <input type="text" v-model="name" @blur="checkName" @focus="getFocus('nameErr')" placeholder="收货人姓名" />
                <span class="error" v-show="nameErr">请填写姓名</span>
            </div>
            <div>
                手机：
                <input type="number" v-model="tel" @blur="checkTel" @focus="getFocus('telErr')" placeholder="收货人手机号" pattern="^1\d{10}$" />
                <span class="error" v-show="telErr">手机号码格式错误</span>
            </div>
            <div>
                地址：
                <region-selector :province="province" :city="city" :area="area"></region-selector>
                <input type="text" v-model="addr" @blur="checkAddr" @focus="getFocus('addrErr')" placeholder="详细地址" />
                <span class="error" v-show="addrErr">请输入完整地址</span>
            </div>
            <div>
                <input type="checkbox" v-model="isDefult" :checked="isDefult" id="default" /><label for="default">设为默认地址</label>
            </div>
        </section>
    </section>
</template>

<script>

import {nWindowHeight} from '../../js/common.js';
import regionSelector from './regionSelector.vue';

export default {
    data(){
        return {
            name: '',
            tel: '',
            province: 16,
            city: 220,
            area: null,
            addr: '',
            isDefult: true,
            // 提交时要要验证这三个err都是false。所以这里不能一开始就是false
            nameErr: null,
            telErr: null,
            addrErr: null,
            sWinHeight: nWindowHeight + 'px',
        };
    },
    components: {
        'region-selector': regionSelector,
    },
    methods: {
        // 失去焦点检查是否有正确输入
        checkName(){
            if (this.name.trim().length === 0){
                this.nameErr = true;
            }
        },
        checkTel(){
            if (!/^1\d{10}$/.test(this.tel)){
                this.telErr = true;
            }
        },
        checkAddr(){
            if (this.addr.trim().length === 0){
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
            if (this.nameErr === false && this.telErr === false && this.addrErr === false){
                if (!this.area){ // 要输入区
                    this.addrErr = true;
                    return;
                }

                let oNewAddr = {
                    'tel': this.tel,
                    'consignee': this.name,
                    'province': this.province,
                    'city': this.city,
                    'area': Number.parseInt(this.area),
                    'consigneeAddr': this.addr,
                    'isDefault': this.isDefult,
                };

                // 过滤掉{}之后，现有的有效地址
                let addrList = this.$parent.$parent.$parent.userData.addr.filter((item)=>item.consignee);
                if (this.isDefult){ // 新添加的设为默认地址
                    this.$parent.$parent.defaultAddrIndex = addrList.length;
                }
                addrList.push(oNewAddr);
                // 因为地址列表必须要有三个（空的用{}补），所以这里在实际地址的数组
                // 上用{}补全三项

                while (addrList.length < 3){
                    addrList.push({});
                }
                // this.$parent.$parent.$parent.addrList = addrList;
                this.$parent.$parent.$parent.userData.addr = addrList;

                let sURL = 'http://localhost/gits/fyj/data/ajax.php';
                let oPostBody = {
                    act: 'addAddr',
                    addr: JSON.stringify(oNewAddr),
                };

                this.$http.post(sURL, oPostBody, {emulateJSON: true})
                    .then(res=>{
                        // 创建为一个未支付的订单，该行为会同时删除购物车中已提交的商品
                        this.$store.commit('modifyAddrs', res.body);
                        this.$router.go(-1);
                    })
                    .catch(err=>{
                        throw new Error(err);
                    });
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
                // height: 30px;
            }
            .error{
                color: red;
                line-height: 44px;
                font-size: 12px;
            }
        }
        >div:last-child{
            border-bottom: none;
            position: relative;
            margin-top: 22px;
            >div{
                width: 94%;
                height: 26px;
                position: absolute;
                top: 10px;
                left: 64px;
            }
            >input{
                // position: absolute;
                // top: 50px;
            }
            .error{
                position: absolute;
                right: 14px;
                top: 86px;
            }
        }
    }
    >div{
        height: 44px;
        margin-top: 40px;
        background-color: white;
        line-height: 44px;
        padding-left: 14px;
        box-sizing: border-box;
    }
}
</style>
