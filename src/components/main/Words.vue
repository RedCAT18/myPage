<template>
    <div class="words__outbox">
        <h2 class="words__title">Words</h2>
        <div class="words__inbox">

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

    .words__outbox {
        padding: 40px;
        background: #ffffff;
        color: #000000;
        .words__title {
            display: flex;
            justify-content: flex-end;
            padding: 10px;
            font-family: $fredericka;
            font-size: 32pt;
            font-weight: 400;
            @media screen and (max-width: 768px) {
                font-size: 5vmax;
                justify-content: center;
            } 
        }
        .words__inbox {
            padding: 40px;
            border-top: 3px double #000000;
            border-bottom: 3px double #000000;
        }
    }
</style>
