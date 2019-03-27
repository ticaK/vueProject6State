import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        safelyStoredNumber:0
    },
    actions:{
        prvaAkcija(state){
            store.commit('incrementStoredNumber')
        }
    },
    getters:{
        safelyStoredNumber:state=>state.safelyStoredNumber
    }, 
    mutations: {
        incrementStoredNumber(state) {
            state.safelyStoredNumber++;
        },
        setStoredNumber(state,newNumber){
            state.safelyStoredNumber=newNumber;
        }
    }
    
});