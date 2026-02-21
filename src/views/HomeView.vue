<!-- Loading = 1 / Главный экран с loading через таймер - имитация запроса к API
Пока данные грузятся loading = true, после завершения loading = false.
Значение loading передаётся в компонент TaskDesk, чтобы вся доска знала идёт ли загрузка. -->
<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import TaskDesk from '@/components/TaskDesk.vue'
import { onMounted, ref } from 'vue'
import NewCardModal from '@/components/NewCardModal.vue'
import TaskModal from '@/components/TaskModal.vue'
import ExitModal from '@/components/ExitModal.vue'

const loading = ref(true)
onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 5000)
})
defineProps({ loading: Boolean })
</script>

<style scoped>
</style>

<template>
  <div class="wrapper">
    <!-- pop-up start-->
    <ExitModal />

    <NewCardModal />

    <TaskModal />
    <!-- pop-up end-->

    <BaseHeader />

    <TaskDesk :loading="loading"/>

  </div>
</template>


