import React, { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect reduced motion preferences
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let rafId

    const state = {
      isActive: false,
      isDown: false,
    }

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const interactive = target.closest('a, button, [role="button"], input, textarea, select')
      state.isActive = !!interactive
    }

    const handleMouseDown = () => {
      state.isDown = true
    }

    const handleMouseUp = () => {
      state.isDown = false
    }

    const render = () => {
      const lerp = 0.18
      ringX += (mouseX - ringX) * lerp
      ringY += (mouseY - ringY) * lerp

      const dotSize = 6
      const ringSize = 24

      dot.style.transform = `translate3d(${mouseX - dotSize / 2}px, ${mouseY - dotSize / 2}px, 0)`

      const baseScale = state.isActive ? 1.2 : 1
      const clickScale = state.isDown ? 0.9 : 1
      const scale = baseScale * clickScale

      ring.style.transform = `translate3d(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px, 0) scale(${scale})`

      rafId = requestAnimationFrame(render)
    }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    rafId = requestAnimationFrame(render)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      {/* Primary focus dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.9)] mix-blend-screen pointer-events-none z-[9999] hidden md:block"
      />

      {/* Soft trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400/70 bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.6)] backdrop-blur-[2px] pointer-events-none z-[9998] hidden md:block"
      />
    </>
  )
}
