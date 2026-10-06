import Reveal from '../components/Reveal'

function Curiosidades() {
  const curiosidades = [
    {
      numero: '01',
      titulo: 'Muito além do limão',
      texto:
        'O ceviche peruano é uma das maiores referências gastronômicas do continente e combina peixe fresco, acidez e ingredientes locais.',
    },
    {
      numero: '02',
      titulo: 'Comida também é encontro',
      texto:
        'Na Argentina e no Uruguai, preparar carnes na brasa também representa convivência, tradição e momentos entre família e amigos.',
    },
    {
      numero: '03',
      titulo: 'Um continente de influências',
      texto:
        'A gastronomia sul-americana reúne influências indígenas, africanas, europeias e de diferentes movimentos migratórios.',
    },
  ]

  return (
    <section id="curiosidades" className="curiosidades">
      <div className="container">

        <Reveal>
          <div className="text-center mb-5">
            <span className="section-tag">VOCÊ SABIA?</span>

            <h2>Curiosidades à mesa</h2>

            <p className="curiosidades-intro">
              Pequenos fatos que ajudam a entender as histórias por trás dos sabores.
            </p>
          </div>
        </Reveal>

        <div className="row g-4">
          {curiosidades.map((item) => (
            <div className="col-12 col-md-4" key={item.numero}>
              <Reveal>
                <article className="curiosidade-card">

                  <span>{item.numero}</span>

                  <h3>{item.titulo}</h3>

                  <p>{item.texto}</p>

                </article>
              </Reveal>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Curiosidades