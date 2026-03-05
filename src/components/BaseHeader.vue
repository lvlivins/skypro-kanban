<script setup>
import UserModal from '@/components/UserModal.vue'

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__block">
        <div class="header__logo _show _light">
          <a
            href=""
            target="_self"
          >
            <img
              src="/images/logo.png"
              alt="logo"
            >
          </a>
        </div>
        <div class="header__logo _dark">
          <a
            href=""
            target="_self"
          >
            <img
              src="/images/logo_dark.png"
              alt="logo"
            >
          </a>
        </div>
        <nav class="header__nav">
          <button
            class="header__btn-main-new _hover01"
            id="btnMainNew"
          >
            <RouterLink to="/new-task">Создать новую задачу</RouterLink>
          </button>
          <UserModal />
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
._dark {
  display: none;
}

.header {
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
}

.header__block {
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
}

.header__logo img {
  width: 85px;
}

.header__nav {
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header__btn-main-new {
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
}

.header__btn-main-new a {
  color: #FFFFFF;
}
</style>
