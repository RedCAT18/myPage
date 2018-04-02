
import intro from './components/main/Intro.vue';

const profile = resolve => require(['./components/main/Profile.vue'], resolve);
const words = resolve => require(['./components/main/Words.vue'], resolve);
const contact = resolve => require(['./components/main/Contact.vue'], resolve);

export const routes = [
    {path: '/', component: intro, name:'intro'},
    {path: '/profile', component: profile, name: 'profile'},
    {path: '/words', component: words, name: 'words'},
    {path: '/contact', component: contact, name: 'contact'}
];