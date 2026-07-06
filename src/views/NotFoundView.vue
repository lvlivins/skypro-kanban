<!--СТРАНИЦА С ОШИБКОЙ 404-->

<script setup>
</script>
<template>
  <div class="not-found">
    <div class="not-found__container">
      <div class="not-found__card">
        <h1 class="not-found__title">404</h1>

        <p class="not-found__text">
          Страница не найдена
        </p>

        <RouterLink
          to="/"
          class="not-found__button _btn-bg _hover01"
        >
          Вернуться на главную
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found {
min-height: 100vh;
background: #EAEEF6;
display: flex;
justify-content: center;
align-items: center;
padding: 40px 20px;
}

.not-found__container {
width: 100%;
max-width: 500px;
}

.not-found__card {
background: #FFFFFF;
border-radius: 10px;
padding: 50px 40px;
text-align: center;
}

.not-found__title {
margin: 0 0 20px;
font-size: 80px;
font-weight: 700;
color: #565EEF;
}

.not-found__text {
margin: 0 0 35px;
font-size: 20px;
line-height: 28px;
color: #565656;
}

.not-found__button {
display: inline-block;
padding: 12px 26px;
  background-color: #565EEF;
  border-radius: 4px;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
}
</style>

<!--<script setup> КРЕАТИВНЫЙ ВАР
import { ref } from 'vue'

const isMuted = ref(true) /*false - сразу запуститься звук */

function toggleSound() {
  isMuted.value = !isMuted.value
}
</script>

<template>
  <div class="page404">
    <div class="circleWrap">
      <div
        class="circle"
        @click="toggleSound" &lt;!&ndash;клик по видео - работает функция toggleSound() и isMuted.value = !isMuted.value&ndash;&gt;
      >
      <video
        class="video"
        autoplay
        loop
        playsinline
        :muted="isMuted"
      >
        <source
          src="/videos/not_found_pepe.mp4"
          type="video/mp4"
        />
      </video>
      &lt;!&ndash;пока звук выкл - показ кнопки&ndash;&gt;
      <div
        class="playOverlay"
        v-if="isMuted"
      >
        <div class="playButton"></div>
      </div>
    </div>
    <svg
      class="circleText"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <defs>
        <path
          id="circlePath"
          d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
        />
      </defs>

      <text class="circleTextFill">
        <textPath
          href="#circlePath"
          startOffset="50%"
          text-anchor="middle"
        > • Фа! Страница не найдена! Пепе, все будет шнеле — просто вернись на главную •
        </textPath>
      </text>
    </svg>
  </div>

  <div class="text">
    <div class="title">ВАТАФА! ЧЕ ЗА 404</div>
    <RouterLink
      class="backButton"
      to="/"
    >Вернуться на главную
    </RouterLink>
  </div>
  </div>
</template>

<style>
.page404 {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 24px;
  background: radial-gradient(
    circle at 35% 50%, #000 0%,
    #2a2a2a 35%,
    #6a6a6a 65%,
    #cfcfcf 100%
  );
  overflow: hidden;
}

.circleWrap {
  position: relative;
}

.circle {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  outline: 2px solid rgba(255, 255, 255, 0.08);
}

.video {
  width: 100%;
  height: 180%;
  object-fit: cover;
  transform: translateY(-20%);
  position: relative;
  z-index: 1;
}

.playOverlay {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.25);
  pointer-events: none;
  z-index: 2;
}

.playButton {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.55);
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}

.playButton::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-35%, -50%);
  width: 0;
  height: 0;
  border-top: 16px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 26px solid white;
}

.text {
  display: grid;
  gap: 6px;
}

.title {
  color: white;
  font-size: 56px;
  line-height: 1;
  font-weight: 700;
}

.backButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 22px;
  border-radius: 14px;
  background: white;
  color: #111;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
}

.backButton:hover {
  transform: translateY(-1px);
}

.circleText {
  position: absolute;
  inset: -55px;
  pointer-events: none;
  animation: spin 12s linear infinite;
  z-index: 3;
}

.circleTextFill {
  fill: white;
  font-size: 6px;
  letter-spacing: 0.6px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>-->
