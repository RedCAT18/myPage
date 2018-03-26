<template>
  <div class="container">
      <navi></navi>
      <intro></intro>
      <profile></profile>
      <words></words>
      <contact></contact>
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
    }
</style>
