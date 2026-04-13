import { useEffect, useRef } from 'react'
import styles from './ParticleField.module.css'

export default function ParticleField() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: null, y: null })
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W, H

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const count = Math.min(Math.floor((W * H) / 7500), 160)
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.4 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.1,
        alpha: 0,
        phase: Math.random() * Math.PI * 2,
        type: Math.random() < 0.12 ? 'neon' : Math.random() < 0.07 ? 'violet' : 'white',
      }))
    }

    const onMouseMove = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    const onMouseLeave = () => { mouseRef.current = { x: null, y: null } }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('resize', resize)
    resize()

    const CONNECT = 140, REPEL = 100, ATTRACT = 220

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      const particles = particlesRef.current
      const { x: mx, y: my } = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.phase += 0.008
        p.alpha = p.baseAlpha + Math.sin(p.phase) * 0.06

        if (mx !== null) {
          const dx = p.x - mx, dy = p.y - my
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < REPEL) {
            const f = (REPEL - d) / REPEL
            p.vx += (dx / d) * f * 0.8
            p.vy += (dy / d) * f * 0.8
            p.alpha = Math.min(p.alpha + f * 0.6, 1)
          } else if (d < ATTRACT) {
            const f = (d - REPEL) / (ATTRACT - REPEL)
            p.vx -= (dx / d) * f * 0.03
            p.vy -= (dy / d) * f * 0.03
          }
        }

        p.vx *= 0.97; p.vy *= 0.97
        p.x += p.vx; p.y += p.vy

        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        if (p.type === 'neon') ctx.fillStyle = `rgba(0,245,196,${p.alpha})`
        else if (p.type === 'violet') ctx.fillStyle = `rgba(139,111,255,${p.alpha})`
        else ctx.fillStyle = `rgba(200,205,230,${p.alpha * 0.6})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x, dy = p.y - q.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONNECT) {
            const t = 1 - d / CONNECT
            let boost = 0
            if (mx !== null) {
              const midX = (p.x + q.x) / 2 - mx
              const midY = (p.y + q.y) / 2 - my
              const md = Math.sqrt(midX * midX + midY * midY)
              if (md < 180) boost = (1 - md / 180) * 0.5
            }
            const isNeon = p.type === 'neon' || q.type === 'neon'
            const isViolet = p.type === 'violet' || q.type === 'violet'
            const a = t * 0.1 + boost
            if (isNeon) { ctx.strokeStyle = `rgba(0,245,196,${a})`; ctx.lineWidth = 0.7 }
            else if (isViolet) { ctx.strokeStyle = `rgba(139,111,255,${a})`; ctx.lineWidth = 0.7 }
            else { ctx.strokeStyle = `rgba(160,165,200,${a * 0.6})`; ctx.lineWidth = 0.35 }
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke()
          }
        }

        if (mx !== null) {
          const dx = p.x - mx, dy = p.y - my
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < ATTRACT) {
            const a = (1 - d / ATTRACT) * 0.55
            if (p.type === 'neon') ctx.strokeStyle = `rgba(0,245,196,${a})`
            else if (p.type === 'violet') ctx.strokeStyle = `rgba(139,111,255,${a})`
            else ctx.strokeStyle = `rgba(200,205,230,${a * 0.4})`
            ctx.lineWidth = 0.5
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mx, my); ctx.stroke()
          }
        }
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}