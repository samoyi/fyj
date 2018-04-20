<template>
    <section id="content">
        <cLoadingPage></cLoadingPage>
        <router-view></router-view>
    </section>
</template>

<script>
import cLoadingPage from './components/loading.vue';

export default {
    data(){
        return {
            siteTitle: '浮遇纪',
            // addrList: [],
        };
    },
    components: {
        cLoadingPage,
    },
    mounted(){
        // 加载用户数据
        let sURL = 'http://localhost/gits/fyj/data/ajax.php?act=user&tel=18009';
        this.$http.get(sURL).then(res=>{
            this.$store.commit('loadUser', res.body);
        }, err=>{
            throw new Error(err);
        });
    },
};
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/
v2.0 | 20110126
License: none (public domain)
*/
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, hr, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video{margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline;}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;}
body {line-height: 1;}
ol, ul {list-style: none;}
blockquote, q {quotes: none;}
blockquote:before, blockquote:after, q:before, q:after {content: ''; content: none; }
table { border-collapse: collapse; border-spacing: 0; }
/*v2.0 over*/

body{
    background-color: #f6f6f6;
    #content>section:first-child{
        min-height: 200px;
        margin-top: 55px;
    }
}
</style>
