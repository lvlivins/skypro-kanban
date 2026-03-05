import axios from 'axios'

const API_URL = 'https://wedev-api.sky.pro/api/kanban'

// get запрос передачи токена и получения задач (вход и получения текущего списка задач целиком)
export async function fetchTasks({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message)
  }
}

//post запрос на передачу новой задачи + token и возврата обновленного массива задач (создать задачу)
export async function postTask({ token, task }) {
  try {
    const data = await axios.post(API_URL, task, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': ''
      }
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message)
  }
}

//*get запрос передачи задачи(id) + token и возврата одной определенной задачи (получение конкретной задачи)
export async function getTask({ token, id }) {
  try {
    const data = await axios.get(API_URL + '/' + id, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    return data.data.task
  } catch (error) {
    throw new Error(error.message)
  }
}

// put запрос передачи обновленной задачи и возврат обновленного массива задач (редактировать задачу)
export async function editTask({ token, id, task }) {
  try {
    const data = await axios.put(API_URL + '/' + id, task, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': ''
      }
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message)
  }
}

// delete запрос передачи на удаление задачи(id)+token, и возврат обновленного массива задач (удаление задачи)
export async function deleteTask({ token, id }) {
  try {
    const data = await axios.delete(API_URL + '/' + id, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': ''
      }
    })
    return data.data.tasks
  } catch (error) {
    throw new Error(error.message)
  }
}
