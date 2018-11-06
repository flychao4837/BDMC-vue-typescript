<template>
  <div id="app">
    {{message}}
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Model, Watch, Provide } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  pagesStr: string;
  pageIds: Array<any>;
  ifrs: Array<any> = [];
  frames: any;
  pageLoaded: Array<any> = [];
  currentId: number = 0;
  message:string;
  created() {
    this.message = "我是首页"

  }
  mounted() {

  }

}
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
html,body,#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
iframe {
  border: none;
  width: 100%;
  height: 100%;
}
</style>