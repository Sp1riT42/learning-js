import Vue from "vue";
import Router from 'vue-router'
import indexComp from "@/components";
import Registration from "@/components/Registration";
import Catalog from "@/components/Catalog";
import Cart from "@/components/Cart";
import Product from "@/components/Product";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: indexComp
        },
        {
           path:'/registration',
            component: Registration
        },
        {
            path: '/catalog',
            component: Catalog
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/product/:id',
            component: Product,
            props: true
        }
    ]
})