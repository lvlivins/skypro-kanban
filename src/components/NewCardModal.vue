<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  createNewTask: Function
})

const formData = ref({
  title: '',
  description: '',
  topic: 'Web Design',
  status: 'Без статуса',
  date: ''
})

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
const currentMonth = ref(8) // 0 - январь
const currentYear = ref(2023)

const prevDate = (day) => {
  let prevMonth = currentMonth.value - 1
  let prevYear = currentYear.value

  if (prevMonth < 0) {
    prevMonth = 11
    prevYear--
  }

  const date = new Date(prevYear, prevMonth, day)

  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const currentDate = (day) => {
  const date = new Date(currentYear.value, currentMonth.value, day)

  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

const nextDate = (day) => {
  let nextMonth = currentMonth.value + 1
  let nextYear = currentYear.value

  if (nextMonth > 11) {
    nextMonth = 0
    nextYear++
  }

  const date = new Date(nextYear, nextMonth, day)

  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}
// кнопки переключения
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1).getDay()
  const lastDate = new Date(currentYear.value, currentMonth.value + 1, 0).getDate()

  let startDay = firstDay - 1

  if (firstDay === 0) {
    startDay = 6
  }

  const days = []

  for (let i = 0; i < startDay; i++) {
    days.push('')
  }

  for (let day = 1; day <= lastDate; day++) {
    days.push(day)
  }

  return days
})

// выбор даты
const chooseCurrentDate = (day) => {
  formData.value.date = currentDate(day)
}
const choosePrevDate = (day) => {
  formData.value.date = prevDate(day)
}
const chooseNextDate = (day) => {
  formData.value.date = nextDate(day)
}
// выбор категории
const chooseCategory = (topic) => {
  formData.value.topic = topic
}
// передача фул formData
const saveTask = () => {
  props.createNewTask(formData.value)
}
</script>

<template>
  <div
    class="pop-new-card"
  >
    <div class="pop-new-card__container">
      <div class="pop-new-card__block">
        <div class="pop-new-card__content">
          <h3 class="pop-new-card__ttl">Создание задачи</h3>
          <RouterLink
            to="/"
            class="pop-new-card__close"
          >&#10006;
          </RouterLink>
          <div class="pop-new-card__wrap">
            <form
              class="pop-new-card__form form-new"
              id="formNewCard"
              action="#"
            >
              <div class="form-new__block">
                <label
                  for="formTitle"
                  class="subttl"
                >Название задачи
                </label>
                <input
                  class="form-new__input"
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  v-model="formData.title"
                >
              </div>
              <div class="form-new__block">
                <label
                  for="textArea"
                  class="subttl"
                >Описание задачи
                </label>
                <textarea
                  class="form-new__area"
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  v-model="formData.description"
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
                        <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
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
                        <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
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
                      class="calendar__cell"
                      :class="day ? ['_cell-day',
                      day === 8 && currentMonth === 8 && currentYear === 2023 ? '_current' : '',
                      formData.date === currentDate(day) ? '_active-day' : ''] : ''"
                      @click="day ? chooseCurrentDate(day) : ''"
                    >
                      {{ day }}
                    </div>
                  </div>
                </div>
                <!--                  :value="formData.date"-->
                <input
                  type="hidden"
                  id="datepick_value"
                >
                <div class="calendar__period">
                  <p class="calendar__p date-end">Выберите срок исполнения
                    <span class="date-control">{{ formData.date }}</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="pop-new-card__categories categories">
            <p class="categories__p subttl">Категория</p>
            <div class="categories__themes">
              <div
                class="categories__theme _orange"
                :class="formData.topic === 'Web Design' ? '_active-category' : ''"
                @click="chooseCategory('Web Design')"
              >
                <p class="_orange">Web Design</p>
              </div>
              <div
                class="categories__theme _green"
                :class="formData.topic === 'Research' ? '_active-category' : ''"
                @click="chooseCategory('Research')"
              >
                <p class="_green">Research</p>
              </div>
              <div
                class="categories__theme _purple"
                :class="formData.topic === 'Copywriting' ? '_active-category' : ''"
                @click="chooseCategory('Copywriting')"
              >
                <p class="_purple">Copywriting</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="form-new__create _hover01"
            id="btnCreate"
            @click="saveTask"
          >Создать задачу
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories__theme {
  cursor: pointer;
}

.pop-new-card {
  /*display: none;*/
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
}

.pop-new-card__container {
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

.pop-new-card__block {
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  position: relative;
}

.pop-new-card__content {
  display: block;
  text-align: left;
}

.pop-new-card__ttl {
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
}

.pop-new-card__close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
}

.pop-new-card__close:hover {
  color: #000000;
}

.pop-new-card__wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.pop-new-card__form {
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
}

.form-new__block {
  display: flex;
  flex-direction: column;
}

.form-new__input, .form-new__area {
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
}

.form-new__input::-moz-placeholder, .form-new__area::-moz-placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

.form-new__input::placeholder, .form-new__area::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

.form-new__input {
  margin: 20px 0;
}

.form-new__area {
  max-width: 370px;
  margin-top: 14px;
  height: 200px;
}

.form-new__create {
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;
}
</style>
