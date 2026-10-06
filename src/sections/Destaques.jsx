import Reveal from '../components/Reveal'

function Destaques({ onConhecerPrato }) {

  const pratos = [
    {
      pais: 'Brasil',
      prato: 'Feijoada',
      descricao:
        'Um dos pratos mais tradicionais do Brasil, preparado com feijão preto e diferentes cortes de carne.',
      imagem: '/img/destaques/brasil.png',
    },

    {
      pais: 'Argentina',
      prato: 'Asado',
      descricao:
        'Mais que um churrasco, o asado representa encontros, tradição e a cultura gastronômica argentina.',
      imagem: '/img/destaques/argentina.png',
    },

    {
      pais: 'Peru',
      prato: 'Ceviche',
      descricao:
        'Peixe fresco marinado em limão, acompanhado por ingredientes marcantes da culinária peruana.',
      imagem: '/img/destaques/peru.png',
    },
  ]

  function conhecerPrato(pais) {
    const sabores = document.getElementById('sabores')

    if (sabores) {
      sabores.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }

    // espera a rolagem acontecer e depois abre o prato
    setTimeout(() => {
      onConhecerPrato(pais)
    }, 500)
  }

  return (
    <section id="destaques" className="destaques">
      <div className="container">

        <Reveal>
          <div className="destaques-intro">

            <div className="destaques-titulo">
              <span className="section-tag">
                SABORES EM DESTAQUE
              </span>

              <h2 className="section-title">
                Três sabores,
                <br />
                três histórias
              </h2>
            </div>

            <div className="destaques-descricao">
              <span className="linha-destaque"></span>

              <p>
                Conheça alguns dos pratos mais marcantes da
                gastronomia sul-americana e as histórias que existem
                por trás de cada sabor.
              </p>
            </div>

          </div>
        </Reveal>

        <div className="row g-4">

          {pratos.map((item) => (
            <div
              className="col-12 col-md-4"
              key={item.pais}
            >
              <Reveal>
                <article className="destaque-card">

                  <div className="destaque-imagem">
                    <img
                      src={item.imagem}
                      alt={item.prato}
                    />

                    <span className="pais-badge">
                      {item.pais}
                    </span>
                  </div>

                  <div className="destaque-card-content">

                    <h3>{item.prato}</h3>

                    <p>{item.descricao}</p>

                    <a
                      href="#sabores"
                      className="card-action"
                      onClick={(event) => {
                        event.preventDefault()
                        conhecerPrato(item.pais)
                      }}
                    >
                      Conhecer prato
                      <span>→</span>
                    </a>

                  </div>

                </article>
              </Reveal>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Destaques