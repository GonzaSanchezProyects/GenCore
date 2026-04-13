import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>Gen<em>Core</em></div>
      <div className={styles.center}>Mendoza, Argentina · Ingeniería Digital</div>
      <div className={styles.right}>© 2025</div>
    </footer>
  )
}