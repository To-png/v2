import VueRouter from 'vue-router';

import HomePage from '@/pages/HomePage';
import Post1 from '@/pages/Post1';
import Post2 from '@/pages/Post2';
import Post3 from '@/pages/Post3';
import Post4 from '@/pages/Post4';
import Stat1 from '@/pages/Stat1';
import Stat2 from '@/pages/Stat2';
import Stat3 from '@/pages/Stat3';
import Stat4 from '@/pages/Stat4';
import Page404 from '@/pages/Page404';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/post1',
            name: 'post1',
            component: Post1
        },
        {
            path: '/post2',
            name: 'post2',
            component: Post2
        },
        {
            path: '/post3',
            name: 'post3',
            component: Post3
        },
        {
            path: '/post4',
            name: 'post4',
            component: Post4
        },
        {
            path: '/stat1',
            name: 'stat1',
            component: Stat1
        },
        {
            path: '/stat2',
            name: 'stat2',
            component: Stat2
        },
        {
            path: '/stat3',
            name: 'stat3',
            component: Stat3
        },
        {
            path: '/stat4',
            name: 'stat4',
            component: Stat4
        },
        {
            path: '*',
            name: 'page404',
            component: Page404
        }
    ] 
})