import Shipyard from './core'

export default class Scroll extends Shipyard {
  constructor (el, instance) {
    super(el, instance)
    this.on('scroll resize', this.scroll.bind(this)).trigger('scroll')
  }

  scroll () {
    this.instance.toggleClass('scrolling', window.pageYOffset > 0)
    this.instance.toggleClass('scroll-top', window.pageYOffset <= 0)
    this.instance.toggleClass('scroll-bottom', window.pageYOffset + window.innerHeight >= document.body.scrollHeight)
  }
}
