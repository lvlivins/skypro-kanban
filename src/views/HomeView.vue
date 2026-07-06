<!-- ГЛАВНАЯ СТРАНИЦА
Loading = 1/2 Главный экран с loading через таймер - имитация запроса к API
Пока данные грузятся loading = true, после завершения loading = false.
Значение loading передаётся в компонент TaskDesk, чтобы вся доска знала идёт ли загрузка. -->
<script setup>
import { inject } from 'vue'
import BaseHeader from '@/components/BaseHeader.vue'
import TaskDesk from '@/components/TaskDesk.vue'
import { RouterView } from 'vue-router'

const { tasks, error, loading, columnsApi } = inject('tasksData')
</script>

<template>
    <BaseHeader />

    <TaskDesk
      :tasks="tasks"
      :loading="loading"
      :error="error"
      :columnsApi="columnsApi"
    />

    <RouterView />
</template>
