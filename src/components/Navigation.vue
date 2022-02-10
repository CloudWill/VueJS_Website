<template src="../templates/Navigation.html">
</template>

<script>
    export default {
        name: 'Navigation',
        data() {
            return {
                showMenu: false,
                phoneNumber: process.env.VUE_APP_PHONE_NUMBER,
                email: process.env.VUE_APP_EMAIL,
                facebook: process.env.VUE_APP_FACEBOOK,
                twitter: process.env.VUE_APP_TWITTER,
                instagram: process.env.VUE_APP_INSTAGRAM

            };
        }

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    @import '../scss/Navigation';
</style>
