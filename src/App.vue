<template>
    <div class="wrapper">
        <navigation></navigation>
        <main class="page-main">
            <section class="section">
                <router-view />
            </section>
        </main>

        <foot></foot>
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
