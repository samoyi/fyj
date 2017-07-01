<template>
    <div class="spec" v-if="productSpec">
        <h3>
            <i></i>
            <span>规格</span>
        </h3>
        <p v-html="productSpec[0]"></p>
        <i :style="{backgroundPosition:productSpec[1]}"></i><!--现在的图标是刀叉，以后可能还会变成其他的-->
        <ul>
            <li v-for="item in productSpec[2]">{{item}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: ["productSpec"],
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>

.spec{
    width: 100%; height: 139px;
    background: white;
    margin-top: 10px;
    overflow: hidden;
    position: relative;
    h3{
        margin-top: 20px;
        vertical-align: middle;
        font-size: 20px; line-height: 20px;
        position: relative;
        span{
            display: inline-block;
            position: absolute;
            left: 30px; top: 0px;
        }
        i{
            width: 22px; height: 22px;
            position: absolute;
            left: 5px; top: 0px;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                size: 761px 809px;
                position: -88px -183px;
            // -88px -155px 黑色的
            }
        }
    }
    >p{
        margin-left: 14px;
        font-size: 11px;
        color: #9b9b9b;
        margin-top: 56px;
    }
    >i{
        width: 22px; height: 22px;
        position: absolute;
        left: 14px; top: 79px;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
            size: 761px 809px;
        }
    }
    >ul{
        position: absolute;
        left: 44px; top: 72px;
        line-height: 18px;
        font-size: 11px;
        color: #9b9b9b;
    }
}
</style>
