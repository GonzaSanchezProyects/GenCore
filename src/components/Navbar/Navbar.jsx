import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.logo}>Gen<em>Core</em></Link>
      <div className={styles.links}>
        <a href="#productos" className={styles.link}>Productos</a>
        <a href="#servicios" className={styles.link}>Servicios</a>
        <a href="#nosotros" className={styles.link}>Nosotros</a>
      </div>
      <button className={styles.cta}>
        Hablemos <span className={styles.ctaArrow}>→</span>
      </button>
    </nav>
  )
}