import Shipyard from './core'

export default class AccordionTrigger extends Shipyard {
  constructor (el, instance) {
    super(el, instance)
    this.accordion = new Accordion(this.attr('accordion'), instance)
    this.instance.on('click', (e) => { this.accordion.trigger('toggle').bind(this) })
  }
}
