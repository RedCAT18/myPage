<template>
  <div id="app">
      <container></container>
  </div>
</template>

<script>
import Container from './components/Container.vue';

export default {
  name: 'app',
  components: {
    container: Container,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">

</style>
