import styles from './Services.module.css'

const SERVICES = [
  {
    title: 'Desarrollo Web & Landing Pages',
    desc: 'Arquitecturas front-end de alto rendimiento. Sitios ultra rápidos, optimizados para SEO y diseñados para convertir.',
    icon: '01'
  },
  {
    title: 'Soluciones SaaS a Medida',
    desc: 'Desarrollo Full Stack de plataformas complejas. Desde la base de datos hasta la interfaz, listos para escalar.',
    icon: '02'
  },
  {
    title: 'Automatización de Flujos',
    desc: 'Conectamos tus herramientas. Workflows automatizados que eliminan tareas manuales y optimizan el tiempo de tu equipo.',
    icon: '03'
  }
]

export default function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestros <span className={styles.accent}>Servicios</span></h2>
          <div className={styles.line} />
        </div>
        
        <div className={styles.list}>
          {SERVICES.map((srv, idx) => (
            <div key={idx} className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <span className={styles.iconText}>{srv.icon}</span>
              </div>
              <div className={styles.content}>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}