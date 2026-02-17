<template>
  <div
    class="pop-exit"
    id="popExit"
  >
    <div class="pop-exit__container">
      <div class="pop-exit__block">
        <div class="pop-exit__ttl">
          <h2>Выйти из аккаунта?</h2>
        </div>
        <form
          class="pop-exit__form"
          id="formExit"
          action="#"
        >
          <div class="pop-exit__form-group">
            <button
              class="pop-exit__exit-yes _hover01"
              id="exitYes"
            >
              <a href="modal/signin.html">Да, выйти</a> <!--сюда LoginView.vue-->
            </button>
            <button
              class="pop-exit__exit-no _hover03"
              id="exitNo"
            >
              <router-link to="/">Нет, остаться</router-link> <!-- из index.js path: '/' → component: HomeView -->
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
