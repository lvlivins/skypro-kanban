<!--СТРАНИЦА ДОБАВЛЕНИЯ НОВОЙ ЗАДАЧИ-->
<script setup>
import NewCardModal from '@/components/NewCardModal.vue'
import { useTasks } from '@/services/task-crud.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const { createTask } = useTasks()

const createNewTask = async (task) => {
  await createTask(task)
  await router.push('/')
}
</script>

<template>
  <NewCardModal :createNewTask="createNewTask" />
</template>
