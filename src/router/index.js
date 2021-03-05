import Vue from 'vue'
import VueRouter from 'vue-router'


import Start from '../views/start/Start.vue'

import segmentArea from '../views/segment-area/segment-area.vue'
import segmentDairy from '../views/segment-dairy/segment-dairy.vue'
import segmentWine from '../views/segment-wine/segment-wine.vue'
import segmentMeat from '../views/segment-meat/segment-meat.vue'
import segmentLab from '../views/segment-lab/segment-lab.vue'
import segmentFeed from '../views/segment-feed/segment-feed.vue'
import segmentRMT from '../views/segment-rmt/segment-rmt.vue'
import segmentGrain from '../views/segment-grain/segment-grain.vue'

import auditoriumArea from '../views/auditorium-area/auditorium-area.vue'
import mapArea from '../views/map-area/map-area.vue'

import intro from '../views/intro/intro.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Start',
        component: Start
    },
    {
        path: '/segment-area',
        name: 'segment-area',
        component: segmentArea
    },
    {
        path: '/intro',
        name: 'intro',
        component: intro
    },
    {
        path: '/auditorium-area',
        name: 'auditorium-area',
        component: auditoriumArea
    },
    {
        path: '/map-area',
        name: 'map-area',
        component: mapArea
    },
    {
        path: '/segment-dairy',
        name: 'segment-dairy',
        component: segmentDairy
    },
    {
        path: '/segment-wine',
        name: 'segment-wine',
        component: segmentWine
    },
    {
        path: '/segment-meat',
        name: 'segment-meat',
        component: segmentMeat
    },
    {
        path: '/segment-lab',
        name: 'segment-lab',
        component: segmentLab
    },
    {
        path: '/segment-feed',
        name: 'segment-feed',
        component: segmentFeed
    },
    {
        path: '/segment-rmt',
        name: 'segment-rmt',
        component: segmentRMT
    },
    {
        path: '/segment-grain',
        name: 'segment-grain',
        component: segmentGrain
    }


]

const router = new VueRouter({
    routes,
    linkExactActiveClass: 'is-active',
})

router.beforeEach((to, from, next) => {
    if (!from.name && to.path !== '/') next({ name: 'Start' })
    else next()
})

export default router