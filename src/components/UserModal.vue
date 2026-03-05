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
      <RouterLink to="/exit">Выйти</RouterLink>
    </button>
  </div>
</template>

<style scoped>
._hover02:hover, .header__user:hover {
  color: #33399b;
}

._hover02:hover::after, .header__user:hover::after {
  border-left-color: #33399b;
  border-bottom-color: #33399b;
}

.pop-user-set__name {
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
}

.pop-user-set__mail {
  color: #94A6BE;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
}

.pop-user-set__theme {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.pop-user-set__theme p {
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
}

.pop-user-set__theme input[type=checkbox] {
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #EAEEF6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.pop-user-set__theme input[type=checkbox]::before {
  content: "";
  position: absolute;
  top: 1px;
  left: 1px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #94A6BE;
  transition: 0.5s;
}

.pop-user-set__theme input:checked[type=checkbox]::before {
  left: 12px;
}

.pop-user-set button {
  width: 72px;
  height: 30px;
  background: transparent;
  color: #565EEF;
  border-radius: 4px;
  border: 1px solid #565EEF;
}

.pop-user-set button a {
  color: #565EEF;
}

.header__user {
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565EEF;
}

.header__user::after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 1px;
  border-left: 1.9px solid #565EEF;
  border-bottom: 1.9px solid #565EEF;
  transform: rotate(-45deg);
  margin: -6px 0 0 5px;
  padding: 0;
}

.header__pop-user-set {
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #FFF;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
}
</style>
