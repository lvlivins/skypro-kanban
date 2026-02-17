<!--Элемент Loader-->
<script setup>
defineProps({
  width: {
    type: Number,
    default: 220
  },
  height: {
    type: Number,
    default: 130
  }
})
</script>

<style scoped>
.loader {
  border-radius: 10px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 13px 19px;
}

.box-loader {
  padding: 5px;
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
