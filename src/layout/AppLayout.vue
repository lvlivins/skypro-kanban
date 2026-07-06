<script setup>
import { RouterView } from 'vue-router'
import { onMounted, provide, ref, watch } from 'vue'
import { useTasks } from '@/services/task-crud.js'

const userInfo = ref(null) // данные пользователя = token, id, name, email итд

//фун-ция изм значения в userInfo
function setUserInfo(value) {
  userInfo.value = value
  try {
    localStorage.setItem('userInfo', JSON.stringify(value)) //setUserInfo записывает данные в localStorage - после перезагрузки данные не исчезают
  } catch (e) {
    console.error('ошибка:', e)
    return null
  }
}

//фун-ция удаления значения в userInfo
function removeUserInfo() {
  userInfo.value = null
  try {
    localStorage.removeItem('userInfo')
  } catch (e) {
    console.error('ошибка:', e)
  }
}

// передача значений, все что связано с аутентификацией
const authData = {
  userInfo,
  setUserInfo,
  removeUserInfo
}

provide('auth', authData)

const { tasks, error, loading, getTasks, createTask, updateTask, removeTask, columnsApi } = useTasks(authData) // перенос из task-crud

provide('tasksData', { tasks, error, loading, columnsApi, getTasks, createTask, updateTask, removeTask }) // распространение на все дочерние элементы

watch(
  () => userInfo.value,
  (user) => {
    if (user && user.token) {
      getTasks()
    }
  },
  { immediate: true }
)
// проверка - лежат ли данные(те token) в userInfo
onMounted(() => {
  try {
    const data = localStorage.getItem('userInfo')
    console.log(data) // чек токена
    if (data) userInfo.value = JSON.parse(data)
  } catch (e) {
    userInfo.value = null
    console.error('ошибка:', e)
  }
})

</script>

<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: auto;
  background-color: #F1F1F1;
}
</style>

