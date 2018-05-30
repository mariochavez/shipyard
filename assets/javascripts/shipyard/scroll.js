import Shipyard from './core'

export default class Scroll extends Shipyard {
  constructor (el) {
    super(el)
    this.on('scroll resize', this.scroll).trigger('scroll')
  }

  scroll () {
    this.shipyard.toggleClass('scrolling', window.pageYOffset > 0)
    this.shipyard.toggleClass('scroll-top', window.pageYOffset <= 0)
    this.shipyard.toggleClass('scroll-bottom', window.pageYOffset + window.innerHeight >= document.body.scrollHeight)
  }
}
