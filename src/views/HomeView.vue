<!--Главный экран-->
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
  }, 3000)
})
</script>

<style scoped>
.home {
  color: #333;
}
</style>

<template>
  <div class="wrapper">
    <!-- pop-up start-->
    <ExitModal />

    <NewCardModal />

    <TaskModal />
    <!-- pop-up end-->

    <BaseHeader />

    <TaskDesk :loading="loading" />

  </div>
</template>


