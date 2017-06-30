<template>
    <section class="buttomlList">
       <div class="nav">
         <router-link to="/questions">常见问题</router-link>
         <router-link to="/cooperation">合作联系</router-link>
         <router-link to="/privacy">隐私权申明</router-link>
         <router-link to="/contact">联系</router-link>
       </div>
       <div class="content">
          <router-view></router-view>
       </div>

    </section>
</template>

<script>

    const questionsComponent = {
    template:`<section id="questions">
                <h2>常见问题</h2>
            </section>`,
    };

    const cooperationComponent = {
    template:`<section id="cooperation">
                <h2>合作联系</h2>
            </section>`
    };

    const privacyComponent = {
    template:`<section id="privacy">
                <h2>隐私权申明</h2>
            </section>`
    };

    const contactComponent = {
    template:`<section id="contact">
                <h2>联系我们</h2>
            </section>`
    };

    import Vue from 'vue/dist/vue.js';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);

    //创建router实例，并定义导航和组件的映射关系
    const router = new VueRouter({
      //配置routes
      routes:[
          //定义3个导航和组件的映射关系
          {
              path:"/questions",
              component:questionsComponent
          },
          {
              path:"/cooperation",
              component:cooperationComponent
          },
          {
              path:"/privacy",
              component:privacyComponent
          },
          {
              path:"/contact",
              component:contactComponent
          },
      ]
    });

    export default {
        router,
    };

</script>

<style lang="scss" scoped>
@import "../../scss/common.scss";
.buttomlList
{
    .content{
        >section{
            z-index: 8;
            position: fixed; top:$headerHeight; left: 0;
            width: 100%; height: 100%;
            background: red;
        }
    }
}
</style>
