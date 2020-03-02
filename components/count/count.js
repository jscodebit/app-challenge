const wordLength = (x) => { return x.length }

const word_count = new Vue({
  el: '#word_count',
  data: {
    guest: 'Emmett'
  },
  computed: {
    result: function () {
      const i = this.guest
      return `${this.guest}, your sum is ${wordLength(i)}.`
    }
  }
})