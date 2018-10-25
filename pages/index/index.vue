<template>
<div class="page">
    <div class="page__bd">
      <div class="weui-grids">
        <block v-for="item in grids" :key="item.name">
          <navigator :url="item.url" class="weui-grid" hover-class="weui-grid_active">
            <image class="weui-grid__icon" :src="item.src" />
            <div class="weui-grid__label">{{item.name}}</div>
          </navigator>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
import geturl from "@/utils/photo.js"
export default {
  data() {
    return {
      grids: [
        {
          src: geturl("todolist"),
          name: "todolist",
          url: "/pages/todolist/todolist_category/main"
        },
        { src: geturl("server"), name: "Server" },
        { src: geturl("paper"), name: "Paper" },
        { src: geturl("video"), name: "Video" },
        { src: geturl("mail"), name: "Mail" },
        { src: geturl("note"), name: "Note" },
        { src: geturl("alarm"), name: "Alarm" },
        { src: geturl("setting"), name: "Setting" },
        { src: geturl("help"), name: "Help" }
      ]
    };
  },
  methods: {}
};
</script>

<style>
page {
  margin-top: 50px;
}
</style>