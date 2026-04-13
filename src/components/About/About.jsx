import styles from './About.module.css'

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.textContent}>
          <h2 className={styles.title}>
            Ingeniería <br />
            <span className={styles.accent}>Aplicada</span>
          </h2>
          <p className={styles.desc}>
            En GenCore, somos más que una agencia de desarrollo. Somos una firma de ingeniería digital nacida en Mendoza, obsesionada con el rendimiento, el diseño minimalista y la lógica de negocio impecable.
          </p>
          <p className={styles.desc}>
            Diseñamos ecosistemas robustos para empresas que entienden que el software no es un gasto, sino el motor de su crecimiento.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Código Propio</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Escalabilidad</span>
            </div>
          </div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.terminal}>
            <div className={styles.termHeader}>
              <span className={styles.dot} />
              <span className={styles.dot} />
              <span className={styles.dot} />
            </div>
            <div className={styles.termBody}>
              <code><span className={styles.tKeyword}>const</span> <span className={styles.tVar}>organization</span> = {'{'}</code>
              <code>  name: <span className={styles.tString}>'GenCore'</span>,</code>
              <code>  location: <span className={styles.tString}>'Mendoza, AR'</span>,</code>
              <code>  focus: [<span className={styles.tString}>'SaaS'</span>, <span className={styles.tString}>'Automation'</span>, <span className={styles.tString}>'UI/UX'</span>],</code>
              <code>  status: <span className={styles.tBoolean}>true</span></code>
              <code>{'}'}</code>
              <code> </code>
              <code><span className={styles.tKeyword}>await</span> organization.<span className={styles.tFunction}>deploy</span>()</code>
              <code className={styles.tSuccess}>&gt; Sistema inicializado con éxito_</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}