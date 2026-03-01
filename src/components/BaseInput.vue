<!--Общие inputs для Login и Register-->
<script setup>
defineProps({
  inputClass: { type: String }
})
</script>

<template>
  <div :class="inputClass">
    <slot />
  </div>
</template>
