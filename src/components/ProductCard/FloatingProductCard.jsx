import { useRef } from 'react'
import styles from './FloatingProductCard.module.css'

export default function FloatingProductCard({ product }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `
      perspective(800px)
      rotateY(${x * 12}deg)
      rotateX(${-y * 10}deg)
      translateZ(10px)
      translateY(-4px)
    `
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = `perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0px) translateY(0px)`
  }

  const isGenFit = product.id === 'genfit'

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isGenFit ? styles.genfit : styles.genbox}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardGlow} />

      <div className={styles.topBar}>
        <div className={styles.statusDot} />
        <span className={styles.statusLabel}>{product.status}</span>
        <span className={styles.badge}>{product.category}</span>
      </div>

      <div className={styles.productName}>
        <span className={styles.nameGen}>Gen</span>
        <span className={styles.nameProduct}>{product.suffix}</span>
      </div>

      <p className={styles.tagline}>{product.tagline}</p>

      <div className={styles.pills}>
        {product.pills.map((pill) => (
          <span key={pill} className={styles.pill}>{pill}</span>
        ))}
      </div>

      <a href={product.href} className={styles.cardCta}>
        <span>Explorar</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
    </div>
  )
}