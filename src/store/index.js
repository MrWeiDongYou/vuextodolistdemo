import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    // 文本框的值
    inputVal: '大长腿',
    nextId: 10
  },
  mutations: {
    initList (state, data) {
      state.list = data
    },
    setInputeValue (state, val) {
      state.inputVal = val
    },
    addItemS (state) {
      var obj = {
        id: state.nextId,
        indo: state.inputVal,
        done: false
      }
      console.log(obj)
      state.list.push(obj)
      state.nextId++
      state.inputVal = ''
    }
  },
  actions: {
    getList (context) {
      axios.get('/list.json').then(data => {
        context.commit('initList', data.data)
      })
    }
  },
  modules: {
  }
})
