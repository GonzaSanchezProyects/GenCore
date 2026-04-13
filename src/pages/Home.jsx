import ParticleField from '../components/ParticleField/ParticleField'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Products from '../components/Products/Products'
import Services from '../components/Services/Services'
import About from '../components/About/About'
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
        
        <Products />
        <Services />
        <About />

      </main>
      <Footer />
    </div>
  )
}