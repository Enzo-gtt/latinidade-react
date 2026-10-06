import Reveal from '../components/Reveal'

function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-content">

        <Reveal>
          <span className="hero-tag">
            AMÉRICA DO SUL
          </span>

          <h1>
            Descubra a
            <br />
            <span>Latinidade</span>
          </h1>

          <p>
            Uma viagem pelos países, sabores, culturas
            e paisagens incríveis da América do Sul.
          </p>

          <a
            href="#explore"
            className="hero-btn"
          >
            Explorar a América do Sul
            <span>→</span>
          </a>
        </Reveal>

      </div>

    </section>
  )
}

export default Hero