import app from '../app';

import dynamic from 'dva/dynamic';

export default [{
    path: "/login",
    // component: Login
    component: dynamic({
        app,
        //model: [() => import('../models/login')],
        component: () => import('../containers/login')
    })
}, {
    path: '/home',
    component: dynamic({
        app,
        component: () => import('../containers/home')
    })
}];