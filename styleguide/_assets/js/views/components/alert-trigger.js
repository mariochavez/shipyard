class AlertTrigger extends Shipyard {
  constructor (el, instance) {
    super(el, instance)
    this.alert = this.instance.alerts.filter(this.attr('alert-trigger'))
    this.instance.on('click', (e) => { this.click(e).bind(this) })
  }

  click (e) {
    e.preventDefault()
    this.instance.addClass('btn-loading')
    this.instance.el.blur()
    this.alert.trigger('show', {
      afterClose: () => { this.reset().bind(this) }
    })
  }

  reset () {
    this.instance.removeClass('btn-loading')
  }
}
