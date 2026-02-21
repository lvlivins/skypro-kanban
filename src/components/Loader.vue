<!-- Имитация загрузки (loader) при запросе к API - use в HomeView & TaskDesk-->
<script setup>
defineProps({
  width: {
    type: Number,
    default: 1200
  },
  height: {
    type: Number,
    default: 600
  }
})
</script>

<style scoped>
.loader {
  border-radius: 10px;
  font-size: 36px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 13px 19px;
}

.box-loader {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div class="box-loader">
    <div
      :style="{width: width + 'px', height: height + 'px'}"
      class="loader"
    >
      <p> Данные загружаются</p>
    </div>
  </div>
</template>
