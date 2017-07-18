<template>
    <section class="orderInfo" :list="orderInfo" :user-data="userData">
        <div class="title">
            <span>购物清单</span>
            <span>共计 {{amount}} 件产品</span>
        </div>
        <div class="productsWrapper">
            <ul class="products" :style="{width: (102+10)*(orderInfo.list.length) + 'px'}">
                <li v-for="item in orderInfo.list">
                    <img :src="item.thumbnail" :alt="item.name"/>
                    <div class="info">
                        <span>{{item.spec}}</span>
                        <br/>
                        <span>¥ {{item.price}}×{{item.amount}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="addr">
            <span>{{selectedAddr.consignee}}</span>
            <span>{{selectedAddr.tel}}</span>
            <span>{{selectedAddr.addr}}</span>
            <span class="arrow" @click="displayAddrSelector">&gt;</span>
            <div class="addrSelector" v-show="bAddrSelectorDisplay">
                <div v-for="(item,index) in userData.addr" v-if="item.tel">
                    <span>{{item.consignee}}</span>
                    <span>{{item.tel}}</span>
                    <span>{{item.addr}}</span>
                    <input type="radio" name="addr" :value="index" @click="seletcAddr(index)" :checked="item.isDefault" />
                </div>
                <router-link class="addAddr" to="/user/addAddr">+ 新增收货地址</router-link>
            </div>
        </div>
        <div class="time">
            <span @click="displayDatePicker">送货时间</span>
            <date-picker class="date-picker" v-show="bDatePickerDispaly"></date-picker>
            <span class="arrow" @click="displayDatePicker">&gt;</span>
        </div>
    </section>
</template>

<script>

    import {nWindowHeight} from "../../js/common.js";
    import datepicker from "./datepicker.vue";

    export default {
        props: ["orderInfo", "userData"],
        data: function () {
            return {
                amount: this.orderInfo.list.length,
                bDatePickerDispaly : false,
                bAddrSelectorDisplay: false,
                sWinHeight: nWindowHeight+"px",
                selectedAddr: {},
            };
        },
        computed: {
            oDefaultAddr(){
                return this.userData.addr.find((item)=>item.isDefault);
            },
            // selectedAddr(index){
            //     // return this.userData.addr.find(function(item){
            //     //     return item.isDefault;
            //     // });
            //     this.selectedAddr = this.userData.addr[index];
            // },
        },
        methods: {
            displayDatePicker(){
                this.bDatePickerDispaly = !this.bDatePickerDispaly;
            },
            displayAddrSelector(){
                this.bAddrSelectorDisplay = true;
            },
            seletcAddr(index){
                this.selectedAddr = this.userData.addr[index];
                this.bAddrSelectorDisplay = false;
            },
        },
        components: {
            "date-picker": datepicker,
        },
        mounted(){
            this.selectedAddr = this.userData.addr.find(function(item){
                return item.isDefault;
            });
        }
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.orderInfo{
    .title{
        width: 100%;
        line-height: 41px; height: 41px;
        background-color: white;
        margin-top: 10px;
        span{

        }
        span:first-child{
            margin-left: 14px;
        }
        span:last-child{
            margin-right: 14px;
            color: #9b9b9b;
        }
    }
    .productsWrapper{
        width: 100%; height: 102px;
        overflow: scroll;
        margin-top: 10px;
        .products{
            height: 100%;
            li{
                width: 102px; height: 100%;
                margin-right: 10px;
                position: relative;
                float: left;
                img{
                    width: 100%; height: 100%;
                }
                .info{
                    width: 100%; height: 40%;
                    position: absolute; bottom: 0;
                    background-color: rgba(0, 0, 0, 0.4);
                    color: white;
                    font-size: 12px;
                    line-height: 16px;
                    box-sizing: border-box;
                    padding: 6px 0 0 6px;
                }
            }
        }
    }
    .addr, .time{
        background: white;
        margin-top: 10px;
        font-size: 12px;
        line-height: 16px;
        padding: 10px 0 10px 10px;
        box-sizing: border-box;
        position: relative;
        border-bottom: 1px solid #dddddd;
        .arrow{
            position: absolute;
            right: 14px;
        }
    }
    .addr{
        .addrSelector{
            width: 100%;
            background: white;
            height: 100px;
            div{
                border-top: 1px solid #dddddd;
                width: 96%;
                right: 28px;
                line-height: 28px;
            }
            div:first-child{
                margin-top: 20px;
            }
        }
    }
    .time{
        .date-picker{
            width: 94%;
        }
    }
}
</style>
