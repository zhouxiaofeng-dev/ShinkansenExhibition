import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let PageAbout = {
    namespaced: true,
    state: {
        isClose: true,
        OptionBoxShow:false,
        
    },
    actions: {},
    mutations: {},
    
}

export default new Vuex.Store({
    modules: {
        PageAbout
    }
})