Vue.component('TodoItem', {
  template: `
    <div>
      <span :class="{ crossed: task.done }">{{ task.text }}</span>
      <button class="done" @click="toggleTask">{{ toggleBtnText }}</button>
      <button class="delete" :class="{disable: !task.done}" @click="deleteTask">Effacer</button>
    </div>
  `,
  props: {
    task: { type: Object, required: true }
  },
  computed: {
    toggleBtnText () {
      return this.task.done ? 'A faire' : 'Fait'
    }
  },
  methods: {
    toggleTask () {
      this.$emit('toggle', this.key)
    },
    deleteTask () {
      if (this.task.done) {
        this.$emit('delete')
      }
    }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    newTaskField: '',
    tasksList: []
  },
  computed: {
    sortedTasksList () {
      return this.tasksList.sort((a, b) => {
        if (a.done === b.done) return a.created - b.created
        if (a.done && !b.done) return 1
        if (!a.done && b.done) return -1
        return 0
      })
    }
  },
  methods: {
    addTask () {
      const newTask = {
        text: this.newTaskField,
        done: false,
        created: Date.now()
      }
      this.tasksList.push(newTask)
      this.newTaskField = ''
      this.storeLocal()
    },
    toggle (i) {
      this.tasksList[i].done = !this.tasksList[i].done
      this.storeLocal()
    },
    deleteTask (i) {
      this.tasksList.splice(i, 1)
      this.storeLocal()
    },
    storeLocal () {
      localStorage.setItem('tasksList', JSON.stringify(this.tasksList))
    },
    readLocal () {
      return JSON.parse(localStorage.getItem('tasksList'))
    }
  },
  mounted () {
    this.tasksList = this.readLocal() || []
  }
})
