<script setup>
import TaskColumn from '@/components/TaskColumn.vue'

const columns = [
  {
    name: 'Column №1',
    title: 'Без статуса',
    isFirst: true,
    tasks: [
      {
        id: 1,
        themeText: 'Web Design',
        themeClass: '_orange',
        title: 'Название задачи',
        dateText: '30.10.23'
      },
      {
        id: 2,
        themeText: 'Research',
        themeClass: '_green',
        title: 'Название задачи',
        dateText: '30.10.23'
      },
      {
        id: 3,
        themeText: 'Web Design',
        themeClass: '_orange',
        title: 'Название задачи',
        dateText: '30.10.23'
      },
      {
        id: 4,
        themeText: 'Copywriting',
        themeClass: '_purple',
        title: 'Название задачи',
        dateText: '30.10.23'
      },
      {
        id: 5,
        themeText: 'Web Design',
        themeClass: '_orange',
        title: 'Название задачи',
        dateText: '30.10.23'
      }
    ]
  },

  {
    name: 'Column №2',
    title: 'Нужно сделать',
    isFirst: false,
    tasks: [
      {
        id: 6,
        themeText: 'Research',
        themeClass: '_green',
        title: 'Название задачи',
        dateText: '30.10.23'
      }
    ]
  },

  {
    name: 'Column №3',
    title: 'В работе',
    isFirst: false,
    tasks: [
      {
        id: 7,
        themeText: 'Research',
        themeClass: '_green',
        title: 'Название задачи',
        dateText: '30.10.23'
      },
      {
        id: 8,
        themeText: 'Copywriting',
        themeClass: '_purple',
        title: 'Название задачи',
        dateText: '30.10.23'
      },
      {
        id: 9,
        themeText: 'Web Design',
        themeClass: '_orange',
        title: 'Название задачи',
        dateText: '30.10.23'
      }
    ]
  },

  {
    name: 'Column №4',
    title: 'Тестирование',
    isFirst: false,
    tasks: [
      {
        id: 10,
        themeText: 'Research',
        themeClass: '_green',
        title: 'Название задачи',
        dateText: '30.10.23'
      }
    ]
  },

  {
    name: 'Column №5',
    title: 'Готово',
    isFirst: false,
    tasks: [
      {
        id: 11,
        themeText: 'Research',
        themeClass: '_green',
        title: 'Название задачи',
        dateText: '30.10.23'
      }
    ]
  }
]
</script>

<template>
  <main class="main">
    <div class="container">
      <div class="main__block">
        <div class="main__content">
          <TaskColumn
            v-for="col in columns"
            :key="col.name"
            :title="col.title"
            :isFirst="col.isFirst"
            :tasks="col.tasks"
          />
        </div>
      </div>
    </div>
  </main>
</template>


<!--<template>
import TaskColumn from '@/components/TaskColumn.vue'

  <main class="main">
    <div class="container">

      <div class="main__block">
        <div class="main__content">
          <TaskColumn />
        </div>
      </div>
    </div>
  </main>

</template>-->
