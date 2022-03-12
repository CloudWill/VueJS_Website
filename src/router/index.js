import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import AboutUs from "@/components/AboutUs.vue";
import Services from "@/components/Services.vue";
import ContactUs from "@/components/ContactUs.vue";
import Portfolio from "@/components/Portfolio.vue";
import User from "@/components/User.vue";
import NotFound from "@/components/NotFound.vue";

//https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/aboutus",
        name: "About Us",
        component: AboutUs,
    },
    {
        path: "/contactus",
        name: "Contact Us",
        component: ContactUs,
    },
    {
        path: "/services",
        name: "Services",
        component: Services,
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: Portfolio,
    },
    {
        path: "/user/:name",  // <-- colon for dynamic
        name: "User",
        component: User,
        /*
         * Also just like Vue 2, I can opt to have the dynamic segment passed into my component
         * as a prop, but specifying props = true.
         */
        props: true, 
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;