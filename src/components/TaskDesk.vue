<!-- Loading = 2 / Вся доска c TaskColumn (колонки и данные Task)
TaskDesk показывает Loader на месте себя.
Принимает loading от HomeView как пропс.
Указываем v-else (если false), v-if="loading" (если он видимый по setTimeOut)-->

<script setup>
import TaskColumn from '@/components/TaskColumn.vue'

import { columns as mockColumns } from '@/mocks/tasks.js'
import { ref } from 'vue'
import Loader from '@/components/Loader.vue'

const columns = ref([...mockColumns])
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>

  <main class="main">
    <div class="container">
      <div class="main__block">
        <Loader v-if="loading" />
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
