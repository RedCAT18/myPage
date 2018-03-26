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

<style lang="scss" scoped>
    @import '../assets/css/normalize.css';
</style>
