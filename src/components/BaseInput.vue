<!--Общие inputs для Login и Register-->
<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
})

const model = defineModel()
</script>

<template> <!-- v-model can only be used on <input>, <textarea>, <select> -->
  <input
    class="modal__input"
    :type="type"
    :name="name"
    :id="id"
    :placeholder="placeholder"
    v-model="model"
  >
</template>

<style scoped>
.modal__input {
  width: 248px;
  height: 30px;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
}

.modal__input::-moz-placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
}

.modal__input::placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
}
</style>
