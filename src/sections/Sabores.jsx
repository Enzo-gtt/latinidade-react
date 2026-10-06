import Reveal from '../components/Reveal'

function Sabores() {
  const pratos = [
    { pais: 'Brasil', prato: 'Feijoada' },
    { pais: 'Argentina', prato: 'Asado' },
    { pais: 'Chile', prato: 'Pastel de Choclo' },
    { pais: 'Peru', prato: 'Ceviche' },
    { pais: 'Colômbia', prato: 'Bandeja Paisa' },
    { pais: 'Uruguai', prato: 'Chivito' },
    { pais: 'Bolívia', prato: 'Salteña' },
    { pais: 'Equador', prato: 'Encebollado' },
    { pais: 'Paraguai', prato: 'Sopa Paraguaia' },
    { pais: 'Venezuela', prato: 'Arepa' },
    { pais: 'Guiana', prato: 'Pepperpot' },
    { pais: 'Suriname', prato: 'Pom' },
  ]

  return (
    <section id="sabores" className="sabores">
      <div className="container">
        <Reveal>
          <span className="section-tag">PELO CONTINENTE</span>
          <h2 className="sabores-title">12 países, muitos sabores</h2>
        </Reveal>
        <div className="row g-3 mt-4">
          {pratos.map((item) => (
            <div className="col-6 col-md-4 col-lg-3" key={item.pais}>
              <Reveal>
                <div className="sabor-card">
                  <span>{item.pais}</span>
                  <h3>{item.prato}</h3>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sabores