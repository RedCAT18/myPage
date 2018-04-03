<template>
  <div class="container">
        <navi></navi>
        <intro></intro>
        <profile></profile>
        <words></words>
        <contact></contact>
        <div class="footer">
            <p class="footer__content">Copyright 2018 RedCAT. All right reserved. </p>
        </div>
  </div>
</template>

<script>
    import Nav from './main/Nav.vue';
    import Intro from './main/Intro.vue';
    import Profile from './main/Profile.vue';
    import Words from './main/Words.vue';
    import Contact from './main/Contact.vue';

export default {
    components: {
        navi: Nav,
        intro: Intro,
        profile: Profile,
        words: Words,
        contact: Contact,
    },
    methods: {
        handleScroll: function(e){
            let height = window.pageYOffset;
            this.$store.dispatch('setPosition', height);
        },
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    }, 
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
    }
  
}
</script>

<style lang="scss">
    @import '../assets/css/normalize.css';
    
    * {
        text-decoration: none;
    }
    a:visited, a:active, a:link {
        color: #000000; 
    }
    .container {
        background-color: #e8c6cd;
        color: #000000;
        .footer {
            background: #000000;
            color: #ffffff;
            padding: 20px;
            .footer__content {
                display: flex;
                justify-content: center;
                margin: 0;
                font-size: 10pt;
            }
        }
    }
</style>
