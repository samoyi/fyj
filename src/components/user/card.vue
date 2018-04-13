<template>
    <section class="card">
        <div class="noCard" v-if="!list">
            <div></div>
            <p>
                很抱歉<br />您当前还没有优惠券
            </p>
        </div>
        <ul class="cardList" v-if="list">
            <li v-for="item in list" :key="item.name">
                <span class="expire">有效期至： {{item.expire}}</span>
                <div class="name">{{item.name}}</div>
            </li>
        </ul>
    </section>
</template>

<script>

export default {
    props: ['list'],
    data(){
        return {};
    },
};

</script>

<style lang="scss" scoped>
.card{
    .noCard{
        text-align: center;
        div{
            margin: 64px auto auto auto;
            width: 87px; height: 87px;
            border: none;
            background:{
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                size: 761px 809px;
                position: -198px -112px;
            }
        }
        p{
            margin-top: 18px;
            color: #9b9b9b;
            font-size: 12px;
            line-height: 16px;
        }
    }
    .cardList{
        background-color: #f6f6f6;
        >li{
            width: 325px; height: 130px;
            font-size: 12px;
            color: #9b9b9b;
            background:{
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                size: 761px 809px;
                position: -341px -15px;
            }
            position: relative;
            margin: 15px auto auto auto;
            .expire{
                top: 17px;
                left: 20px;
                position: absolute;
            }
            .name{
                width: 168px; height: 48px; line-height: 48px;
                position: absolute;
                top: 58px;
                left: 20px;
                font-size: 16px;
                color: #ffa706;
                text-align: center;
            }
        }
    }
}
</style>
