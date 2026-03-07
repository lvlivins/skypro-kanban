import { ref, computed } from 'vue'
import { fetchTasks, postTask, editTask, deleteTask } from '@/services/api.js'

const tokenUser = 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck'

const tasks = ref([])
const error = ref('')
const loading = ref(false)

// изм даты типа 2024-01-07T16:26:18.179Z в тип 07.01.24
const changeDate = (date) => {
  return new Date(date).toLocaleDateString('ru-RU', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit'
  })
}
// изм класса в зависимости от topic
const taskClass = (topic) => {
  if (topic === 'Web Design') {
    return '_orange'
  }

  if (topic === 'Copywriting') {
    return '_purple'
  }

  if (topic === 'Research') {
    return '_green'
  }
}
// изм задачи под формат АПИ
const changeTasksApi = (data) => {
  const newTasks = []

  for (let i = 0; i < data.length; i++) {
    const task = data[i]

    const newTask = {
      _id: task._id,
      userId: task.userId,
      title: task.title,
      topic: task.topic,
      date: changeDate(task.date),
      description: task.description,
      status: task.status,
      topicClass: taskClass(task.topic)
    }

    newTasks.push(newTask)
  }

  return newTasks
}
// порядок колонок с задачами
const columnsApi = computed(() => {
  const newColumns = [
    { name: 'noStatus', title: 'Без статуса', isFirst: true },
    { name: 'todo', title: 'Нужно сделать', isFirst: false },
    { name: 'inWork', title: 'В работе', isFirst: false },
    { name: 'testing', title: 'Тестирование', isFirst: false },
    { name: 'done', title: 'Готово', isFirst: false }
  ]

  const finalColumns = []

  for (let i = 0; i < newColumns.length; i++) {
    const column = newColumns[i]
    const columnTasks = []

    for (let c = 0; c < tasks.value.length; c++) {
      const task = tasks.value[c]

      if (task.status === column.title) {
        columnTasks.push(task)
      }
    }

    finalColumns.push({
      name: column.name,
      title: column.title,
      isFirst: column.isFirst,
      tasks: columnTasks
    })
  }

  return finalColumns
})

export function useTasks() {
  //получение списка задача
  const getTasks = async () => {
    try {
      loading.value = true
      error.value = ''

      const data = await fetchTasks({ token: tokenUser })
      if (data) {
        tasks.value = changeTasksApi(data)
      }
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

      const newTask = {
        title: task.title,
        description: task.description,
        topic: task.topic,
        status: 'Без статуса'
      }

      if (task.date) {
        const parts = task.date.split('.')

        if (parts.length === 3) {
          const day = parts[0]
          const month = parts[1]
          const year = parts[2]

          newTask.date = new Date(`${year}-${month}-${day}`).toISOString()
        }
      }

      const data = await postTask({ token: tokenUser, task: newTask })

      if (data) {
        tasks.value = changeTasksApi(data)
        return true
      }
      return false
    } catch (err) {
      error.value = err.message
      return false
    }
  }
  // редактирование задачи
  const updateTask = async (id, task) => {
    try {
      error.value = ''
      const data = await editTask({ token: tokenUser, id, task })
      if (data) {
        tasks.value = changeTasksApi(data)
      }
    } catch (err) {
      error.value = err.message
    }
  }
  // удаление задачи
  const removeTask = async (id) => {
    try {
      error.value = ''
      const data = await deleteTask({ token: tokenUser, id: id })
      if (data) {
        tasks.value = changeTasksApi(data)
      }
    } catch (err) {
      error.value = err.message
    }
  }

  return { tasks, error, loading, getTasks, createTask, updateTask, removeTask, columnsApi }
}
