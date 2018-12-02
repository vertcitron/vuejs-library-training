Vue.component('TodoItem', {
  template: `
  <div>
    <span>{{task.text}}</span>
    <button class="done">Fait</button>
    <button class="delete disable">Effacer</button>
  </div>
  `,
  props: {
    task: { type: Object, required: true }
  }
})

const app = new Vue({
  el: '#app',
  data: {
    newTaskField: '',
    tasksList: []
  },
  methods: {
    addTask () {
      const newTask = {
        text: this.newTaskField,
        done: false
      }
      this.tasksList.push(newTask)
      this.newTaskField = ''
    }
  }
})
