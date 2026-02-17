<script setup>
defineProps({
  width: {
    type: Number,
    default: 230
  },
  height: {
    type: Number,
    default: 30
  }
})
</script>

<style
  lang="scss"
  scoped
>
.loader {
  border-radius: 50px;
  background-color: #565EEF;
}
</style>

<template>
  <div
    :style="{width: width + 'px', height: height + 'px'}"
    class="loader"
  >
  </div>
</template>
