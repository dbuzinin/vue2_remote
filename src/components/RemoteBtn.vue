<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class RemoteBtn extends Vue {
  @Prop({default: false}) item!: boolean;
  @Prop({default: 'My remote btn'}) value!: string;
  mounted(): void {
    console.log('Remote_btn', this)
  }
}
</script>

<template>
<div class="btn" @click="$emit('click')">{{value}}</div>
</template>

<style scoped>
.btn {
  display: inline-flex;
  padding: 8px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  border-radius: 8px;
}
</style>