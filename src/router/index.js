import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Home1 from '../views/Home1.vue';
import JoinNetwork from '../views/JoinNetwork.vue';
import Refill from '../views/Refill.vue';
import ContactUs from '../views/ContactUs.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/1',
    name: 'Home1',
    component: Home1,
  },
  {
    path: '/join',
    name: 'JoinNetwork',
    component: JoinNetwork,
  },
  {
    path: '/refill',
    name: 'Refill',
    component: Refill,
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
