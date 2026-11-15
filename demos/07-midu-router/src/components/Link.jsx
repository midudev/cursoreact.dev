import { BUTTONS, EVENTS } from '../utils/consts.js'

export function navigate (href) {
  window.history.pushState({}, '', `${import.meta.env.BASE_URL}#${href}`)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === BUTTONS.primary // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // navegación con SPA
      window.scrollTo(0, 0)
    }
  }

  return <a onClick={handleClick} href={`${import.meta.env.BASE_URL}#${to}`} target={target} {...props} />
}
