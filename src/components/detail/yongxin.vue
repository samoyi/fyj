<!-- 用心 -->
<template>
    <div class="yongxin" v-if="yongxin">
        <h3>
            <i></i>
            <span>用心</span>
        </h3>
        <p v-html="yongxin"></p>
    </div>
</template>

<script>

export default {
    props: {
        yongxin: {
            type: String,
        },
    },
    data(){
        return {};
    },
};
</script>

<style lang="scss" scoped>

.yongxin{
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
                image: url("http://localhost/gits/fyj/data/image/icons/sprite.png");
                size: 761px 809px;
                position: -88px -155px;
            }
        }
    }
    >p{
        margin-left: 4%; width: 92%;
        font-size: 11px; line-height: 18px;
        color: #9b9b9b;
        margin-top: 56px;
    }
}
</style>
