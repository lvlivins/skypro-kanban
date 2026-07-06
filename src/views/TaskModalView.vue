<!--ПРОСМОТР И РЕДАКТИРОВАНИЕ КАРТОЧКИ - МОДАЛКА-->
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, inject } from 'vue'
import TaskModal from '@/components/TaskModal.vue'

const { tasks, error, updateTask, removeTask } = inject('tasksData')

const route = useRoute()
const router = useRouter()

const taskRoute = computed(() => {
  const id = String(route.params.id)

  for (let i = 0; i < tasks.value.length; i++) {
    const task = tasks.value[i]
    const taskId = String(task._id)

    if (taskId === id) {
      return task
    }
  }
})

const editTask = (id, task) => {
  return updateTask(id, task)
}

const deleteTask = async (id) => {
  await removeTask(id)
  await router.push('/')
  // await router.push('/') - чтоб в модалке не возвращалось на главную стр сразу
}
</script>

<template>
  <TaskModal
    :task="taskRoute"
    :error="error"
    :editTask="editTask"
    :deleteTask="deleteTask"
  />
</template>
