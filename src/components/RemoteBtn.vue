<template>
  <div class="btn" @click="emit('click', true)">{{value}}</div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, withDefaults, defineEmits } from "vue";

type Prop = {
  value: string
}
const emit = defineEmits<{
  (e: 'click', value: boolean): void;
}>()


withDefaults(defineProps<Prop>(), {
  value: 'empty'
})

onMounted(function () {
  console.log('Remote_btn mounted');
})

</script>



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