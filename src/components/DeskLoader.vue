<script setup>
import Loader from '@/components/Loader.vue'
</script>

<style
  lang="scss"
  scoped
>
.loader-desk {
  width: 270px;
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}
</style>

<template>
  <div class='loader-desk'>
    <Loader />
    <loader :width="164" />
  </div>
</template>
