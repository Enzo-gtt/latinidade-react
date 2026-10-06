import Reveal from '../components/Reveal'

function Curiosidades() {
  const curiosidades = [
    'O ceviche peruano é conhecido pelo uso de peixe fresco marinado em limão.',
    'O asado argentino é também um momento social de encontro entre família e amigos.',
    'A gastronomia sul-americana mistura influências indígenas, africanas e europeias.',
  ]

  return (
    <section id="curiosidades" className="curiosidades">
      <div className="container">
        <Reveal>
          <span className="section-tag">VOCÊ SABIA?</span>
          <h2>Curiosidades à mesa</h2>
        </Reveal>

        <div className="row g-4 mt-3">
          {curiosidades.map((texto, index) => (
            <div className="col-12 col-md-4" key={index}>
              <Reveal>
                <div className="curiosidade-card">
                  <span>0{index + 1}</span>
                  <p>{texto}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Curiosidades