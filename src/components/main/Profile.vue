<template>
    <div class="profile__outbox">
        <div class="profile__title">
            About Me
        </div>
        <router-view></router-view>
        <div class="profile__nav">
            <router-link :to="{name: 'profileBase'}" class="profile__nav-item">
                <font-awesome-icon class="profile__nav-icon" :icon="userIcon"/>Who am I?
            </router-link>
            <router-link :to="{name: 'profileSkill'}" class="profile__nav-item">
                <font-awesome-icon class="profile__nav-icon" :icon="keyboardIcon"/>What can I do?
            </router-link>
            <router-link :to="{name: 'profileExp'}"  class="profile__nav-item">
                <font-awesome-icon class="profile__nav-icon" :icon="clipboardIcon"/>What did I do?
            </router-link>
        </div>
    </div>
</template>

<script>
    // import profileMain from './profile/Profile-main.vue';
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import faUser from '@fortawesome/fontawesome-free-solid/faUser';
    import faKeyboard from '@fortawesome/fontawesome-free-solid/faKeyboard';
    import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboardList';

    export default {
        computed: {
            userIcon(){
                return faUser;
            },
            keyboardIcon(){
                return faKeyboard;
            },
            clipboardIcon() {
                return faClipboard;
            }
        },
        components: {
            // profileMain : profileMain,
            FontAwesomeIcon,
        },
        
    
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/normalize.css';
    @import '../../assets/css/preset';

    .profile__outbox {
        background: #393d50;
        color: #ffffff;
        padding: 40px;
        .profile__title {
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            font-family: $fredericka;
            font-size: 36pt;
            @media screen and (max-width: 768px) {
                font-size: 6vmax;
                justify-content: center;
            } 
        }
        .profile__nav{
            margin: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            @media screen and (max-width: 768px){
                flex-direction: column;
                text-align: center;
            }
            .profile__nav-item {
                margin: 10px;
                padding: 10px;
                border-radius: 5px;
                font-family: $fredericka;
                font-style: italic;
                font-weight: 700;
                background: #ffffff;
                color: #393d50;
                cursor: pointer;
                border: 1px solid #ffffff;
                .profile__nav-icon {
                    margin-right: 5px;
                }
            }
            .profile__nav-item:hover {
                border: 1px solid #151824;
                box-shadow: 2px 2px 2px #151824;
            }
            .profile__nav-item:active {
                border: 1px solid #151824;
                transform: translate(1px, 1px);
                box-shadow: 1px 1px 1px #151824;
            }
        }
    }
</style>
