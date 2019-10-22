import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import UserService from '../services/UserService'

export default new Vuex.Store({
  state: {
    isLoading: false,
    layoutName: 'default-layout'
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
    layoutName(state) {
      return state.layoutName
    }
  },
  mutations: {
    START_LOADING(state, payload) {
      state.isLoading = true;
    },
    STOP_LOADING(state, payload) {
      state.isLoading = false;
    },
    SET_LAYOUT_NAME(state, payload) {
      state.layoutName = payload.data
    }
  },
  actions: {
    setLayoutName(context, actionData) {
      let payload = {
        type: 'SET_LAYOUT_NAME',
        data: actionData.layoutName
      };
      context.commit(payload)
    },
    async getUserList(context, actionData) {
      context.commit({
        type: 'START_LOADING'
      });
      let { data } = await UserService.getAll();
      context.commit({
        type: 'STOP_LOADING'
      });
      return data.data;
    },
    async getUserDetal(context, actionData) {
      context.commit({
        type: 'START_LOADING'
      });
      let { data } = await UserService.getDetail();
      context.commit({
        type: 'STOP_LOADING'
      });
      return data.data;
    }
  },
  modules: {
  }
})
