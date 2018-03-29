import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        profile: 'main',
    },
    actions: {
        setProfilePage:({commit}, payload)=>{
            commit('SET_PROFILE_PAGE', payload);
        },
    },
    mutations: {
        SET_PROFILE_PAGE: (state, payload) => {
            state.profile = payload;
        },
    },
    getters: {
        getProfilePage: (state)=>{
            switch(state.profile) {
                case 'main': return 'profileBase';
                case 'skill': return 'profileSkill'; 
                case 'exp': return 'profileExp'; 
                default: return false;
            }
        }
    }
});