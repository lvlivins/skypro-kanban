<!--Общие кнопки для Login и Register-->
<script setup>
defineProps({
  buttonClass: { type: String }
})
</script>

<template>
  <div :class="buttonClass">
    <slot />
  </div>
</template>
