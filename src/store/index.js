import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        navigationOrigin: 'external'
    },
    mutations: {
        updateNavigationOrigin(state, origin) {
            state.navigationOrigin = origin;
        }
    },
    actions: {

    },
    getters: {
        getNavigationOrigin(state) {
            return state.navigationOrigin;
        }
    }
})