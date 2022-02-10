<template>
    <div class="wrapper">


        <div class="page-header">
            <div class="nav_title">
                <router-link tag="li" class="sticky_nav__item" :to="{ name: 'Home' }" @click="click('Home')"><img :src="require('./assets/img/generic_lawn_logo.png')" /></router-link>
            </div>
            <nav class="nav">
                <ul class="nav__list">
                    <router-link tag="li" class="nav__item" :to="{ name: 'Services' }" @click="click('Services')">Services</router-link>
                    <router-link tag="li" class="nav__item" :to="{ name: 'About Us' }" @click="click('About')">About Us</router-link>
                    <router-link tag="li" class="nav__item" :to="{ name: 'Contact Us' }" @click="click('Contact')">Contact Us</router-link>
                </ul>
            </nav>
            <div class="contact">
                <div class="phone"><i class="fas fa-phone-square-alt"></i>&nbsp;{{ phoneNumber }}</div>
                <div class="email"><i class="fas fa-envelope"></i>&nbsp;{{ email }}</div>
            </div>
        </div>
        <nav class="sticky_nav">
            <ul class="sticky_nav__list">
                <router-link tag="li" class="sticky_nav__item" :to="{ name: 'Home' }" @click="click('Home')">Home</router-link>
                <router-link tag="li" class="sticky_nav__item" :to="{ name: 'Services' }" @click="click('Services')">Services</router-link>
                <router-link tag="li" class="sticky_nav__item" :to="{ name: 'About Us' }" @click="click('About')">About Us</router-link>
                <router-link tag="li" class="sticky_nav__item" :to="{ name: 'Contact Us' }" @click="click('Contact')">Contact Us</router-link>
            </ul>

            <div class="contact">
                <div class="phone"><i class="fas fa-phone-square-alt"></i>&nbsp;{{ phoneNumber }}</div>
                <div class="email"><i class="fas fa-envelope"></i>&nbsp;{{ email }}</div>
            </div>
        </nav>

        <main class="page-main">
            <section class="section">
               
                <router-view />
            </section>
            <section class="section">
                <h2>A Section</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, minus laudantium excepturi incidunt voluptate impedit quisquam. Dicta sed, ea perferendis consequuntur expedita nesciunt nam quae omnis voluptatibus corporis. Voluptate, cumque?</p>
            </section>

        </main>
        <footer class="page-footer">
            <small>
                @Copyright 2021. All rights reserved<!-- content here -->
            </small>
            <ul>
                Social: &nbsp;
                <a :href="facebook" target="_blank"><i class="fab fa-facebook"></i></a>&nbsp;&nbsp;
                <a :href="twitter" target="_blank"><i class="fab fa-twitter"></i></a>&nbsp;&nbsp;
                <a :href="instagram" target="_blank"><i class="fab fa-instagram-square"></i></a>
                &nbsp;&nbsp;
                <a :href="wechat" target="_blank"><i class="fab fa-weixin"></i></a>
                &nbsp;&nbsp;
                <a :href="whatsapp" target="_blank"><i class="fab fa-whatsapp-square"></i></a>

            </ul>
        </footer>
    </div>


</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        data() {
            return {
                showMenu: false,
                phoneNumber: process.env.VUE_APP_PHONE_NUMBER,
                email: process.env.VUE_APP_EMAIL,
                facebook: process.env.VUE_APP_FACEBOOK,
                twitter: process.env.VUE_APP_TWITTER,
                instagram: process.env.VUE_APP_INSTAGRAM,
                wechat: process.env.VUE_APP_INSTAGRAM,
                whatsapp: process.env.VUE_APP_INSTAGRAM,
                active_nav: null,

            };
        },
        methods: {
            click: function (cl) {
                console.log('clicking ', cl)
            }
        }
    }
</script>



<style lang="scss">
    @import 'scss/App';
    @import './assets/fonts/css/fontawesome.css';
    @import './assets/fonts/css/brands.css';
    @import './assets/fonts/css/solid.css';
</style>
