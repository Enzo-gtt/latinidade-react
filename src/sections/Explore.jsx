import Reveal from '../components/Reveal'

function Explore() {
  const itens = [
    {
      icone: '🌎',
      titulo: 'Países',
      texto: 'Conheça os países que formam a América do Sul.',
      disponivel: false,
    },

    {
      icone: '🏔️',
      titulo: 'Turismo',
      texto: 'Descubra paisagens, destinos e lugares marcantes do continente.',
      disponivel: false,
    },

    {
      icone: '🍽️',
      titulo: 'Gastronomia',
      texto: 'Conheça pratos tradicionais e sabores latinos.',
      disponivel: true,
    },

    {
      icone: '🎭',
      titulo: 'Cultura',
      texto: 'Música, dança, festas, costumes e tradições sul-americanas.',
      disponivel: false,
    },
  ]

  return (
    <section id="explore" className="explore">
      <div className="container">

        <Reveal>
          <div className="explore-header">
            <span className="section-tag">
              EXPLORE
            </span>

            <h2>
              Um continente, muitas histórias
            </h2>

            <p>
              A América do Sul é formada por países com culturas,
              tradições, paisagens e sabores únicos. Do calor do
              Brasil às montanhas do Peru, existe uma enorme
              diversidade esperando para ser descoberta.
            </p>
          </div>
        </Reveal>


        <div className="row g-4">

          {itens.map((item) => (
            <div
              className="col-12 col-sm-6 col-lg-3"
              key={item.titulo}
            >

              <Reveal>
                <article className="explore-card">

                  <div className="explore-icon">
                    {item.icone}
                  </div>

                  <h3>
                    {item.titulo}
                  </h3>

                  <p>
                    {item.texto}
                  </p>

                  {item.disponivel ? (
                    <a
                      href="#destaques"
                      className="explore-link"
                    >
                      Explorar gastronomia
                      <span>→</span>
                    </a>
                  ) : (
                    <span className="explore-em-breve">
                      Em breve
                    </span>
                  )}

                </article>
              </Reveal>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Explore