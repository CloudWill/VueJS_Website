<template>
    <!-- main banner -->
    <section class="bgimage" id="home">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                    <h2 class="hero_title">Hi, it's me Mario</h2>
                    <p class="hero_desc">I make grass go green</p>
                </div>
            </div>
        </div>
    </section>
    <AboutUs></AboutUs>
    <services></services>
    <portfolio></portfolio>
    <ContactUs></ContactUs>
</template>

<script>

    import Services from './Services';
    import Portfolio from './Portfolio';
    import AboutUs from './AboutUs';
    import ContactUs from './ContactUs';
        export default {
            components: {
                Services,
                Portfolio,
                AboutUs,
                ContactUs
            },
        name: 'Home',
        data() {
            return {
             };
        }

    };
</script>


<style lang="scss">
    @import '../scss/Home';
</style>