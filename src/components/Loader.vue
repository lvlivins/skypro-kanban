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
  },
  loaderText: {
    type: Object,
    required: true
  },
  varLoader: {
    type: String,
    default: 'yes'
  }
})
</script>

<template>
  <div class="box-loader">
    <div
      :style="{width: width + 'px', height: height + 'px'}"
      class="loader"
    >
      <p :class="{ typing: varLoader === 'yes' }">
        {{ loaderText[varLoader] }}
      </p>
    </div>
  </div>
</template>

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

.typing {
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: typing 2s steps(40, end) infinite;
}

@keyframes typing {
  0% {
    width: 0;
  }
  70% {
    width: 20ch;
  }
  100% {
    width: 20ch;
  }
}
</style>


