<template>
    <section class="addr">
        <div class="noAddr" v-if="!list">
            <div></div>
            <p>
                暂时还没有地址
            </p>
        </div>
        <ul class="addrList" v-if="list">
            <li v-for="(item,index) in list">
                <span class="name-tel">{{item.name}}  {{item.tel}}</span>
                <span class="addr">{{item.addr}}</span>
                <div class="default">
                    <input type="radio" :checked="item.idDefault" name="isDefault" :id="index" /><label :for="index">  默认地址</label>
                </div>
                <span class="delete">删除地址</span>
            </li>
        </ul>
        <div class="add">
            <!-- <span @click="addAddr">+ 新增收货地址</span> -->
            <router-link class="addAddr" to="/addAddr">+ 新增收货地址</router-link>
        </div>
    </section>
</template>

<script>

    export default {
        props: ["list"],
        data: function () {
            return {};
        },
        methods: {
            addAddr(){

            },
        },
    };

</script>

<style lang="scss" scoped>
.addr{
    .noAddr{
        text-align: center;
        div{
            margin: 64px auto auto auto;
            width: 87px; height: 87px;
            border: none;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                size: 761px 809px;
                position: -198px -209px;
            }
        }
        p{
            margin-top: 18px;
            color: #9b9b9b;
            font-size: 12px;
            line-height: 16px;
        }
    }
    .addrList{
        background-color: #f6f6f6;
        >li{
            width: 325px; height: 101px;
            font-size: 12px;
            position: relative;
            margin: 10px auto auto auto;
            background-color: white;
            >span{
                position: absolute;
            }
            .name-tel{
                top: 28px; left: 14px;
            }
            .addr{
                top: 48px; left: 14px;
            }
            div{
                position: absolute;
                left: 180px; bottom: 12px;
                width: 65px;
                text-align: right;
                input{
                    position: absolute;
                    left: 0;
                    margin: 0;
                }
            }
            .delete{
                bottom: 12px; right: 14px;
            }
        }
    }
    .add{
        width: 100%; height: 63px;
        position: fixed; bottom: 0;
        .addAddr{
            display: block;
            width: 217px; height: 40px; line-height: 40px;
            text-align: center;
            position: absolute;
            top: 12px; left: 50%; margin-left: -108px;
            text-decoration: none;
            color: white;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                size: 761px 809px;
                position: -341px -298px;
            }
        }
    }
}
</style>
