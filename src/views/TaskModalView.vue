<!--ПРОСМОТР И РЕДАКТИРОВАНИЕ КАРТОЧКИ - МОДАЛКА-->
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import TaskModal from '@/components/TaskModal.vue'
import { useTasks } from '@/services/task-crud.js'

const { tasks, error, updateTask, removeTask } = useTasks()

const route = useRoute()
const router = useRouter()

const taskRoute = computed(() => {
  const id = String(route.params.id)

  for (let i = 0; i < tasks.value.length; i++) {
    const task = tasks.value[i]
    const taskId = String(task._id || task.id)

    if (taskId === id) {
      return task
    }
  }
})

const editTask = async (id, task) => {
  await updateTask(id, task)
  await router.push('/')
}

const deleteTask = async (id) => {
  await removeTask(id)
  await router.push('/')
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
