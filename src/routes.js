
import Profile from './components/main/Profile.vue';
import ProfileBase from './components/main/profile/Profile-main.vue';

const ProfileSkill = resolve => require(['./components/main/profile/Profile-skill.vue'], resolve);
const ProfileExp = resolve => require(['./components/main/profile/Profile-exp.vue'], resolve);

export const routes = [
    { path: '', name: 'profileBase', component: ProfileBase },
    { path: '/skill', name: 'profileSkill', component: ProfileSkill },
    { path: '/exp', name: 'profileExp', component: ProfileExp },
    
];