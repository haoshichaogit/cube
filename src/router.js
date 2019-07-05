import login from './components/login'
import VueRouter from 'vue-router'
const routes = [
    { path: '/', component: login }
]

const router = new VueRouter({
    routes
})

export default router;