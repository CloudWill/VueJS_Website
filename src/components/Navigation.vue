<template src="../templates/Navigation.html">
</template>

<script>
    import { useI18n } from 'vue-i18n'
    export default {
        name: 'MainNavigation',
        data() {
            return {
                showMenu: false,
            };
        },
        setup() {
            const { t } = useI18n({
                inheritLocale: true,
                useScope: 'local'
            })

            // Something todo ..

            return { t }
        }

    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../scss/Navigation'
</style>
