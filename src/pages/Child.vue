<template>
  <div>
      {{fullMessage}}
      <div>
        {{users}}
    </div>
  </div>
  
</template>
 
<script lang="ts">
 
import Vue from 'vue'
import {Prop, Component, Inject} from 'vue-property-decorator'
 
@Component({})
export default class Child extends Vue {
    message: string = "Hello";
    @Prop({
        type: String,
        default: 'Default asdasssssssssssssssssssssss'
    }) msg: string;
    
    @Inject("users") users;

    get fullMessage() {
        return `${this.message},${this.msg}`;
    }
}
</script>

