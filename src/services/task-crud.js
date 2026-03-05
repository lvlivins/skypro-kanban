import { ref } from 'vue'
import { fetchTasks, postTask, editTask, deleteTask } from '@/services/api.js'

const tokenUser = 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck'

const tasks = ref([])
const error = ref('')
const loading = ref(false)

export function useTasks() {

  //получение списка задача
  const getTasks = async () => {
    try {
      loading.value = true
      error.value = ''

      const data = await fetchTasks({ token: tokenUser })
      if (data) tasks.value = data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  // создание задачи
  const createTask = async (task) => {
    try {
      error.value = ''
      const data = await postTask({ token: tokenUser, task })
      if (data) tasks.value = data
    } catch (err) {
      error.value = err.message
    }
  }

  // редактирование задачи
  const updateTask = async (id, task) => {
    try {
      error.value = ''
      const data = await editTask({ token: tokenUser, id, task })
      if (data) tasks.value = data
    } catch (err) {
      error.value = err.message
    }
  }

  // удаление задачи
  const removeTask = async (id) => {
    try {
      error.value = ''
      const data = await deleteTask({ token: tokenUser, id: id })
      if (data) tasks.value = data
    } catch (err) {
      error.value = err.message
    }
  }

  return { tasks, error, loading, getTasks, createTask, updateTask, removeTask }
}
