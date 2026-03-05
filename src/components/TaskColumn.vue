<!--Колонки с отрисовкой списка Task - из task.vue и API = mocks/tasks.js-->
<script setup>
import Task from '@/components/Task.vue'

defineProps({
  title: { type: String, required: true },
  isFirst: { type: Boolean, default: false },
  tasks: { type: Array, required: true }
})
</script>

<template>
  <div :class="['main__column', { column: isFirst }]">
    <div class="column__title">
      <p>{{ title }}</p>
    </div>

    <div class="cards">
      <Task
        v-for="t in tasks"
        :key="t._id || t.id"
        :task="t"
      />
    </div>
  </div>
</template>

<style scoped>
.main__column {
  width: 20%;
  margin: 0 auto;
  display: block;
}

.column__title {
  padding: 0 10px;
  margin: 15px 0;
}

.column__title p {
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}

.cards {
  width: 100%;
  display: block;
  position: relative;
}
</style>
