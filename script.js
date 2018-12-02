Vue.component('TodoItem', {
  template: `
    <div>
      <span v-bind:class="{ crossed: task.done }">{{ task.text }}</span>
      <button class="done" v-on:click="checkTask">Fait</button>
      <button class="delete disable">Effacer</button>
    </div>
  `,
  props: {
    task: { type: Object, required: true }
  },
  methods: {
    checkTask () {
      this.$emit('check', this.key)
    }
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
