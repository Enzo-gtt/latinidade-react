import Reveal from '../components/Reveal'

function Destaques() {
const pratos = [
  {
    pais: 'Brasil',
    prato: 'Feijoada',
    descricao: 'Um dos pratos mais tradicionais do Brasil, preparado com feijão preto e diferentes cortes de carne.',
    imagem: '/img/destaques/brasil.png',
  },
  {
    pais: 'Argentina',
    prato: 'Asado',
    descricao: 'Mais que um churrasco, o asado representa encontros, tradição e a cultura gastronômica argentina.',
    imagem: '/img/destaques/argentina.png',
  },
  {
    pais: 'Peru',
    prato: 'Ceviche',
    descricao: 'Peixe fresco marinado em limão, acompanhado por ingredientes marcantes da culinária peruana.',
    imagem: '/img/destaques/peru.png',
  },
]
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
      Três sabores,<br />
      três histórias
    </h2>
  </div>

  <div className="destaques-descricao">
    <span className="linha-destaque"></span>

    <p>
      Conheça alguns dos pratos mais marcantes da gastronomia
      sul-americana e as histórias que existem por trás de cada sabor.
    </p>
  </div>
</div>
        </Reveal>

        <div className="row g-4">
  {pratos.map((item) => (
    <div className="col-12 col-md-4" key={item.pais}>
      <Reveal>
        <div className="destaque-card">

          <div className="destaque-imagem">
            <img
              src={item.imagem}
              alt={`${item.prato} - ${item.pais}`}
            />

            <span className="pais-badge">
              {item.pais}
            </span>
          </div>

          <div className="destaque-card-content">
            <h3>{item.prato}</h3>

            <p>
              {item.descricao}
            </p>

            <span className="card-link">
              Conhecer prato →
            </span>
          </div>

        </div>
      </Reveal>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}

export default Destaques