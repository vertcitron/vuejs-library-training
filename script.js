const app = new Vue({
  el: '#app',
  data: {
    nameField: '',
    nameDisplay: ''
  },
  methods: {
    copyName () {
      this.nameDisplay = this.nameField
      this.nameField = ''
    }
  }
})
