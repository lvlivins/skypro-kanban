<!-- ГЛАВНАЯ СТРАНИЦА
Loading = 1/2 Главный экран с loading через таймер - имитация запроса к API
Пока данные грузятся loading = true, после завершения loading = false.
Значение loading передаётся в компонент TaskDesk, чтобы вся доска знала идёт ли загрузка. -->
<script setup>
import { onMounted } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'
import TaskDesk from '@/components/TaskDesk.vue'
import { RouterView } from 'vue-router'
import { useTasks } from '@/services/task-crud.js'

const { tasks, error, loading, getTasks, columnsApi } = useTasks()
onMounted(getTasks)
/*const loading = ref(false)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})*/
</script>

<template>
  <div class="wrapper">
    <BaseHeader />

    <TaskDesk
      :tasks="tasks"
      :loading="loading"
      :error="error"
      :columnsApi="columnsApi"
    />

    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
}
</style>


