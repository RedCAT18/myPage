<template>
  <div id="nav">
      <header class="nav__content">
          <ul class="nav__list">
              <li class="nav__list-item"><a href="#intro">HOME</a></li>
              <li class="nav__list-item"><a href="#profile">ABOUT ME</a></li>
              <li class="nav__list-item"><a href="#words">WORDS</a></li>
              <li class="nav__list-item"><a href="#contact">CONTACT</a></li>
          </ul>
      </header>
  </div>
</template>

<script>
    export default {
        computed: {
           height(){
               return document.documentElement.scrollTop;
           }
       },
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/normalize.css';
    @import '../../assets/css/preset';

    #nav {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        padding: 0 30px;
        background: #e8c6cd;
        color: '#00000';
        z-index: 10;
        .nav__content {
            display: flex;
            flex-direction: row-reverse;
            .nav__list {
                justify-content: space-around;
                list-style-type: none;
                display: flex;
                flex-direction: row;
                @media screen and (max-width: 768px) {
                    flex-direction: column;
                    text-align: right;
                }   
                .nav__list-item {
                    margin-left: 20px;
                    font-family: $fredericka;
                    font-size: 14pt;
                    @media screen and (max-width: 768px) {
                        font-size: 2vmax;
                    }
                    font-weight: bold;
                    text-shadow: 0 0 1px #ffffff;
                    cursor: pointer;
                }
            }
        }
    }
</style>
