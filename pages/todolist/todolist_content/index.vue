<template>
<div>
<div class="weui-cells__title" style="font-size:120%">Title</div>
<div class="weui-cells weui-cells_after-title">
    <div class="weui-cell" style="background-color: #D1D1D1">
      <div class="weui-cell__hd" >
        <image :src="commit_color" style="margin-right: 5px;vertical-align: middle;width:15px; height: 15px;"/>
      </div>
      <div class="weui-cell__bd" > 
        <input v-model="commit_title"/>
      </div>
    </div> 
</div>
  
<div class="weui-cells__title" style="font-size:80%">Color</div>
<span  v-for="item in colorlist" :key="item.id">
<image :src="item.url" @tap="tapcolor(item.url)" style="margin-right: 5px;vertical-align: middle;width:22px; height: 22px;"/>
<text space="nbsp">&nbsp &nbsp</text>
</span>

<div class="weui-cells__title" style="font-size:80%">Reference</div>
<div class="weui-cells weui-cells_after-title">
    <div class="weui-cell" style="background-color: #D1D1D1">
      <div class="weui-cell__bd" > 
        <input v-model="commit_reference"/>
      </div>
    </div> 
</div>

<div class="weui-cells__title" style="font-size:80%">Content</div>
<div class="weui-cells weui-cells_after-title">
    <div class="weui-cell" style="background-color: #D1D1D1">
      <div class="weui-cell__bd" > 
        <input v-model="commit_content"/>
      </div>
    </div> 
</div>

<div class="weui-cells__title" style="font-size:80%">Date</div>
<div class="weui-cells weui-cells_after-title">
    <div class="weui-cell" style="background-color: #D1D1D1">
      <div class="weui-cell__hd"> 
        <image :src="icon_date_url" style="margin-right: 5px;vertical-align: middle;width:13px; height: 13px;"/>
      </div>
      <div class="weui-cell__bd"> 
        <picker mode="date" :value="commit_date" start="2018-08-01" end="2025-01-01" @change="DateChange">
          Selete Date
        </picker>      
      </div>
      <div class="weui-cell__ft" > 
        {{commit_date}}
      </div>
    </div> 
</div>

<div class="weui-cells__title" style="font-size:80%">Time</div>
<div class="weui-cells weui-cells_after-title">
    <div class="weui-cell" style="background-color: #D1D1D1">
      <div class="weui-cell__hd"> 
        <image :src="icon_date_url" style="margin-right: 5px;vertical-align: middle;width:13px; height: 13px;"/>
      </div>
      <div class="weui-cell__bd"> 
        <picker mode="time" :value="commit_time" start="00:00" end="24:00" @change="TimeChange">
          Selete Time
        </picker>      
      </div>
      <div class="weui-cell__ft" > 
        {{commit_time}}
      </div>
    </div> 
</div>  

<div class="weui-cells__title" style="font-size:80%"> </div>
<button plain="true" size="mini" style="background-color: #D1D1D1" @tap="commitall" >Submit to todolist</button>
</div>
</template>

<script>
import store from "../store";
import geturl from "@/utils/photo.js";
import Fly from "flyio/dist/npm/wx";

export default {
  data() {
    return {
      icon_date_url: geturl("date"),
      colorlist: [
        { id: "red", url: geturl("red") },
        { id: "black", url: geturl("black") },
        { id: "blue", url: geturl("blue") },
        { id: "green", url: geturl("green") },
        { id: "olive", url: geturl("olive") },
        { id: "orange", url: geturl("orange") },
        { id: "purple", url: geturl("purple") },
        { id: "yellow", url: geturl("yellow") }
      ]
    };
  },
  computed: {
    todocontent() {
      return store.state.todocontent;
    },
    commit_title: {
      get() {
        return store.state.thetask.title;
      },
      set(value) {
        var temp = JSON.parse(JSON.stringify(store.state.thetask));
        temp.title = value;
        store.commit("taskupdate", temp);
      }
    },
    commit_content: {
      get() {
        return store.state.thetask.content;
      },
      set(value) {
        var temp = JSON.parse(JSON.stringify(store.state.thetask));
        temp.content = value;
        store.commit("taskupdate", temp);
      }
    },
    commit_reference: {
      get() {
        return store.state.thetask.reference;
      },
      set(value) {
        var temp = JSON.parse(JSON.stringify(store.state.thetask));
        temp.reference = value;
        store.commit("taskupdate", temp);
      }
    },
    commit_date: {
      get() {
        return store.state.thetask.date.date;
      },
      set(value) {
        var temp = JSON.parse(JSON.stringify(store.state.thetask));
        temp.date.date = value;
        store.commit("taskupdate", temp);
      }
    },
    commit_time: {
      get() {
        return store.state.thetask.date.time;
      },
      set(value) {
        var temp = JSON.parse(JSON.stringify(store.state.thetask));
        temp.date.time = value;
        store.commit("taskupdate", temp);
      }
    },
    commit_color: {
      get() {
        return store.state.thetask.color;
      },
      set(value) {
        var temp = JSON.parse(JSON.stringify(store.state.thetask));
        temp.color = value;
        store.commit("taskupdate", temp);
      }
    },
    commit_isdelete: {
      get() {
        return store.state.thetask.isdelete;
      },
      set(value) {
        var temp = JSON.parse(JSON.stringify(store.state.thetask));
        temp.isdelete = value;
        store.commit("taskupdate", temp);
      }
    }
  },
  methods: {
    TimeChange(e) {
      var temp = JSON.parse(JSON.stringify(store.state.thetask));
      temp.date.time = e.mp.detail.value;
      // this.time_value = e.mp.detail.value;
      store.commit("taskupdate", temp);
    },
    DateChange(e) {
      var temp = JSON.parse(JSON.stringify(store.state.thetask));
      temp.date.date = e.mp.detail.value;
      // this.date_value = e.mp.detail.value;
      store.commit("taskupdate", temp);
    },
    tapcolor(url) {
      this.commit_color = url;
    },
    commitall: function() {
      var thetodocontent = JSON.parse(JSON.stringify(this.todocontent));
      var newstatus = {
        id: store.state.thetask.id,
        title: this.commit_title,
        content: this.commit_content,
        reference: this.commit_reference,
        date: {
          date: this.commit_date,
          time: this.commit_time
        },
        isdelete: this.commit_isdelete,
        color: this.commit_color
      };
      thetodocontent.splice(newstatus.id, 1, newstatus);
      store.commit("todocontentupdate", thetodocontent);
      let fly = new Fly();
      fly
        .post(geturl(post_content_item), newstatus)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
      wx.redirectTo({
        url: "/pages/todolist/todolist_category/main"
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