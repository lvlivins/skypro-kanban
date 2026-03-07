<!--СТРАНИЦА ВХОДА - юзер авторизован, направлен на страницу home, isSignUp ? 'Регистрация' : 'Вход' -->
<script setup>
import AuthForm from '@/components/AuthForm.vue'
</script>

<template>
  <AuthForm :isSignUp="false" />
</template>
