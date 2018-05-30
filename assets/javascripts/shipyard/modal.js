import Shipyard from './core'

export default class Modal extends Shipyard {
  constructor (el, instance) {
    super(el, instance)
    this.on('open', () => { this.open().bind(this) })
    this.on('click', '[modal-close]', () => { this.close().bind(this) })
  }

  open () {
    this.instance.removeClass('hidden')
    this.instance.addClass('modal-open')
  }

  close () {
    this.instance.addClass('hidden')
    this.instance.removeClass('modal-open')
  }
}
