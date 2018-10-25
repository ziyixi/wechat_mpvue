import Vue from 'vue'
import Vuex from 'vuex'
import geturl from "@/utils/photo.js";
import Fly from "flyio/dist/npm/wx";

Vue.use(Vuex)

let fly = new Fly;
var thetodocontent = [];
fly.get(geturl(get_todolist))
  .then(function (response) {
    console.log(response);
    thetodocontent = response;
  })
  .catch(function (error) {
    console.log(error);
  });

var store = new Vuex.Store({
  state: {
    thetask: {
      id: undefined,
      title: undefined,
      content: undefined,
      reference: undefined,
      date: {
        date: undefined,
        time: undefined
      },
      isdelete: undefined,
      color: undefined
    },
    todocontent: thetodocontent
  },
  mutations: {
    taskupdate: (state, newstatus) => {
      const obj = state;
      obj.thetask = newstatus;
    },
    todocontentupdate: (state, newstatus) => {
      const obj = state;
      obj.todocontent = newstatus;
    }
  }
})

export default store
