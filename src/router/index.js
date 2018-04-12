import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

import cIndexPage from '@/components/index';
import cProducts from '@/components/products';
import cDetailPage from '@/components/detail';
import cCartPage from '@/components/cart';
import cOrderDetail from '@/components/orderDetail';
import cUserPage from '@/components/user';
import cBindTel from '@/components/bindTel';
import cAboutus from '@/components/aboutus';
import cQuestions from '@/components/questions';
import cContact from '@/components/contact';
import addAddr from '@/components/user/addAddr';
const privacyComponent = {
    template: `<section id="privacy">
                    <h2>隐私权申明</h2>
                </section>`,
};

Vue.use(Router);

const router = new Router({
    // 配置routes
    routes: [
        {
            path: '/',
            component: cIndexPage,
        },
        {
            path: '/detail',
            component: cDetailPage,
        },
        {
            path: '/product',
            component: cProducts,
        },
        {
            path: '/cart',
            component: cCartPage,
        },
        {
            path: '/orderDetail',
            component: cOrderDetail,
        },
        {
            path: '/user',
            component: cUserPage,
            children: [
                {
                    path: 'addAddr',
                    component: addAddr,
                },
            ],
        },
        {
            path: '/bindTel',
            component: cBindTel,
        },
        {
            path: '/aboutus',
            component: cAboutus,
        },
        {
            path: '/questions',
            component: cQuestions,
        },
        {
            path: '/privacy',
            component: privacyComponent,
        },
        {
            path: '/contact',
            component: cContact,
        },
    ],
});

export {router};
// export default new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'HelloWorld',
//             component: HelloWorld,
//         },
//     ],
// });
