import Vue from 'vue';
import Router from 'vue-router';

import cHomePage from '@/components/home/main';
import cProducts from '@/components/products';
import cDetailPage from '@/components/detail/main';
import cCartPage from '@/components/cart/main';
import cOrderDetail from '@/components/orderDetail/main';
import cUserPage from '@/components/user/main';
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
            component: cHomePage,
        },
        {
            path: '/detail/:id',
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
        {
            path: '*',
            redirect: '/',
        },
    ],
});

export {router};
