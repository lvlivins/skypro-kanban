<!--ПРОСМОТР И РЕДАКТИРОВАНИЕ КАРТОЧКИ - МОДАЛКА-->
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { columns } from '@/mocks/tasks'
import TaskModal from '@/components/TaskModal.vue'

const route = useRoute()
const taskRoute = computed(() => {
  const id = Number(route.params.id)

  for (const col of columns) {
    const found = col.tasks.find((t) => t.id === id)
    if (found) {
      return found
    }
  }

})
</script>

<template>
  <TaskModal :task="taskRoute" />
</template>
