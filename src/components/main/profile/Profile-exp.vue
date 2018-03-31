<template>
    <div class="profile__inbox">
        <h2 class= "profile__subtitle">Education & Experience</h2>
        <div class="profile__detail-box">
            <h3 class="profile__detail-title">
                Education
            </h3>
            <div class="profile__detail-inbox">
                <ul class="profile__skill-list">
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">Bachelor of Engineering</p>
                        <span class="item-additional"> Sejong University (Korea) | 2001 ~ 2005</span>
                        <span class="item-additional"> Computer Engineering > Digital Contents</span>

                    </li>
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">Deploma Level 7</p> 
                        <span class="item-additional">Tasman International Academies (NZ) | 2016 ~ 2017</span>
                        <span class="item-additional"> Multiedia</span>

                    </li>
                </ul>
            </div>
            <h3 class="profile__detail-title">
                Work Experience
            </h3>
            <div class="profile__detail-inbox">
                <ul class="profile__skill-list">
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">Graphic Designer</p>
                        <span class="item-additional"> Soft Action (Korea) | 2007 ~ 2008</span>
                        <span class="item-additional"> Making graphic resources, design characters and materials.</span>
                    </li>
                </ul>
            </div>
        </div>
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
            font-size: 24pt;
            font-weight: 100;
            text-shadow: 3px 3px 0 rgba(255, 255, 255, 0.5);
            @media screen and (max-width: 768px) {
                font-size: 6vmax;
                text-align: center;
            } 
        }
        .profile__detail-box {
            padding: 20px;
            .profile__detail-title {
                font-family: $fredericka;
                font-size: 20pt;
                margin: 40px 0 10px;
                font-weight: 400;
                display: flex;
                justify-content: center;
            }
            .profile__detail-inbox {
                .profile__skill-list {
                    padding: 0;
                    margin: 0;
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    .profile__skill-item {
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        border-radius: 5px;
                        border: 1px dashed rgba(255, 255, 255, 0.5);
                        box-shadow: 5px 5px 0 rgba(255, 255, 255, 0.5);
                        padding: 10px;
                        @media screen and (max-width: 768px){
                            justify-content: center;
                        }
                        margin: 10px;
                        .profile__skill-subtitle {
                            margin: 10px;
                            font-family: $nanum;
                            font-weight: 700;
                            font-size: 16pt;
                            font-style: italic;
                        }
                        .item-additional {
                            display: flex;
                            justify-content: flex-end;
                            text-indent: 20px;
                            font-size: 12pt;
                            font-family: $nanum;
                            font-weight: 400;
                            font-style: italic;
                            @media screen and (max-width:768px) {
                                font-size: 2.2vmax;
                                text-align: right;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
