const i = 1
let b = 11
let c = '10'

const user = {
  firstName: 'Иван',
  lastName: 'Иванов',
  age: 30,
  languages: ['ru', 'en'],

  isOld() {
    return this.age > 30
  },

  isLanguage(language) {

    return this.languages.map((item) => {
      return item.age
    })

    return this.languages.indexOf(language) !== -1
  }
}

// function isOld(limit) {
//   return limit > 30
// }

// const isOld = function (limit) {
//
// }

// const isOld = (limit) => {
//
// }

// const isOld = limit => {
// }

// const isOld = limit => limit > 30
