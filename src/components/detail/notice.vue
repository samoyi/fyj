<template>
    <div class="notice">
        <h3>
            <i></i>
            <span>订购须知</span>
        </h3>
        <div class="notice1">
            <i></i>
            <p>
                请提前5小时预订，南京市内六区（建邺区、雨花台区、玄武区、秦淮区、鼓楼区、栖霞区）以及江宁区免费配送
            </p>
        </div>
        <div class="notice2">
            <i></i>
            <p>
                蛋糕在收到后请冷藏保存，2~3小时内使用最佳。0-4℃保藏，12小时，5℃最佳食用。
            </p>
        </div>
        <div class="notice3">
            <i></i>
            <p>
                订购超出规格的蛋糕，请与客服人员联系。<br />订购电话：<a href='tel:4006633677'>4006 633 677</a>
            </p>
        </div>
    </div>
</template>

<script>

export default {
    props: ["notice"],
    data() {
        return {
        }
    },
}
</script>

<style lang="scss" scoped>
.notice{
    width: 100%; height: 239px;
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
                position: -88px -211px;
            }
        }
    }
    >div{
        position: absolute;
        width: 90%;
        font-size: 11px;
        color: #9b9b9b;
        >i{
            width: 22px; height: 22px;
            position: absolute;
            left: 14px; top: 2px;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                size: 761px 809px;
            }
        }
        p{
            position: absolute;
            left: 42px; top: 0px;
            line-height: 18px;
            font-size: 11px;
            color: #9b9b9b;
            a{
                text-decoration: none;
                color: #9b9b9b;
            }
        }
    }
    .notice1{
        top: 60px;
        i{
            background-position: -88px -43px;
        }
    }
    .notice2{
        top: 120px;
        i{
            background-position: -88px -99px;
        }
    }
    .notice3{
        top: 180px;
        i{
            background-position: -88px -127px;
        }
    }

}
</style>
