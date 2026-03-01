<!--СТРАНИЦА РЕГИСТРАЦИИ - юзер авторизован, направлен на стр логина, isSignUp ? 'Регистрация' : 'Вход'-->
<script setup>
import AuthForm from '@/components/AuthForm.vue'
import router from '@/router'

function handleSignIn(e) {
  e.preventDefault()
  localStorage.setItem('userInfo', 'true')
  router.push('/login')
}
</script>

<template>
  <AuthForm :isSignUp="true" :onClick="handleSignIn" />
</template>
