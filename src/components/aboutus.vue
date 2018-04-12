<template>
    <section id="aboutusPage">
        <app-header :index="4" :cart-amount="cartAmount"></app-header>
        <section class="aboutus">
            <div>
                <h3>浮.生六记</h3>
                <p>
                    相遇，相识，相知，相爱， 相守，相伴。<br />
                    所有故事总是从相遇开始，<br />
                    所有相见恨晚其实都是适逢其时。<br />
                    恰好你青春年少，恰好我风华正茂。<br />
                    你爱甜甜的乳酪，我爱可口的樱桃。<br />
                    刚刚好碰在一起，就成了最甜蜜动人的韵律。<br />
                    因为你要记得，<br />
                    遇见，只是一个开始，相伴才是最隽永的主题。
                </p>
                <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/aboutus/aboutus_01.jpg" alt="浮遇纪" />
            </div>
            <div>
                <h3>遇.逢知己</h3>
                <p>
                    就像抹茶和红豆相遇，香蕉恰巧遇上巧克力<br />
                    而我偏偏遇见你。<br />
                    你有没有见过抹茶和红豆缠绵？<br />
                    有没有见过住在芒果街上的慕斯小姐？<br />
                    漫漫浮生，沉醉味蕾。<br />
                    遇见心，方知味。
                </p>
                <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/aboutus/aboutus_02.jpg" alt="浮遇纪" />
            </div>
            <div>
                <h3>纪.录惊喜</h3>
                <p>
                    味觉挑剔到偏执，才刚好能呈现舌尖上的饕餮之旅。<br />
                    桃花酿酒，春水煎茶，<br />
                    我们想用水果乳酪幻化成甜蜜的魔法。<br />
                    这里有最文艺的甜点，也有最极致的舌尖盛宴，<br />
                    这里有最专业的团队，也有最新鲜的原味之美。<br />
                    这里有最真挚的告白，也有最让人放心的食材。<br />
                    浮生若有相遇，经年皆成欢喜。<br />
                    不忘初心，何时相遇都不算迟。
                </p>
                <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/Fuyj/aboutus/aboutus_03.jpg" alt="浮遇纪" />
            </div>
        </section>
        <app-bottom></app-bottom>
    </section>
</template>

<script>
import header from './common/header.vue';
import bottom from './common/bottom.vue';

export default {
    props: ['cartAmount'],
    data(){
        return {};
    },
    components: {
        'app-header': header,
        'app-bottom': bottom,
    },
};

</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
#aboutusPage{
    .aboutus{
        margin-top: $headerHeight;
        background: white;
        color: #9b9b9b;
        div{
            box-sizing: border-box;
            padding: 16px 14px 0 14px;
            margin-bottom: 24px;
            overflow: hidden;
            h3{
                line-height: 36px;
            }
            p{
                font-size: 12px;
                line-height: 20px;
            }
            img{
                width: 100%;
                margin-top: 14px;
            }
        }
        div:last-child{
            margin-bottom: 0;
        }
    }
}
</style>
