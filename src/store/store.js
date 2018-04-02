import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        position: 'index',
    },
    actions: {
        getPagePosition:({commit}, payload)=>{
            commit('SET_PAGE_POSITION', payload);
        },
    },
    mutations: {
        SET_PAGE_POSITION: (state, payload) => {
            state.position = payload;
        },
    },
    getters: {
        getPosition: state => {
            return state.position;
        },
    }
});