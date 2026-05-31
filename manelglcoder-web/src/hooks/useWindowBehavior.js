import { useState, useRef, useCallback } from 'react'

export default function useWindowBehavior({
defaultX = 100,
defaultY = 100,
minY = 40,
} = {}) {
  const [position, setPosition] = useState(() => ({
    x: Math.max(0, Math.min(defaultX, window.innerWidth - 100)),
    y: Math.max(minY, Math.min(defaultY, window.innerHeight - 100)),
  }))
  const windowRef = useRef(null)

  const handleDragStart = useCallback((e) => {
    if (e.button !== 0) return
    e.preventDefault()
    const rect = windowRef.current?.getBoundingClientRect()
    if (!rect) return

    const startX = e.clientX
    const startY = e.clientY
    const origLeft = rect.left
    const origTop = rect.top
    const w = rect.width
    const h = rect.height

    document.body.style.userSelect = 'none'

    const onMove = (e) => {
      const dx = e.clientX - startX
      const dy = e.clientY - startY
      const maxX = window.innerWidth - w
      const maxY = window.innerHeight - h
      requestAnimationFrame(() => {
        setPosition({
          x: Math.max(0, Math.min(origLeft + dx, maxX)),
          y: Math.max(minY, Math.min(origTop + dy, maxY)),
        })
      })
    }

    const onUp = () => {
      document.body.style.userSelect = ''
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [])

  return {
    windowRef,
    position,
    handleDragStart,
  }
}
