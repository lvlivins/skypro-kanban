<!--Общие кнопки для Login и Register-->
<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<template>
  <button
    class="modal__btn-enter _hover01"
    :id="id"
    :type="type"
  >
    <slot />
  </button>
</template>

<style scoped>
.modal__btn-enter {
  width: 248px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
}

._hover01:hover {
  background-color: #33399b;
}

@media screen and (max-width: 375px) {
  .modal__btn-enter {
    height: 40px;
  }
}

</style>
