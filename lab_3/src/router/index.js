import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/article/:id', name: 'article', component: Article, props: true },
        { path: '/about', name: 'about', component: About },
        { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
    ],
    scrollBehavior() {
        return { top: 0 }
    },
    linkActiveClass: 'active-link',
})

export default router
