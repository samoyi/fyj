<template>
    <section id="questionsPage">
        <app-header></app-header>
        <div class="logoArea">
            <i class="logo"></i>
        </div>
        <section class="questions">
            <div>
                <h3 @click="displayQuestion(0)">关于订单</h3>
                <div v-show="0===nQuestionIndex">
                    <div>
                        <h4>当天可以订购蛋糕么？</h4>
                        <p>
                            浮遇纪目前配送南京主城区（建邺区、雨花台区、玄武区、秦淮区、鼓楼区）及江宁地区内，可提前五个小时在官网或微信公众号汇总下订单，最晚为晚上5点之前下单可预定当天蛋糕，五个小时送到。
                        </p>
                    </div>
                    <div>
                        <h4>未注册的客户是否能浏览商品并下单订购？</h4>
                        <p>
                            不可以。如果您没有注册，在您选购好相关产品之后，系统会提示您输入您的手机号和密码即可。
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 @click="displayQuestion(1)">关于产品</h3>
                <div v-show="1===nQuestionIndex">
                    <div>
                        <h4>蛋糕收到后，如何保存？</h4>
                        <p>
                            浮遇纪的蛋糕均由烘焙师手工定制，选自天然乳脂鲜奶油，甄选新鲜水果，为了保证食用安全以及良好的口感，请在收到蛋糕后冷藏保存，保持温度在
                        </p>
                    </div>
                    <div>
                        <h4>订购蛋糕需要提前多久？</h4>
                        <p>
                            1-3磅的蛋糕需要提前5个小时预订，3磅以上蛋糕需要提前24小时预订，10磅及磅以上的蛋糕需提前72小时预订。
                        </p>
                    </div>
                    <div>
                        <h4>浮遇纪的蛋糕是否是现做的？</h4>
                        <p>
                            浮遇纪根据客户订单新鲜制作
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 @click="displayQuestion(2)">下单配送</h3>
                <div v-show="2===nQuestionIndex">
                    <div>
                        <h4>蛋糕的购买地址不在南京，能够下单买蛋糕么？</h4>
                        <p>
                            浮遇纪的蛋糕类暂时只在南京主城区内配送，包括玄武区，白下区，秦淮区，建邺区，鼓楼区，下关区，栖霞区，雨花台区和江宁区，且配送免费。浮遇纪的“礼遇”类产品，例如酒，鲜花等，可以支持全国地区邮递配送（除西藏、青海、宁夏、内蒙古等省份）。
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 @click="displayQuestion(3)">问题协调</h3>
                <div v-show="3===nQuestionIndex">
                    <div>
                        <h4>需要临时出门或有急事，在原预定时间无法收蛋糕，怎么办？</h4>
                        <p>
                            若因为特别原因，您想延迟收蛋糕时间或者更换收蛋糕的地址，请务必在收蛋糕的三个小时之前，通过浮遇纪微信公众号或客服电话及时与浮遇纪客服联系。
                        </p>
                    </div>
                    <div>
                        <h4>商品在配送过程中损坏怎么办？</h4>
                        <p>
                            建议您在签收蛋糕时开箱检查，如果发现有损坏，请直接拒收，相关人员将马上与您取得联系，确认为您重新安排发货或者办理退货。
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <app-bottom></app-bottom>
    </section>
</template>

<script>
    import header from "./common/header.vue";
    import bottom from "./common/bottom.vue";

    export default {
        data: function () {
            return {
                nQuestionIndex: null,
            }
        },
        components: {
          "app-header": header,
          "app-bottom": bottom,
        },
        methods: {
            displayQuestion(index){
                this.nQuestionIndex = index===this.nQuestionIndex ? null : index;
            },
        },
    };


</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#questionsPage{
    .logoArea{
        height: 275px;
        background: white;
        margin-top: $headerHeight;
        position: relative;
        .logo{
            width: 160px; height: 160px;
            position: absolute; margin: auto; top: 0; right: 0; bottom: 0; left: 0;
            background:{
                image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/sprite.png");
                position: -341px -389px;
                size: 761px 809px;
            }
        }
    }
    .questions{
        >div{
            border-bottom: 1px solid #9b9b9b;
            background:#f6f6f6;
            h3{
                background: white;
                height: 45px;
                line-height: 45px;
                box-sizing: border-box;
                padding-left: 14px;
                color: #1e1e1e;
            }
            >div{
                box-sizing: border-box;
                padding: 35px 0 0 14px;
                font-size: 12px;
                >div{
                    margin-bottom: 35px;
                    h4{
                        color: #1e1e1e;
                        margin-bottom: 14px;
                    }
                    p{
                        color: #9b9b9b;
                        line-height: 14px;
                    }
                }
            }
        }
    }
}
</style>
