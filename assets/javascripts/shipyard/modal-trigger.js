import Shipyard from './core'

export default class ModalTrigger extends Shipyard {
  constructor (el, instance) {
    super(el, instance)
    this.modal = new Modal(`[modal=${el.getAttribute('modal-trigger')}]`)
    this.instance.on('click', (e) => { this.modal.trigger('open').bind(this) })
  }
}
