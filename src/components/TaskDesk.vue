<!-- Loading = 2/2 Вся доска c TaskColumn (колонки и данные Task)
TaskDesk показывает Loader на месте себя.
Принимает loading от HomeView как пропс.
Указываем v-else (если false), v-if="loading" (если он видимый по setTimeOut)-->
<script setup>
import TaskColumn from '@/components/TaskColumn.vue'
import { computed } from 'vue'
import Loader from '@/components/Loader.vue'
import { loaderText } from '@/mocks/tasks.js'

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  tasks: {
    type: Array
  },
  columnsApi: {
    type: Array
  },
  error: {
    type: String,
    default: ''
  }
})

const isTask = computed(() => {
  if (!props.tasks) {
    return false
  }

  if (props.tasks.length === 0) {
    return false
  }
  return true
})
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="main__block">
        <transition
          name="fade"
          mode="out-in"
        >
          <Loader
            v-if="loading"
            :loaderText="loaderText"
            varLoader="yes"
          />
          <Loader
            v-else-if="!isTask"
            :loaderText="loaderText"
            varLoader="no"
            key="empty"
          />
          <div
            class="main__content"
            v-else
          >
            <TaskColumn
              v-for="column in columnsApi"
              :key="column.name"
              :title="column.title"
              :isFirst="column.isFirst"
              :tasks="column.tasks"
            />
          </div>
        </transition>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  width: 100%;
  background-color: #EAEEF6;
}

.main__block {
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
}

.main__content {
  width: 100%;
  display: flex;
}
</style>
