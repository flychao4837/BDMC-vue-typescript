<template>
  <div>
      <input type="checkbox" :id="id" :checked=checked @change="changed"/> {{label}}
  </div>
</template>
 
<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Model } from 'vue-property-decorator'
@Component
export default class MyCheckbox extends Vue {
  @Prop() label: string
  @Prop() id: string
 
  @Prop()
  @Model('change') checked: boolean
 
  changed(ev) {
    this.$emit('change', ev.target.checked)
  }
}
</script>