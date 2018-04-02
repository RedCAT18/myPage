<template>
    <div class="contact__outbox" id="contact">
        <h2 class="contact__title">
            Contact
        </h2>
        <div class="contact__detail">
            <div class="contact__detail-inbox">
                <font-awesome-icon :icon='email'/>
                <span class="contact__inbox-content">kayoung.seo.82@gmail.com</span>
            </div>
            <div class="contact__detail-inbox">
                <font-awesome-icon :icon='loc'/>
                <span class="contact__inbox-content">Auckland, New Zealand</span>
            </div>
            <div class="contact__detail-inbox">
                <font-awesome-icon :icon='phone'/>
                <span class="contact__inbox-content">021 083 00845</span>
            </div>
            <div class="contact__detail-inbox">
                <a href="https://github.com/RedCAT18" target="_blank"><font-awesome-icon class="sns-icons" :icon='github'/></a>
                <a href="https://www.linkedin.com/in/kayoung-seo-a17b83119/" target="_blank"><font-awesome-icon class="sns-icons" :icon='linkedIn'/></a> 
                <a href="https://www.facebook.com/redcat18" target="_blank"><font-awesome-icon class="sns-icons" :icon='facebook'/></a>
            </div>
        </div>
    </div>
</template>

<script>
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import brands from '@fortawesome/fontawesome-free-brands'
    import faAt from '@fortawesome/fontawesome-free-solid/faAt';
    import faMobile from '@fortawesome/fontawesome-free-solid/faMobileAlt'; 
    import faGit from '@fortawesome/fontawesome-free-brands/faGithubSquare';
    import faLinkedIn from '@fortawesome/fontawesome-free-brands/faLinkedin';
    import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
    import faLoc from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';


    export default {
        computed: {
            email() { return faAt; },
            phone() { return faMobile; },
            github() { return faGit; },
            linkedIn() { return faLinkedIn; },
            facebook() { return faFacebook; },
            loc() { return faLoc },
        },
        components: {
            FontAwesomeIcon,
        }
    
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/normalize.css';
    @import '../../assets/css/preset';

    .contact__outbox {
        padding: 40px;
        background: #495039;
        color: #ffffff;
        .contact__title {
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            font-family: $fredericka;
            font-size: 32pt;
            font-weight: 400;
            @media screen and (max-width: 768px) {
                font-size: 5vmax;
                justify-content: center;
            } 
        }
        .contact__detail{
            margin-top: 40px;
            font-family: $fredericka;
            font-size: 18pt;
            .contact__detail-inbox {
                display: flex;
                justify-content: flex-end;
                @media screen and (max-width: 768px) {
                    justify-content: center;
                    font-size: 2.5vmax;
                }
                padding: 10px;
                .contact__inbox-content {
                    margin-left: 40px;
                }
                .sns-icons {
                    font-size: 42pt;
                    margin-top: 10px;
                    margin-left: 10px;
                    cursor: pointer;
                    color: #ffffff;
                }
            }
        }
    }
</style>
