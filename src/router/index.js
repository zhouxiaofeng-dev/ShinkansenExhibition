import VueRouter from "vue-router";
import About from '../pages/about.vue'
import Famous from '../pages/famousmodel.vue'
import History from '../pages/history.vue'
import Image from '../pages/image.vue'
import BackGround from '../pages/backgroundmap.vue'
import Negative from '../pages/negative.vue'
import Positive from '../pages/positive.vue'
export default new VueRouter({
    routes: [
        {
            name:'about',
            path: '/about',
            component:About
        },
        {
            name:'famous',
            path: '/famous',
            component:Famous
        },
        {
            name:'history',
            path: '/history',
            component:History
        },
        {
            name: 'negative',
            path: '/negative',
            component:Negative
        },
        {
            name: 'positive',
            path: '/positive',
            component:Positive
        },
        {
            name:'image',
            path: '/image',
            component:Image
        },
        {
            name: 'main',
            path: '/main',
            component:BackGround
        },
        {
            path: '/',
            redirect:'/main'
        }

    ]
})