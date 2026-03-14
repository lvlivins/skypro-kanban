<!--СТРАНИЦА ДОБАВЛЕНИЯ НОВОЙ ЗАДАЧИ-->
<script setup>
import NewCardModal from '@/components/NewCardModal.vue'
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const router = useRouter()
const { createTask } = inject('tasksData')

const createNewTask = async (task) => {
  await createTask(task)
  await router.push('/')
}
</script>

<template>
  <NewCardModal :createNewTask="createNewTask" />
</template>
