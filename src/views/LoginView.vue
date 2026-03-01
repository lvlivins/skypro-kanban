<!--СТРАНИЦА ВХОДА - юзер авторизован, направлен на страницу home, isSignUp ? 'Регистрация' : 'Вход' -->
<script setup>
import AuthForm from '@/components/AuthForm.vue'
import router from '@/router'

function handleSignIn(e) {
  e.preventDefault()
  localStorage.setItem('userInfo', 'true')
  router.push('/')
}
</script>

<template>
  <AuthForm :isSignUp="false" :onClick="handleSignIn"  />
</template>
