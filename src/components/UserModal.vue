<script setup>
import { ref } from 'vue'

const userPop = ref(false)

function userOpenClosePop() {
  userPop.value = !userPop.value
}
</script>

<template>
  <a
    href="#user-set-target"
    class="header__user _hover02"
    v-on:click="userOpenClosePop"
  >Ivan Ivanov
  </a>
  <div
    class="header__pop-user-set pop-user-set"
    id="user-set-target"
    v-if="userPop"
  >
    <!--         <a href="">x</a> -->
    <p class="pop-user-set__name">Ivan Ivanov</p>
    <p class="pop-user-set__mail">ivan.ivanov@gmail.com</p>
    <div class="pop-user-set__theme">
      <p>Темная тема</p>
      <input
        type="checkbox"
        class="checkbox"
        name="checkbox"
      >
    </div>
    <button
      type="button"
      class="_hover03"
    >
      <a href="#popExit">Выйти</a> <!--сюда LoginView-->
    </button>
  </div>
</template>

