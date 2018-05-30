import Shipyard from './core'

export default class Hamburger extends Shipyard {
  constructor (el) {
    super(el)
    this.on('click', this.toggle)
  }

  toggle (e) {
    e.preventDefault()
    this.shipyard.toggleClass('hamburger-button-clicked')
  }
}
