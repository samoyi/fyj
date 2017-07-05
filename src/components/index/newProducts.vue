<template>
    <section id="indexNewProducts" v-if="list">
        <h2>新品推荐</h2>
        <!-- <product-card v-for="item in list" :key="item[1]" :cur-card-info="item"></product-card> -->
        <div v-for="item in list" :key="item.name">
            <img :src="item.url" :alt="item.name" />
            <p class="title">{{item.name}}</p>
            <p class="des" v-html="item.des"></p>
            <p class="price">
                <span>¥</span>
                <span class="num">{{item.price}}</span>
                <span>{{item.spec}}</span>
            </p>
            <i></i>
            <div>
                <span></span>
            </div>
        </div>
    </section>
</template>

<script>
    // import productCard from "../common/productCard_big.vue";

    export default {
        props: ["list"],
        // components: {
        //     "product-card": productCard,
        // },
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#indexNewProducts{
    overflow: hidden;
    width: 96%; height: 1155px;
    position: relative; left: 2%;
    h2{
        font-size: $h2FontSize;
        height: 95px; line-height: 95px;
        text-align: center;
    }
    >div{
        margin-bottom: 20px;

        width: 100%; height: 340px;
        text-align: center;
        overflow: hidden;
        position: relative;
        >img{
            height: 163px;
        }
        >p{
            text-align: left;
            margin-left: 14px;
        }
        .title{
            font-size: 20px;
            line-height: 28px;
            color: #1e1e1e;
            margin-top: 18px;
        }
        .des{
            font-size: 11px;
            line-height: 16px;
            color: #9b9b9b;
            margin-top: 10px;
        }
        .price{
            font-size: 11px;
            color: #17919f;
            margin-top: 32px;
            .num{
                font-size: 18px;
            }
        }
        >i{
            width: 22px; height: 22px;
            position: absolute;
            right: 14px; bottom: 9px;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
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
    >div:last-child{
        margin-bottom: 0;
    }
}
</style>
