<template>
  <div id="test">
      
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Model, Watch, Provide} from 'vue-property-decorator'

@Component({})
export default class Test extends Vue {
  // 初始数据可以直接声明为实例的属性
  message: string = 'Hello World!'
  
  mounted() {

  }
  // 组件方法也可以直接声明为实例的方法
  onClick (): void {
    window.alert(this.message)
  }
}
</script>

<style>
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#test canvas{
    top:0;
    left:0;
  }


</style>