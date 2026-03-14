import { ref, computed } from 'vue'
import { fetchTasks, postTask, editTask, deleteTask } from '@/services/api.js'

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
// изм задачи под АПИ
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

export function useTasks(auth) {
  //получение списка задача
  const getTasks = async () => {
    try {
      loading.value = true
      error.value = ''

      const token = auth.userInfo.value.token

      const data = await fetchTasks({ token: token })
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

      const token = auth.userInfo.value.token

      const newTask = {
        title: task.title,
        description: task.description,
        topic: task.topic,
        status: 'Без статуса'
      }

      if (task.date) {
        const dateNumbers = task.date.split('.')

        if (dateNumbers.length === 3) {
          const day = dateNumbers[0]
          const month = dateNumbers[1]
          const year = '20' + dateNumbers[2]

          newTask.date = new Date(`${year}-${month}-${day}`).toISOString()
        }
      }

      const data = await postTask({ token: token, task: newTask })

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
      const token = auth.userInfo.value.token

      const updatedTask = {
        title: task.title,
        description: task.description,
        topic: task.topic,
        status: task.status
      }

      if (task.date) {
        const dateNumbers = task.date.split('.')

        if (dateNumbers.length === 3) {
          const day = dateNumbers[0]
          const month = dateNumbers[1]
          const year = '20' + dateNumbers[2]

          updatedTask.date = new Date(`${year}-${month}-${day}`).toISOString()
        }
      }

      const data = await editTask({ token: token, id, task: updatedTask })
      if (data) {
        tasks.value = changeTasksApi(data)
      }
    } catch (err) {
      error.value = err.message
    }
  }
  // удаление задачи
  const removeTask = async (id) => {
    const token = auth.userInfo.value.token
    try {
      error.value = ''
      const data = await deleteTask({ token: token, id: id })
      if (data) {
        tasks.value = changeTasksApi(data)
      }
    } catch (err) {
      error.value = err.message
    }
  }

  return { tasks, error, loading, getTasks, createTask, updateTask, removeTask, columnsApi }
}
