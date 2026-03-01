<!-- ГЛАВНАЯ СТРАНИЦА
Loading = 1/2 Главный экран с loading через таймер - имитация запроса к API
Пока данные грузятся loading = true, после завершения loading = false.
Значение loading передаётся в компонент TaskDesk, чтобы вся доска знала идёт ли загрузка. -->
<script setup>
import { onMounted, ref } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'
import TaskDesk from '@/components/TaskDesk.vue'
import { RouterView } from 'vue-router'

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})
</script>

<style scoped>
.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
}
</style>

<template>
  <div class="wrapper">
    <BaseHeader />

    <TaskDesk :loading="loading"/>

    <RouterView />
  </div>
</template>


