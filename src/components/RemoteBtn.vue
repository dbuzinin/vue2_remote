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
<div class="btn">My btn {{item}}</div>
</template>

<style scoped>

</style>