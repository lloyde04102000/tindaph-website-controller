import Banner from './components/pages/Banner';
import Store from './components/pages/Store';
import Testimonial from './components/pages/Testimonials';
import FAQs from './components/pages/FAQs';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';
export default {
    mode: 'history',
    linkActiveClass: 'nav-class font-weight-bold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/banner',
            component: Banner
        },
        {
            path: '/store',
            component: Store
        },
        {
            path: '/testimonial',
            component: Testimonial
        },
        {
            path: '/faqs',
            component: FAQs
        },
    ]
}
