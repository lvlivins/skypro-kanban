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
  <div
    class="loader-board__content"
    v-if="varLoader === 'yes'"
    :style="{ height: height + 'px' }"
  >
    <div class="loader-column">
      <div class="loader-column__box">
        <p class="loader-column__title">Без статуса</p>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>
    </div>

    <div class="loader-column">
      <div class="loader-column__box">
        <p class="loader-column__title">Нужно сделать</p>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>
    </div>

    <div class="loader-column">
      <div class="loader-column__box">
        <p class="loader-column__title">В работе</p>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>
    </div>

    <div class="loader-column">
      <div class="loader-column__box">
        <p class="loader-column__title">Тестирование</p>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>
    </div>

    <div class="loader-column">
      <div class="loader-column__box">
        <p class="loader-column__title">Готово</p>
      </div>

      <div class="loader-card">
        <div class="loader-card__top">
          <div class="loader-card__badge"></div>
          <div class="loader-card__menu"></div>
        </div>
        <div class="loader-card__title"></div>
        <div class="loader-card__date"></div>
      </div>
    </div>
  </div>

  <p
    v-else
    class="loader-empty"
  >
    {{ loaderText[varLoader] }}
  </p>
</template>

<style scoped>

.loader-board__content {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.loader-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.loader-card__badge,
.loader-card__menu,
.loader-card__title,
.loader-card__date {
  background: linear-gradient(
    90deg,
    #dbe2ef 0%,
    #eff3fa 45%,
    #dbe2ef 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s linear infinite;
}

.loader-column__box {
  margin: 15px 0;
  padding: 0 10px;
}

.loader-column__title {
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
}

.loader-card {
  background: #ffffff;
  border-radius: 10px;
  min-height: 130px;
  padding: 12px 10px 14px;
  width: 220px;
  height: 130px;
}

.loader-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.loader-card__badge {
  width: 82px;
  height: 20px;
  border-radius: 18px;
}

.loader-card__menu {
  width: 14px;
  height: 4px;
  border-radius: 999px;
}

.loader-card__title {
  width: 113px;
  height: 13px;
}

.loader-card__date {
  width: 58px;
  height: 13px;
  margin-top: 40px;
}

.loader-empty {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  text-align: center;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}
</style>


