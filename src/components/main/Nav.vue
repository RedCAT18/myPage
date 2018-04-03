<template>
  <div id="nav">
      <div class="nav__content">
          <ul class="nav__list">
              <li class="nav__list-item"><a href="#intro">HOME</a></li>
              <li class="nav__list-item"><a href="#profile">ABOUT ME</a></li>
              <li class="nav__list-item"><a href="#words">WORDS</a></li>
              <li class="nav__list-item"><a href="#contact">CONTACT</a></li>
          </ul>
      </div>
      <transition name="fixed"  v-if="fixMenu" appear>
        <div class="nav__content fixed__nav">
            <ul class="nav__list">
                <li class="nav__list-item"><a href="#intro">HOME</a></li>
                <li class="nav__list-item"><a href="#profile">ABOUT ME</a></li>
                <li class="nav__list-item"><a href="#words">WORDS</a></li>
                <li class="nav__list-item"><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
      </transition>
  </div>
</template>

<script>
    export default {
        computed: {
            fixMenu(){
                return this.$store.getters.getPosition;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/normalize.css';
    @import '../../assets/css/preset';

    #nav {
        
        padding: 20px 30px;
        
        color: '#00000';
        
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
        .fixed__nav {
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            background: #e8c6cd;
            z-index: 10;
            padding-right: 30px;
        }
    }
    .fixed-enter, .fixed-leave-to {
        transform: translateY(-100%);
    }
        
    .fixed-enter-active, .fixed-leave-active {
        transition: transform 1s;
    }
</style>
