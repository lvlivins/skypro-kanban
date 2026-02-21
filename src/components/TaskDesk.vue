<!-- Loading = 2 / Вся доска c TaskColumn (колонки и данные Task)
TaskDesk показывает Loader на месте себя.
Принимает loading от HomeView как пропс.
Указываем v-else (если false), v-if="loading" (если он видимый по setTimeOut)-->
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

<script setup>
import TaskColumn from '@/components/TaskColumn.vue'
import { columns as mockColumns } from '@/mocks/tasks.js'
import { ref, computed } from 'vue'
import Loader from '@/components/Loader.vue'
const columns = ref([...mockColumns])
// const columns = ref(null) когда нет данных

import { loaderText } from '@/mocks/tasks.js'

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})

const isTask = () => {
  if (!columns.value || columns.value.length === 0) {
    return false
  }
  return true
}
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
            v-else-if="!isTask()"
            :loaderText="loaderText"
            varLoader="no"
            key="empty"
          />
          <div
            class="main__content"
            v-else
          >
            <TaskColumn
              v-for="col in columns"
              :key="col.name"
              :title="col.title"
              :isFirst="col.isFirst"
              :tasks="col.tasks"
            />
          </div>
        </transition>
      </div>
    </div>
  </main>
</template>


<!--<template>
import TaskColumn from '@/components/TaskColumn.vue'

  <main class="main">
    <div class="container">

      <div class="main__block">
        <div class="main__content">
          <TaskColumn />
        </div>
      </div>
    </div>
  </main>

</template>-->
