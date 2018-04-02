<template>
    <div class="intro__outbox" id="intro">
        <div class="intro">
            <span class="intro__text">HELLO</span>
            <div class="center__image">
                <img src="../../assets/images/cat.png" alt="">
            </div>
            <span class="intro__text">WORLD<span class="intro__text-blink">|</span></span>
        </div>    
        <div class="intro__background">
        </div>
</div>
</template>

<script>
    export default {
    
    
    }
</script>

<style lang="scss" scoped>
    @import '../../assets/css/normalize.css';
    @import '../../assets/css/preset';
    .intro__outbox{
        overflow: hidden;
        .intro {
            width: 100%;
            height: 700px;
            position: absolute;
            display: flex;
            flex-direction: row;
            @media screen and (max-width: 768px) {
                flex-direction: column;
            }
            align-items: center;
            justify-content: center;   
            z-index: 1;
            .center__image {
                img {
                    width: 250px;
                    display: block;
                    margin: auto;
                }
            }
            .intro__text {
                margin: 20px;
                font-size: 36pt;
                font-family: $fredericka;
                color: #ffffff;
                align-self: center;
                .intro__text-blink {
                    animation: blinker 1s linear infinite;
                }
            }
        }
        .intro__background {
            position: relative;
            top: -100px;
            left: 0;
            width: 100%;
            height: 800px;
            background-image: url(../../assets/images/bgImage.jpg);
            background-color: transparent;
            background-position: center;
            background-size: cover;
            opacity: 0.4;
            z-index: 0;     
        }
    }
    @keyframes blinker {
        from,
        49.9% {
            opacity: 0;
        }
        50%,
        to {
            opacity: 1;
        }
    }
</style>
