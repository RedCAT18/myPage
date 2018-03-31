<template>
    <div class="profile__inbox">
        <h2 class= "profile__subtitle">Skills & Abilities</h2>
        <div class="profile__detail-box">
            <h3 class="profile__detail-title">
                Front End
            </h3>
            <div class="profile__detail-inbox">
                <ul class="profile__skill-list">
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">HTML/CSS</p>
                        <span class="item-additional">+ Bootstrap, CSS Preprocessors(SCSS)</span>
                        <span class="item-icons">
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                        </span>
                    </li>
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">Javascript(ECMAScript6)</p> 
                        <span class="item-additional">+ VueJS, jQuery, Redux (+ReactJS)</span>
                        <span class="item-icons">
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='halfStar'/>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 class="profile__detail-title">
                Back End
            </h3>
            <div class="profile__detail-inbox">
                <ul class="profile__skill-list">
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">PHP</p>
                        <span class="item-additional">+ Laravel</span>
                        <span class="item-icons">
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                        </span>
                    </li>
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">SQL</p> 
                        <span class="item-additional">+ MySQL</span>
                        <span class="item-icons">
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                            <font-awesome-icon  :icon='star'/>
                        </span>
                    </li>
                </ul>
            </div>
            <h3 class="profile__detail-title">
                Others
            </h3>
            <div class="profile__detail-inbox">
                <ul class="profile__skill-list">
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">VDCS</p>
                        <span class="item-additional">+ Git</span>
                    </li>
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">Bundler</p>
                        <span class="item-additional">+ Webpack</span>
                    </li>
                    <li class="profile__skill-item">
                        <p class="profile__skill-subtitle">Design</p> 
                        <span class="item-additional">+ Photoshop</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faHalfStar from '@fortawesome/fontawesome-free-solid/faStarHalf';

export default {
    components: {
        FontAwesomeIcon,  
    },
    computed: {
        star(){
            return faStar;
        },
        halfStar(){
            return faHalfStar;
        }
    }
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
            padding: 10px 40px;
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
                    flex-direction: row;
                    @media screen and (max-width: 768px) {
                        flex-direction: column;
                    }
                    .profile__skill-item {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        flex-wrap: wrap;
                        border-radius: 5px;
                        // background: rgba(255, 255, 255, 0.2);
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
                            font-size: 14pt;
                            font-style: italic;
                        }
                        .item-additional {
                            text-indent: 20px;
                            font-size: 11pt;
                            font-weight: 400;
                            font-style: italic;
                            font-family: $nanum;
                        }
                        .item-icons {
                            margin: 10px;
                            display: flex;
                            justify-content: flex-end;
                        }
                    }
                }
            }
        }
    }
</style>
