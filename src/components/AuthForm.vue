<script setup>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { ref } from 'vue'
import { signIn, signUp } from '@/services/auth'
import router from '@/router'

const props = defineProps({
  isSignUp: { type: Boolean, default: false },
  onClick: { type: Function, default: null }
})


const formData = ref({
  name: '',
  login: '',
  password: ''
})

const errors = ref({
  name: false,
  login: false,
  password: false
})

const error = ref('')

function validateForm() {
  let isValid = true
  error.value = ''

  errors.value.name = false
  errors.value.login = false
  errors.value.password = false

  // Проверка имени (для регистрации)
  if (props.isSignUp && !formData.value.name.trim()) {
    errors.value.name = true
    isValid = false
  }

  // Проверка логина (почты)
  if (!formData.value.login.trim()) {
    errors.value.login = true
    isValid = false
  }

  // Проверка пароля
  if (!formData.value.password.trim()) {
    errors.value.password = true
    isValid = false
  }

  // Общая проверка ошибок
  if (!isValid) {
    error.value = 'Пожалуйста, заполните все обязательные поля'
  }

  return isValid
}

async function handleSubmit(event) {
  event.preventDefault()

  if (!validateForm()) {
    return
  }

  try {
    const data = props.isSignUp
      ? await signUp(formData.value)
      : await signIn({ login: formData.value.login, password: formData.value.password })
    if (data) {
      localStorage.setItem('userInfo', JSON.stringify(data))
      router.push('/')
    }
  } catch (err) {
    error.value = err.message
  }
}

</script>

<template>
  <div class="wrapper">
    <div class="container-signin">
      <div class="modal">
        <div class="modal__block">
          <div class="modal__ttl">
            <h2>{{ isSignUp ? 'Регистрация' : 'Вход' }}</h2>
          </div>
          <form
            class="modal__form-login"
            id="formLogin"
            action="#"
            @submit.prevent="handleSubmit"
          >
            <BaseInput
              v-if="isSignUp"
              type="text"
              name="name"
              id="formName"
              placeholder="Имя"
              :class="[{error: errors.name}]"
              @focus="errors.name = false"
              v-model="formData.name"
            />
            <BaseInput
              type="text"
              name="login"
              id="formLogin"
              placeholder="Эл. почта"
              :autocomplete="isSignUp ? 'new-username' : 'username'"
              :class="[{error: errors.login}]"
              @focus="errors.login = false"
              v-model="formData.login"
            />
            <BaseInput
              type="password"
              name="password"
              id="formPassword"
              placeholder="Пароль"
              :autocomplete="isSignUp ? 'new-password' : 'current-password'"
              :class="[{error: errors.password}]"
              @focus="errors.password = false"
              v-model="formData.password"
            />
            <p v-show="error" class="button-error">{{ error }}</p>
            <BaseButton
              id="btnEnter"
              type="submit"
            >
              {{ isSignUp ? 'Зарегистрироваться' : 'Войти' }}
            </BaseButton>
            <div class="modal__form-group">
              <p>
                {{ isSignUp ? 'Уже есть аккаунт?' : 'Нужно зарегистрироваться?' }}
              </p>
              <RouterLink :to="isSignUp ? '/login' : '/register'">
                {{ isSignUp ? 'Войти здесь' : 'Регистрируйтесь здесь' }}
              </RouterLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
  outline: auto;
}

.button-error {
  color: brown;
  font-size: 14px;
  font-weight: 400;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #EAEEF6;
}

.container-signin {
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
}

.modal {
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal__block {
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
}

.modal__ttl h2 {
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
}

.modal__form-login {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.modal__form-login input:first-child {
  margin-bottom: 7px;
}

.modal__form-login input:not(:last-child) {
  margin-bottom: 7px;
}

.modal__btn-signup-ent a {
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__form-group {
  text-align: center;
}

.modal__form-group p,
.modal__form-group a {
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
}

.modal__form-group a {
  text-decoration: underline;
}

@media screen and (max-width: 375px) {
  .modal {
    background-color: #FFFFFF;
  }

  .modal__block {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
}
</style>

