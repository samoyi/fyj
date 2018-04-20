<template>
    <section id="indexNewProducts" v-if="list">
        <h2>新品推荐</h2>
        <!-- 这里的key应该用id，但因为测试数据的蛋糕详情页只有两种，所以加随机数避免重复 -->
        <div v-for="item in list" :key="item.id+Math.random()">
            <router-link :to="'/detail/'+item.id">
                <img :src="item.url" :alt="item.name" />
            </router-link>
            <p class="title">{{item.name}}</p>
            <p class="des" v-html="item.des.replace(/&nbsp;/g, '')"></p>
            <p class="price">
                <span>¥</span>
                <span class="num">{{Number.parseFloat(item.price)}}</span>
                <span> / {{item.spec}}</span>
            </p>
            <div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    props: ['list'],
};

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";

#indexNewProducts{
    overflow: hidden;
    width: 96%; height: 1155px;
    position: relative; left: 2%;
    background: white;
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
        img{
            height: 163px;
        }
        p{
            text-align: left;
            margin-left: 14px;
        }
        .title{
            font-size: 20px;
            line-height: 28px;
            color: #1e1e1e;
            margin-top: 18px;
            width: 90%;
            margin-left: 5%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .des{
            font-size: 11px;
            line-height: 16px;
            height: 48px;
            overflow: hidden;
            color: #9b9b9b;
            margin-top: 10px;
            text-align: center;
            width: 90%;
            margin-left: 5%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                position: -14px -143px;
                size: 761px 809px;
            }
        }
        >div{
            width: 118px; height: 1px;
            background-color:  #e8e8e8;
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
