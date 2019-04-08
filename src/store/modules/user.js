import Vue from 'vue'
import axios from 'axios'

// initial state
const state = {
	id: 1
}

// getters
const getters = {
}

// actions
const actions = {
	
}

// mutations
const mutations = {
	login(state,user){
		state.id = 1
	},
	logout(state){
		for(let key in state){
			delete state[key]
		}
	}
}

export default {
  state,
  getters,
  actions,
  mutations
}