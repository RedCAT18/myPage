<template>
    <div class="profile__inbox">
        <h2 class= "profile__subtitle">Skills & Abilities</h2>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    @import '../../../assets/css/normalize.css';
    @import '../../../assets/css/preset.scss';

    .profile__inbox {
       padding: 40px 0;
           .profile__subtitle {
               margin: 20px 0;
                font-family: $fredericka;
                font-size: 28pt;
                font-weight: 100;
                text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5);
              @media screen and (max-width: 768px) {
                  font-size: 6vmax;
                  justify-content: center;
              } 
          }
    }
</style>
