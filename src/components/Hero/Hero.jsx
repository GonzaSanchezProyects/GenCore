import { useEffect, useRef } from 'react'
import FloatingProductCard from '../ProductCard/FloatingProductCard'
import styles from './Hero.module.css'

const PRODUCTS = [
  {
    id: 'genfit',
    suffix: 'Fit',
    category: 'SaaS · Fitness',
    status: 'Disponible',
    tagline: 'CRM integral para gimnasios. Control de accesos, socios y facturación en tiempo real.',
    pills: ['Multi-tenant', 'QR Realtime', 'Portal alumno'],
    href: 'https://genfit-info.site', // Tu nuevo link
    btnText: 'Explorar'
  },
  {
    id: 'genbox',
    suffix: 'Box',
    category: 'SaaS · Próximo',
    status: 'En desarrollo',
    tagline: 'Gestión operativa para equipos distribuidos. Workflows, tareas y automatización.',
    pills: ['B2B', 'Workflows', '2025'],
    href: '#', 
    btnText: 'En construcción' // Solo cambiamos el texto
  },
]

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!titleRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      titleRef.current.style.transform = `translate(${x}px, ${y}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />
      <div className={styles.hLine1} />
      <div className={styles.hLine2} />

      <div className={styles.center}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowLine} />
          Mendoza · Argentina
          <span className={styles.eyebrowLine} />
        </div>

        <div ref={titleRef} className={styles.titleWrap}>
          <h1 className={styles.title}>
            <span className={styles.titleOutline}>Somos el</span>
            <span className={styles.titleSolid}>núcleo</span>
            <span className={styles.titleAccent}>digital</span>
          </h1>
        </div>

        <p className={styles.subtitle}>
          Construimos plataformas SaaS y sistemas B2B<br />
          que hacen crecer empresas reales.
        </p>

        <div className={styles.suiteDivider}>
          <span className={styles.suiteLine} />
          <span className={styles.suiteLabel}>Ecosistema Gen—</span>
          <span className={styles.suiteLine} />
        </div>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.cardSlot} style={{ '--delay': '0s' }}>
          <FloatingProductCard product={PRODUCTS[0]} />
        </div>
        <div className={styles.cardSlot} style={{ '--delay': '0.15s' }}>
          <FloatingProductCard product={PRODUCTS[1]} />
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollThumb} />
        </div>
      </div>
    </section>
  )
}