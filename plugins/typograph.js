const Typograf = require('typograf')
const typograf = new Typograf({ locale: ['ru', 'en-US'] })

export default ({ app }, inject) => {
  inject('typograph', (text) => typograf.execute(text))
}
