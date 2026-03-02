<!-- ГЛАВНАЯ СТРАНИЦА
Loading = 1/2 Главный экран с loading через таймер - имитация запроса к API
Пока данные грузятся loading = true, после завершения loading = false.
Значение loading передаётся в компонент TaskDesk, чтобы вся доска знала идёт ли загрузка. -->
<script setup>
import { onMounted, ref } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'
import TaskDesk from '@/components/TaskDesk.vue'
import { RouterView } from 'vue-router'
import { fetchTasks } from '@/services/api'

const loading = ref(false)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

const tasks = ref([])
const error = ref('')

const getTasks = async () => {
  try {
    loading.value = true
    /*const token= localStorage.getItem('token') || ''*/

    const data = await fetchTasks({
      token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck'
        // 'пока нет авторизации - передаем токен вручную'
    })
    if (data) tasks.value = data
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(getTasks)

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

    <TaskDesk
      :loading="loading"
      :error="error"
    />

    <RouterView />
  </div>
</template>


