<!-- Компонент модалки task, куда подставляем значения из API = mocks/tasks.js-->
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  task: {
    type: Object
  },
  editTask: Function,
  deleteTask: Function,
  error: String
})

const description = ref('')
const selectedStatus = ref('')
const selectedDate = ref('')
const editMode = ref(false) // в режим просмотра -> true в режим редактирования

const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]

const statusList = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово'
]

if (props.task) {
  description.value = props.task.description
  selectedStatus.value = props.task.status
  selectedDate.value = props.task.date
}

const isActiveStatus = (status) => {
  if (selectedStatus.value === status) {
    return true
  }
  return false
}

const startEdit = () => {
  editMode.value = true
  description.value = props.task.description
  selectedStatus.value = props.task.status
  selectedDate.value = props.task.date
}

const cancelEdit = () => {
  description.value = props.task.description
  selectedStatus.value = props.task.status
  selectedDate.value = props.task.date
  editMode.value = false
}

const saveEdit = () => {
  let taskId = props.task.id

  if (props.task._id) {
    taskId = props.task._id
  }

  const updatedTask = {
    title: props.task.title,
    topic: props.task.topic,
    description: description.value,
    status: selectedStatus.value,
    date: selectedDate.value
  }

  props.editTask(taskId, updatedTask)
}

const chooseStatus = (status) => {
  if (editMode.value) {
    selectedStatus.value = status
  }
}

const date = selectedDate.value.split('.')

const monthFromDate = Number(date[1]) - 1
const yearFromDate = 2000 + Number(date[2])

const currentMonth = ref(monthFromDate)
const currentYear = ref(yearFromDate)

const prevMonth = () => {
  if (!editMode.value) {
    return
  }

  if (currentMonth.value > 0) {
    currentMonth.value = currentMonth.value - 1
  } else {
    currentMonth.value = 11
    currentYear.value = currentYear.value - 1
  }
}

const nextMonth = () => {
  if (!editMode.value) {
    return
  }

  if (currentMonth.value < 11) {
    currentMonth.value = currentMonth.value + 1
  } else {
    currentMonth.value = 0
    currentYear.value = currentYear.value + 1
  }
}

const getDateString = (day) => {
  const date = new Date(currentYear.value, currentMonth.value, day)

  return date.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })
}

const chooseDate = (day) => {
  if (editMode.value) {
    selectedDate.value = getDateString(day)
  }
}

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay()
  const lastDate = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()
  const days = []

  let emptyDays = firstDay - 1

  if (firstDay === 0) { // воскресенье
    emptyDays = 6
  }

  for (let i = 0; i < emptyDays; i++) {
    days.push('') // пустые ячейки
  }

  for (let i = 1; i <= lastDate; i++) {
    days.push(i)  // числа
  }

  return days
})
</script>

