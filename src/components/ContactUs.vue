<template src="../templates/ContactUs.html">
</template>


<script>
    export default {
        name: 'ContactUs',
        data() {
            return {
         
                phoneNumber: process.env.VUE_APP_PHONE_NUMBER,
                email: process.env.VUE_APP_EMAIL,
            }
        }
    }



</script>


<style lang="scss">
    @import '../scss/ContactUs';
</style>