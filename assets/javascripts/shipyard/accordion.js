import Shipyard from './core'

export default class Accordion extends Shipyard {
  constructor (el, instance) {
    super(el, instance)
    this.on('toggle', () => { this.toggle().bind(this) })
  }

  toggle () {
    this.instance.toggleClass('accordion-closed')
  }
}
