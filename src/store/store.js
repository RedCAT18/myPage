import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        fixMenu: false,
    },
    actions: {
        setPosition:({commit}, payload)=>{
            commit('SET_POSITION', payload);
        },
    },
    mutations: {
        SET_POSITION: (state, payload) => {
            // console.log(height);
            if(payload < 200) {
                state.fixMenu = false;
            } else {
                state.fixMenu = true;
            } 
        },
    },
    getters: {
        getPosition: state => {
            return state.fixMenu;
        },
    }
});