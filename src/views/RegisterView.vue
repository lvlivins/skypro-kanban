<!--СТРАНИЦА РЕГИСТРАЦИИ - юзер авторизован, направлен на стр логина, isSignUp ? 'Регистрация' : 'Вход'-->
<script setup>
import AuthForm from '@/components/AuthForm.vue'
</script>

<template>
  <AuthForm :isSignUp="true"/>
</template>
