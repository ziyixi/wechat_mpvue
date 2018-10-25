<template>
<div>
<div class="weui-cells__title" >todolist</div>
<div class="weui-cells weui-cells_after-title">
    <div class="weui-cell" v-for="item in todocontent" :key="item.id" style="background-color: rgb(236, 236, 236)">
      <div class="weui-cell__hd" @tap="tapdelete(item)">
        <image v-if="item.isdelete" :src="item.color" style="margin-right: 5px;vertical-align: middle;width:10px; height: 10px;"/>
        <image v-else :src="item.color" style="margin-right: 5px;vertical-align: middle;width:10px; height: 10px;"/>
      </div>
      <div class="weui-cell__bd" @tap="tapbody(item)"> 
        <thedel v-if="item.isdelete" :text="item.title"></thedel>
        <thecheck v-else :text="item.title"></thecheck>
      </div>
      <div class="weui-cell__ft" @tap="tapfoot(item)">{{item.date.date}}</div>
    </div> 
    <div class="weui-cell" style="background-color: #D1D1D1" @tap="addnew">
      <div class="weui-cell__hd">
        <image :src="add_url" style="margin-right: 5px;vertical-align: middle;width:13px; height: 13px;"/>
      </div>
      <div class="weui-cell__bd" @tap="submitall"> 
        Add a new item
      </div>
    </div> 
</div>
</div>
</template>


<script>
import thedel from "@/components/thedel";
import thecheck from "@/components/thecheck";
import geturl from "@/utils/photo.js";
import store from "../store";

export default {
  data: {
    add_url: geturl("add")
  },
  computed: {
    thetask() {
      return store.state.thetask;
    },
    todocontent() {
      return store.state.todocontent;
    }
  },
  components: {
    thedel,
    thecheck
  },
  methods: {
    taskupdate: function(newstatus) {
      store.commit("taskupdate", newstatus);
    },
    todocontentupdate(newstatus) {
      store.commit("todocontentupdate", newstatus);
    },
    tapfoot: function(item) {
      var newstatus = item;
      this.taskupdate(newstatus);
      this.$router.push({
        path: "/pages/todolist/todolist_content/main"
      });
    },
    tapbody: function(item) {
      item.isdelete = !item.isdelete;
    },
    getcolorurl: function(color) {
      return geturl(color);
    },
    tapdelete: function(item) {
      var thetodocontent = JSON.parse(JSON.stringify(this.todocontent));
      thetodocontent.splice(item.id, 1);
      var i = 0;
      for (let item of thetodocontent) {
        item.id = i;
        i++;
      }
      this.todocontentupdate(thetodocontent);
    },
    addnew: function() {
      var newstatus = {
        id: this.todocontent.length,
        title: "",
        content: "",
        reference: "",
        date: {
          date: "2018-08-01",
          time: [0, 0]
        },
        isdelete: false,
        color: geturl("red")
      };
      this.taskupdate(newstatus);
      wx.redirectTo({
        url: "/pages/todolist/todolist_content/main"
      });
    }
  }
};
</script>

`<style>
page {
  width: 100%;
  height: 100%;
  background-color: rgb(236, 236, 236);
}
</style>`