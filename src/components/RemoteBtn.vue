<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class RemoteBtn extends Vue {
  @Prop({default: false}) item!: boolean;
  mounted(): void {
    console.log('Remote_btn', this)
  }
}
</script>

<template>
<div class="btn" @click="$emit('load')">My btn {{item}}</div>
</template>

<style scoped>
.btn {
  padding: 8px;
  background-color: #42b983;
  color: white;
}
</style>