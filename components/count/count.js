const wordLength = (x) => { return x.length }

const word_count = new Vue({
  el: '#word_count',
  data: {
    word: 'Soujanya'
  },
  computed: {
    result: function () {
      const i = this.word
      return `The length of the word "${this.word}", is ${wordLength(i)}.`
    }
  }
})