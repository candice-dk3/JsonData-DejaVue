import { createStore } from 'vuex'

export default createStore({
  state: {
    cars:null,
    gaming_consoles:null,
    friends:null
  },
  getters: {
  },
  mutations: {
    setCars(state, payload){
      state.cars = payload
    },
    setFriends(state, payload){
      state.friends = payload
    },
    setConsoles(state, payload){
      state.gaming_consoles = payload
    }
  },
  actions: {
    async getData({commit}){
      let fetchedData = await fetch('https://candice-dk3.github.io/JsonData-DejaVue/data/data.json')
      let data = await fetchedData.json()
      let {cars, friends, gaming_consoles} = data
      commit('setCars', cars)
      commit('setFriends', friends)
      commit('setConsoles', gaming_consoles)
    }
  },
  modules: {
  }
})
