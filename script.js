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
      console.log(this.tasksList)
    }
  }
})
