<template>
  <div id="nav">
      <header class="nav__content">
          <ul class="nav__list">
              <li class="nav__list-item"><a href="#">HOME</a></li>
              <li class="nav__list-item"><a href="#">ABOUT ME</a></li>
              <li class="nav__list-item"><a href="#">WORDS</a></li>
              <li class="nav__list-item"><a href="#">CONTACT</a></li>
          </ul>
      </header>
  </div>
</template>

<script>
    export default {
        
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
                    font-size: 16pt;
                    @media screen and (max-width: 768px) {
                        font-size: 2vmax;
                    }
                    font-weight: bold;
                    text-shadow: 0 0 1px #ffffff;
                }
            }
        }
    }
</style>
