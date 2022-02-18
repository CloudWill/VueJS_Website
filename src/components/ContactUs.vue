<template>
    <section id="contact">

        <h1 class="section-header">Contact Us</h1>

        <div class="contact-wrapper">

            <!-- Left contact page -->

            <form id="contact-form" class="form-horizontal" role="form">

                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
                    </div>
                </div>
                <br>
                <div class="form-group">
                    <div class="col-sm-12">
                        <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
                    </div>
                </div>
                <br>
                <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

                <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                    <div class="alt-send-button">
                        <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
                    </div>

                </button>

            </form>


        </div>

    </section>


</template>

<script>
    export default {
        name: 'ContactUs',
        // To use props, they must be declared
        props: {
            
        }
    }



</script>


<style lang="scss">
    @import '../scss/ContactUs';
</style>