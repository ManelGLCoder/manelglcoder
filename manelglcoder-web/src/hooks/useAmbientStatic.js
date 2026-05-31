import { useEffect, useRef } from 'react'

function fillNoiseBuffer(buffer, sampleRate, isCrackle) {
  const data = buffer.getChannelData(0)
  const length = buffer.length

  if (isCrackle) {
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() < 0.1 ? (Math.random() * 2 - 1) : 0
    }
    const fadeLen = Math.min(Math.floor(sampleRate * 0.005), length)
    for (let i = length - fadeLen; i < length; i++) {
      data[i] *= (length - i) / fadeLen
    }
  } else {
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1
    }
    const fadeLen = Math.min(Math.floor(sampleRate * 0.01), Math.floor(length / 3))
    for (let i = 0; i < fadeLen; i++) {
      data[i] *= i / fadeLen
    }
    for (let i = length - fadeLen; i < length; i++) {
      data[i] *= (length - i) / fadeLen
    }
  }
}

function playBuffer(ctx, duration, gainValue, isCrackle) {
  const sampleRate = ctx.sampleRate
  const length = Math.floor(sampleRate * duration)
  const buffer = ctx.createBuffer(1, length, sampleRate)
  fillNoiseBuffer(buffer, sampleRate, isCrackle)

  const source = ctx.createBufferSource()
  source.buffer = buffer

  const gain = ctx.createGain()
  gain.gain.value = gainValue

  source.connect(gain)
  gain.connect(ctx.destination)
  source.start()
}

function playNoise(ctx) {
  const duration = 0.4 + Math.random() * 0.4
  const gainValue = 0.015 + Math.random() * 0.015
  playBuffer(ctx, duration, gainValue, false)
}

function playCrackle(ctx) {
  const duration = 0.05 + Math.random() * 0.1
  const gainValue = 0.02 + Math.random() * 0.02
  playBuffer(ctx, duration, gainValue, true)
}

export default function useAmbientStatic(onGlitch) {
  const audioCtxRef = useRef(null)
  const timerRef = useRef(null)
  const startedRef = useRef(false)
  const visibleRef = useRef(true)
  const onGlitchRef = useRef(onGlitch)

  useEffect(() => {
    onGlitchRef.current = onGlitch
  })

  useEffect(() => {
    const startAudio = () => {
      if (startedRef.current) return
      startedRef.current = true

      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return

      const ctx = new AudioCtx()
      audioCtxRef.current = ctx

      if (ctx.state === 'suspended') {
        ctx.resume()
      }

      scheduleNext()
    }

    const scheduleNext = () => {
      if (!visibleRef.current) return
      const ctx = audioCtxRef.current
      if (!ctx || ctx.state === 'closed') return

      const delay = 4000 + Math.random() * 14000
      timerRef.current = setTimeout(() => {
        if (!visibleRef.current || ctx.state === 'closed') return

        if (Math.random() < 0.6) {
          playCrackle(ctx)
        } else {
          playNoise(ctx)
        }
        if (onGlitchRef.current) onGlitchRef.current()
        scheduleNext()
      }, delay)
    }

    const handleVisibility = () => {
      visibleRef.current = !document.hidden
      if (document.hidden) {
        if (timerRef.current) clearTimeout(timerRef.current)
      } else {
        scheduleNext()
      }
    }

    document.addEventListener('click', startAudio, { once: true })
    document.addEventListener('touchstart', startAudio, { once: true })
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      document.removeEventListener('click', startAudio)
      document.removeEventListener('touchstart', startAudio)
      document.removeEventListener('visibilitychange', handleVisibility)
      if (timerRef.current) clearTimeout(timerRef.current)
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close()
      }
    }
  }, [])
}
