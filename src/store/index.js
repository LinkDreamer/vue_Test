import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
  state:{
    num:10
  },
  mutations:{
    addNum(state){
      state.num += 10
    }
  },
  actions:{

  },
  modules:{

  }
})