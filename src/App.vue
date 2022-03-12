<template>
    <div class="wrapper">
        <div class="page-header">
            <navigation></navigation>
        </div>
        <div class="page-main">

            <router-view />
        </div>
        <div class="page-footer">
            <foot></foot>
        </div>
    </div>

</template>

<script>
    import Foot from './components/Footer';
    import Navigation from './components/Navigation';
    export default {
        name: 'App',
        components: {
            Navigation,
            Foot
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
        }
    }
</script>



<style lang="scss">
    @import 'scss/App';
    @import './assets/fonts/css/fontawesome.css';
    @import './assets/fonts/css/brands.css';
    @import './assets/fonts/css/solid.css';
</style>
