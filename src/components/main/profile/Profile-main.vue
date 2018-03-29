<template>
    <div class="profile__inbox">
        <h2 class="profile__name">
            Kayoung Erica Seo
        </h2>
        <div class="profile__detail-box">
            <p class="profile__detail-text">
               Life is going on, and challenge is neverending. 
            </p>
            <div class="profile__detail-inbox">
                <div class="inbox__drawer">
                    <font-awesome-icon class="inbox__icon" size="4x" :icon="computerIcon"/>
                    <p class="profile__detail-headtext">Developer,</p>
                    <p class="profile__detail-subtext">who is constantly learned.</p>
                </div>
                <div class="inbox__drawer">
                    <font-awesome-icon class="inbox__icon" size="4x" :icon="brushIcon"/>
                    <p class="profile__detail-headtext">Creator,</p>
                    <p class="profile__detail-subtext">who loves to make something.</p>
                </div>
                <div class="inbox__drawer">
                    <font-awesome-icon class="inbox__icon" size="4x" :icon="questionIcon"/>
                    <p class="profile__detail-headtext">and Stranger,</p>
                    <p class="profile__detail-subtext">who you could not understand.</p>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faLaptop from '@fortawesome/fontawesome-free-solid/faLaptop'; 
import faBrush from '@fortawesome/fontawesome-free-solid/faPaintBrush';
import faQuestion from '@fortawesome/fontawesome-free-solid/faQuestion';

export default {
    computed: {
        computerIcon() {
            return faLaptop;
        },
        brushIcon() {
            return faBrush;
        },
        questionIcon() {
            return faQuestion;
        }
    },
    components: {
        FontAwesomeIcon: FontAwesomeIcon,
    }
}
</script>

<style lang="scss" scoped>
    @import '../../../assets/css/normalize.css';
    @import '../../../assets/css/preset.scss';

    .profile__inbox {
        padding: 40px 0;
        .profile__name {
            margin: 20px 0;
            font-family: $fredericka;
            font-size: 28pt;
            font-weight: 100;
            text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5);
        }
        .profile__detail-box {
            padding: 20px;
            .profile__detail-text {
                font-family: $nanum;
                font-style: italic;
                font-size: 12pt;
                text-indent: 5px;
                display: flex;
                flex-direction: row-reverse;
                margin-bottom: 40px;
            }
            .profile__detail-inbox {
                display: flex;
                justify-content: space-between;
                .inbox__drawer {
                    flex: 1;
                    padding: 10px;
                    .profile__detail-headtext {
                        font-size: 16pt;
                        margin: 5px;
                        font-family: $fredericka;
                    }
                    .profile__detail-subtext {
                        margin-left: 50px;
                        font-family: $nanum;
                        font-style: italic;
                    }
                    .inbox__icon {
                        margin: 40px auto;
                        opacity: 0.7;
                        display:flex;
                        justify-content: center;
                    }
                }
            }

        }
    }
</style>
