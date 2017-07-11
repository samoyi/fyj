import cIndexPage from "./components/index.vue";
import cProducts from "./components/products.vue";
import cDetailPage from "./components/detail.vue";
import cCartPage from "./components/cart.vue";
import cUserPage from "./components/user.vue";
import cBindTel from "./components/bindTel.vue";
import cAboutus from "./components/aboutus.vue";
import cQuestions from "./components/questions.vue";
import cContact from "./components/contact.vue";
import addAddr from "./components/user/addAddr.vue";



const privacyComponent = {
template:`<section id="privacy">
            <h2>隐私权申明</h2>
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
          path: "/product",
          component: cProducts,
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
                  path: "addAddr",
                  component: addAddr,
              },
          ],
      },
      {
          path: "/bindTel",
          component: cBindTel,
      },
      {
          path: "/aboutus",
          component: cAboutus,
      },
      {
          path: "/questions",
          component: cQuestions
      },
      {
          path: "/privacy",
          component: privacyComponent
      },
      {
          path: "/contact",
          component: cContact
      },
  ]
});

export {router};
