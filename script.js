const app = new Vue({
  el: '#app',
  data: {
    nameField: '',
    nameDisplay: ''
  },
  computed: {
    displayText () {
      return this.nameDisplay ? `Bonjour ${this.nameDisplay} ...` : ''
    }
  },
  methods: {
    copyName () {
      this.nameDisplay = this.nameField
      this.nameField = ''
    }
  }
})
