import cIndexPage from "./components/index.vue";
import cDetailPage from "./components/detail.vue";
import cCartPage from "./components/cart.vue";
import cUserPage from "./components/user.vue";
import addAddr0 from "./components/user/addAddr0.vue";

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
      {
          path: "/",
          component: cIndexPage,
      },
      {
          path: "/detail",
          component: cDetailPage,
      },
      {
          path: "/cart",
          component: cCartPage,
      },
      {
          path: "/user",
          component: cUserPage,
          children: [
              {
                  path: "addAddr0",
                  component: addAddr0,
              },
          ],
      },
      {
          path: "/questions",
          component: questionsComponent
      },
      {
          path: "/cooperation",
          component: cooperationComponent
      },
      {
          path: "/privacy",
          component: privacyComponent
      },
      {
          path: "/contact",
          component: contactComponent
      },
  ]
});

export {router};
