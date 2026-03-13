'use client'
import { useEffect } from 'react'

export default function DisableDevTools() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return // Only runs in production

    // ── 1. Silence console ──────────────────────────────────────────────────
    const noop = () => {}
    ;(window.console as Console).log = noop
    ;(window.console as Console).warn = noop
    ;(window.console as Console).error = noop
    ;(window.console as Console).info = noop
    ;(window.console as Console).debug = noop
    ;(window.console as Console).table = noop
    ;(window.console as Console).dir = noop

    // ── 2. Block right-click ────────────────────────────────────────────────
    const blockContextMenu = (e: MouseEvent) => e.preventDefault()
    document.addEventListener('contextmenu', blockContextMenu)

    // ── 3. Block keyboard shortcuts ────────────────────────────────────────
    const blockShortcuts = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault()
        return
      }
      // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools panels)
      if (
        e.ctrlKey &&
        e.shiftKey &&
        ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)
      ) {
        e.preventDefault()
        return
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && ['U', 'u'].includes(e.key)) {
        e.preventDefault()
        return
      }
      // Ctrl+S (Save page)
      if (e.ctrlKey && ['S', 's'].includes(e.key)) {
        e.preventDefault()
        return
      }
    }
    document.addEventListener('keydown', blockShortcuts)

    // ── 4. DevTools size-change detection ──────────────────────────────────
    // When DevTools opens the window inner size changes. We blur content as a deterrent.
    let devtoolsOpen = false
    const threshold = 160

    const detectDevTools = () => {
      const widthDiff = window.outerWidth - window.innerWidth
      const heightDiff = window.outerHeight - window.innerHeight
      const isOpen = widthDiff > threshold || heightDiff > threshold
      if (isOpen && !devtoolsOpen) {
        devtoolsOpen = true
        document.body.style.filter = 'blur(8px)'
        document.body.style.userSelect = 'none'
        document.body.style.pointerEvents = 'none'
      } else if (!isOpen && devtoolsOpen) {
        devtoolsOpen = false
        document.body.style.filter = ''
        document.body.style.userSelect = ''
        document.body.style.pointerEvents = ''
      }
    }

    const intervalId = setInterval(detectDevTools, 1000)

    // ── 5. Debugger trap (slows down stepping through code) ────────────────
    // Runs a debug-detection loop every second; a paused debugger causes
    // the setTimeout to fire much later than expected.
    const debuggerTrap = () => {
      const start = Date.now()
      // eslint-disable-next-line no-debugger
      debugger
      if (Date.now() - start > 100) {
        // Debugger was open — refresh to a blank state
        document.body.innerHTML = ''
      }
      setTimeout(debuggerTrap, 3000)
    }
    // Uncomment the next line to enable the debugger trap (more aggressive):
    // setTimeout(debuggerTrap, 3000)

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu)
      document.removeEventListener('keydown', blockShortcuts)
      clearInterval(intervalId)
    }
  }, [])

  return null // Renders nothing visible
}
