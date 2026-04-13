import styles from './Products.module.css'

export default function Products() {
  return (
    <section id="productos" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Ecosistema <span className={styles.accent}>Gen</span></h2>
        <p className={styles.subtitle}>
          Sistemas interconectados, modulares y escalables. No vendemos software enlatado, 
          desarrollamos núcleos operativos diseñados para centralizar y optimizar cada aspecto de tu empresa.
        </p>
      </div>

      <div className={styles.bentoGrid}>
        <div className={`${styles.bentoItem} ${styles.large}`}>
          <div className={styles.glowCyan} />
          <h3>Arquitectura Modular</h3>
          <p>Cada producto de la suite Gen funciona de manera independiente o como parte de un todo unificado, compartiendo datos en tiempo real.</p>
        </div>
        <div className={styles.bentoItem}>
          <div className={styles.glowViolet} />
          <h3>Cloud Native</h3>
          <p>Despliegues de alta disponibilidad, actualizaciones invisibles y máxima seguridad.</p>
        </div>
        <div className={styles.bentoItem}>
          <div className={styles.glowCyan} />
          <h3>UI/UX Quirúrgica</h3>
          <p>Interfaces oscuras, limpias y libres de distracciones para máxima productividad.</p>
        </div>
      </div>
    </section>
  )
}