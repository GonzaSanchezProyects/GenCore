import ParticleField from '../components/ParticleField/ParticleField'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <ParticleField />
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <section className={styles.manifesto}>
          <p className={styles.manifestoText}>
            No construimos <em>features</em>.&nbsp;
            Construimos <strong>infraestructura</strong> que hace crecer negocios reales.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}