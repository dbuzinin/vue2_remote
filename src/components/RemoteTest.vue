<script setup lang="ts">
import {withDefaults, defineProps} from 'vue'

type Prop = {
  value: string
}
withDefaults(defineProps<Prop>(), {
   value: 'empty'
 })
</script>

<template>
<div>Test: {{value}}</div>
</template>

<style scoped>

</style>