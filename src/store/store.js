import { createStore } from 'vuex';

/**
 * Vuex store instance
 */
const store = createStore({
    state: {
        sStartDate : '',
        sEndDate : '',
    },
    mutations: {
        /**
         * mutates the state of start date
         * @param {object} state 
         * @param {string} sStartDate 
         */
        setStartDate(state, sStartDate) {
            state.sStartDate = sStartDate;
        },

        /**
         * mutates the state of end date
         * @param {object} state 
         * @param {string} sEndDate 
         */
        setEndDate(state, sEndDate) {
            state.sEndDate = sEndDate;
        }
    

    },

    actions: {
    
    },




})

export default store