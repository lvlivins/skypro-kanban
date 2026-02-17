<!--Loading = 2 / Вся доска c TaskColumn (колонки и данные Task)
Принимает loading от HomeView как пропс.
TaskDesk не показывает Loader внутри карточек, а раздаёт состояние дальше.
Передаёт loading в каждую колонку (TaskColumn) - true(есть), false(нет)-->

<script setup>
import TaskColumn from '@/components/TaskColumn.vue'

import { columns as mockColumns } from '@/mocks/tasks.js'
import { ref } from 'vue'

const columns = ref([...mockColumns])

defineProps({ loading: Boolean })
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="main__block">
        <div class="main__content">
          <TaskColumn
            v-for="col in columns"
            :key="col.name"
            :title="col.title"
            :isFirst="col.isFirst"
            :tasks="col.tasks"
            :loading ="loading"
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