<template>
  <div
    class="pop-browse"
    v-if="task"
  >
    <div class="pop-browse__container">
      <div class="pop-browse__block">
        <div class="pop-browse__content">
          <div class="pop-browse__top-block">
            <h3 class="pop-browse__ttl">{{ task.title }}</h3>
            <div :class="['categories__theme', 'theme-top', task.topicClass, '_active-category']">
              <p :class="task.topicClass">{{ task.topic }}</p>
            </div>
          </div>
          <div class="pop-browse__status status">
            <p class="status__p subttl">Статус</p>
            <div
              class="status__themes"
              v-if="!editMode"
            >
              <div
                class="status__theme"
                :class="isActiveStatus(task.status) ? '_active-status' : ''"
              >
                <p>{{ task.status }}</p>
              </div>
            </div>
            <div
              class="status__themes"
              v-else
            >
              <div
                v-for="status in statusList"
                :key="status"
                class="status__theme"
                :class="isActiveStatus(status) ? '_active-status' : ''"
                @click="chooseStatus(status)"
              >
                <p>{{ status }}</p>
              </div>
            </div>
          </div>
          <div class="pop-browse__wrap">
            <form
              class="pop-browse__form form-browse"
              id="formBrowseCard"
              action="#"
            >
              <div class="form-browse__block">
                <label
                  for="textArea01"
                  class="subttl"
                >Описание задачи
                </label>
                <textarea
                  class="form-browse__area"
                  name="text"
                  id="textArea01"
                  placeholder="Введите описание задачи..."
                  v-model="description"
                  :disabled="!editMode"
                ></textarea>
              </div>
            </form>
            <div class="pop-new-card__calendar calendar">
              <p class="calendar__ttl subttl">Даты</p>
              <div class="calendar__block">
                <div class="calendar__nav">
                  <div class="calendar__month">{{ monthNames[currentMonth] }} {{ currentYear }}</div>
                  <div class="nav__actions">
                    <div
                      class="nav__action"
                      data-action="prev"
                      @click="prevMonth"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                      >
                        <path
                          d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z"
                        />
                      </svg>
                    </div>
                    <div
                      class="nav__action"
                      data-action="next"
                      @click="nextMonth"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="11"
                        viewBox="0 0 6 11"
                      >
                        <path
                          d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="calendar__content">
                  <div class="calendar__days-names">
                    <div class="calendar__day-name">пн</div>
                    <div class="calendar__day-name">вт</div>
                    <div class="calendar__day-name">ср</div>
                    <div class="calendar__day-name">чт</div>
                    <div class="calendar__day-name">пт</div>
                    <div class="calendar__day-name -weekend-">сб</div>
                    <div class="calendar__day-name -weekend-">вс</div>
                  </div>

                  <div class="calendar__cells">
                    <div
                      v-for="day in calendarDays"
                      :key="day + '-' + currentMonth + '-' + currentYear"
                      class="calendar__cell"
                      :class="day ? ['_cell-day', selectedDate === getDateString(day) ? '_active-day' : ''] : ''"
                      @click="day ? chooseDate(day) : ''"
                    >
                      {{ day }}
                    </div>
                  </div>
                </div>
                <input
                  type="hidden"
                  id="datepick_value"
                  :value="selectedDate"
                >
                <div class="calendar__period">
                  <p class="calendar__p date-end">
                    Срок исполнения:
                    <span class="date-control">{{ selectedDate }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="theme-down__categories theme-down">
            <p class="categories__p subttl">Категория</p>
            <div :class="['categories__theme', task.topicClass, '_active-category']">
              <p :class="task.topicClass">{{ task.topic }}</p>
            </div>
          </div>

          <div class="pop-browse__btn-browse">
            <div class="btn-group">
              <button
                class="btn-browse__edit _btn-bor _hover03"
                type="button"
                @click="startEdit"
                v-if="!editMode"
              >
                Редактировать задачу
              </button>
              <button
                v-if="editMode"
                class="btn-edit__edit _btn-bg _hover01"
                type="button"
                @click="saveEdit"
              >
                Сохранить
              </button>
              <button
                v-if="editMode"
                class="btn-edit__edit _btn-bor _hover03"
                type="button"
                @click="cancelEdit"
              >
                Отменить
              </button>
              <button
                class="btn-browse__delete _btn-bor _hover03"
                type="button"
                @click="deleteTask(task._id)"
              >
                Удалить задачу
              </button>
            </div>
            <RouterLink
              type="button"
              class="btn-browse__close _btn-bg _hover01"
              to="/"
            >Закрыть
            </RouterLink>
          </div>
          <p v-if="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pop-browse {
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
}

.pop-browse__container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}

.pop-browse__block {
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
}

.pop-browse__content {
  display: block;
  text-align: left;
}

.pop-browse__content .categories__theme {
  opacity: 1;
}

.pop-browse__content .theme-down {
  display: none;
  margin-bottom: 20px;
}

.pop-browse__content .theme-top {
  display: block;
}

.pop-browse__top-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.pop-browse__ttl {
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}

.pop-browse__wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.pop-browse__form {
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
}

.pop-browse__btn-browse, .pop-browse__btn-edit {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.pop-browse__btn-browse button, .pop-browse__btn-edit button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}

.pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
  margin-right: 8px;
}

.form-browse__block {
  display: flex;
  flex-direction: column;
}

.form-browse__area {
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #EAEEF6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
}

.form-browse__area::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

.form-browse__area::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

.status {
  margin-bottom: 11px;
}

.status__p {
  margin-bottom: 14px;
}

.status__themes {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
}

.status__theme {
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94A6BE;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  cursor: pointer;
}

.status__theme p {
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: #94A6BE;
}

._active-status {
  background: #94A6BE;
}

._active-status p {
  color: #FFFFFF;
}

.btn-browse__close {
  height: 30px;
  text-align: center;
  display: flex;
  padding: 0 14px;
  align-items: center;
}

._btn-bor {
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  background: transparent;
  color: #565EEF;
}

._btn-bor a {
  color: #565EEF;
}

._btn-bg {
  border-radius: 4px;
  background: #565EEF;
  border: none;
  outline: none;
  color: #FFFFFF;
}

._btn-bg a {
  color: #FFFFFF;
}
</style>
