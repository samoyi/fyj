<template>
    <section id="productPage">
        <app-header :index="2" :cart-amount="cartAmount"></app-header>
        <h2>| 遇见心  方知味 |<br />PRODUCTS</h2>
        <section class="list">
            <!-- 这里的key应该用id，但因为测试数据的蛋糕详情页只有两种，所以加随机数避免重复 -->
            <div class="product" v-for="(item,index) in list" :key="item.id+Math.random()">
                <router-link :to="'/detail/'+item.id">
                    <img :src="imgUrl(item, index)" :alt="item.name"
                        @error="recordIndex(index)" />
                </router-link>
                <p class="name">{{item.name}}</p>
                <p class="des" v-html="item.des.replace(/&nbsp;/g, '')"></p>
                <p class="price">
                    <span>¥</span>
                    <span class="num">{{Number.parseFloat(item.price)}}</span>
                    <span>/{{item.spec}}</span>
                </p>
            </div>
            <div style="clear:both;"></div>
        </section>
        <app-bottom></app-bottom>
    </section>
</template>

<script>

import header from './common/header.vue';
import bottom from './common/bottom.vue';

import failJPG from '../assets/fail.jpg';

export default {
    props: ['cartAmount'],
    data: function(){
        return {
            list: null,
            aErrorImageIndex: [],
        };
    },
    computed: {

    },
    components: {
        'app-header': header,
        'app-bottom': bottom,
    },
    mounted(){
        let sURL = 'http://localhost/gits/fyj/data/ajax.php?act=goods';
        this.$http.get(sURL).then(res=>{
            this.list = res.body;
        }, err=>{
            throw new Error(err);
        });
    },
    methods: {
        // 记录加载图片失败的序号
        recordIndex(index){
            this.aErrorImageIndex.push(index);
        },
        // 如果图片加载失败，则统一使用提示失败的图片
        imgUrl(item, index){
            if (this.aErrorImageIndex.includes(index)){
                return failJPG;
            }
            else {
                return item.url;
            }
        },
    },
};

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#productPage{
    H2{
        font-size: 14px;
        line-height: 20px;
        position: absolute;
        top: 88px;
        width: 100%;
        text-align: center;
    }

    .list{
        width: 94%;
        margin: 155px auto auto 3%;
        >div:nth-child(even){
            margin-left: 2%;
        }
        .product{
            position: relative;
            background-color: white;
            float: left;
            margin-bottom: 5px;
            width: 49%; height: 263px;
            img{
                width: 100%; height: 172px;
            }
            >p{
                text-align: left;
                margin-left: 14px;
            }
            .name{
                text-align: left;
                font-size: 12px;
                margin-top: 12px auto auto 14px;
            }
            .des{
                font-size: 11px;
                color: #9b9b9b;
                margin: 10px auto auto 14px;
                height: 24px;
                overflow: hidden;
                line-height: 12px;
            }
            .price{
                font-size: 12px;
                color: #17919f;
                margin: 10px auto auto 14px;
            }
            >i{
                width: 22px; height: 22px;
                position: absolute;
                right: 14px; bottom: 9px;
                background:{
                    image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                    position: -14px -143px;
                    size: 761px 809px;
                }
            }
            >div{
                width: 118px; height: 1px;
                background-color:  #9b9b9b;
                position: absolute;
                right: 14px; bottom: 0px;
                span{
                    display: block;
                    width: 25px; height: 100%;
                    float: right;
                    background-color: #1e1e1e;
                }
            }
        }
    }
}
</style>
