<template>
    <div class="profile__outbox">
        <div class="profile__title">
            About Me
        </div>
        <div class="profile__nav">
            <div @click="changePage('main')" class="profile__nav-item">
                <font-awesome-icon class="profile__nav-icon" :icon="userIcon"/>Who am I?
            </div>
            <div @click="changePage('skill')" class="profile__nav-item">
                <font-awesome-icon class="profile__nav-icon" :icon="keyboardIcon"/>What can I do?
            </div>
            <div @click="changePage('exp')" class="profile__nav-item">
                <font-awesome-icon class="profile__nav-icon" :icon="clipboardIcon"/>What did I do?
            </div>
        </div>
        <transition name="profile-slide" mode="out-in">
            <profile-main v-if="profilePage === 'main'"></profile-main>
            <profile-skill v-else-if="profilePage === 'skill'"></profile-skill>
            <profile-exp v-else-if="profilePage === 'exp'"></profile-exp> 
        </transition>
        
    </div>
</template>

<script>
    import profileMain from './profile/Profile-main.vue';
    import profileSkill from './profile/Profile-skill.vue';
    import profileExp from './profile/Profile-exp.vue';

    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import faUser from '@fortawesome/fontawesome-free-solid/faUser';
    import faKeyboard from '@fortawesome/fontawesome-free-solid/faKeyboard';
    import faClipboard from '@fortawesome/fontawesome-free-solid/faClipboardList';

    export default {
        data() {
            return {
                profilePage: 'main',  
            }
        },
        computed: {
            userIcon(){
                return faUser;
            },
            keyboardIcon(){
                return faKeyboard;
            },
            clipboardIcon() {
                return faClipboard;
            },
            page(){
                return this.profilePage;
            }
        },
        components: {
            profileMain : profileMain,
            profileSkill: profileSkill,
            profileExp: profileExp,
            FontAwesomeIcon,
        },
        methods: {
            changePage: function(page){
                this.profilePage = page;
            }
        }
    
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
            font-size: 32pt;
            @media screen and (max-width: 768px) {
                font-size: 5vmax;
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
                border-top: 3px double rgba(255, 255, 255, 0.5);
                border-bottom: 3px double rgba(255, 255, 255, 0.5);
                margin: 10px;
                padding: 10px;
                font-family: $fredericka;
                font-size: 16pt;
                font-style: italic;
                color: #ffffff;
                cursor: pointer;
                .profile__nav-icon {
                    margin-right: 10px;
                }
            }
            .profile__nav-item:hover {
                text-shadow: 3px 3px 2px #151824;
            }
            .profile__nav-item:active {
                
                transform: translate(1px, 1px);
                text-shadow: 1px 1px 1px #151824;
            }
        }
    }
    .profile-slide-enter  {
        transform: scale(0, 0);
        opacity: 0;
    }
    .profile-slide-leave-to{
        opacity: 0;
    }
    .profile-slide-enter-active, .profile-slide-leave-active {
        transition: all 0.8s;
    }
</style>
