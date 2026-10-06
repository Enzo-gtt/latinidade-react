import { useState } from 'react'
import Reveal from '../components/Reveal'

function Sabores() {
  const pratos = [
    {
      pais: 'Brasil',
      prato: 'Feijoada',
      capa: '/img/paises/brasil.png',
      imagem: '/img/pratos/feijoada.png',
      resumo: 'Feijão preto, carnes e tradição brasileira.',
      descricao:
        'A feijoada é um dos pratos mais conhecidos do Brasil. É preparada com feijão preto, diferentes cortes de carne e acompanhamentos tradicionais.',
      ingredientes:
        'Feijão preto, carnes, arroz, couve, farofa e laranja.',
      origem: 'Brasil',
      curiosidade:
        'É muito associada a almoços em família e encontros de fim de semana.',
    },

    {
      pais: 'Argentina',
      prato: 'Asado',
      capa: '/img/paises/argentina.png',
      imagem: '/img/pratos/asado.png',
      resumo: 'Carnes na brasa e tradição argentina.',
      descricao:
        'O asado é uma das principais tradições gastronômicas argentinas e consiste no preparo de diferentes carnes sobre a brasa.',
      ingredientes:
        'Carne bovina, linguiça, sal e diferentes acompanhamentos.',
      origem: 'Argentina',
      curiosidade:
        'Além da comida, o asado representa um momento de encontro entre familiares e amigos.',
    },

    {
      pais: 'Chile',
      prato: 'Pastel de Choclo',
      capa: '/img/paises/chile.png',
      imagem: '/img/pratos/pastel-choclo.png',
      resumo: 'Milho, carne e sabores tradicionais.',
      descricao:
        'O pastel de choclo combina uma cobertura feita com milho e um recheio preparado com carne e outros ingredientes.',
      ingredientes:
        'Milho, carne, cebola, ovo, azeitona e temperos.',
      origem: 'Chile',
      curiosidade:
        'É um dos pratos caseiros mais conhecidos da culinária chilena.',
    },

    {
      pais: 'Peru',
      prato: 'Ceviche',
      capa: '/img/paises/peru.png',
      imagem: '/img/pratos/ceviche.png',
      resumo: 'Peixe fresco, limão e sabores intensos.',
      descricao:
        'O ceviche é preparado com peixe fresco marinado em limão e acompanhado por ingredientes marcantes da culinária peruana.',
      ingredientes:
        'Peixe, limão, cebola roxa, pimenta e coentro.',
      origem: 'Peru',
      curiosidade:
        'É considerado um dos maiores símbolos da gastronomia peruana.',
    },

    {
      pais: 'Colômbia',
      prato: 'Bandeja Paisa',
      capa: '/img/paises/colombia.png',
      imagem: '/img/pratos/bandeja-paisa.png',
      resumo: 'Uma refeição completa, variada e muito farta.',
      descricao:
        'A bandeja paisa reúne vários alimentos em uma única refeição e é um dos pratos mais conhecidos da Colômbia.',
      ingredientes:
        'Arroz, feijão, carne, ovo, banana, abacate e acompanhamentos.',
      origem: 'Colômbia',
      curiosidade:
        'O prato se destaca pela quantidade e variedade de alimentos servidos juntos.',
    },

    {
      pais: 'Uruguai',
      prato: 'Chivito',
      capa: '/img/paises/uruguai.png',
      imagem: '/img/pratos/chivito.png',
      resumo: 'Sanduíche tradicional com muitos acompanhamentos.',
      descricao:
        'O chivito é um sanduíche tradicional uruguaio preparado com carne e vários acompanhamentos.',
      ingredientes:
        'Carne, pão, queijo, presunto, tomate, alface e ovo.',
      origem: 'Uruguai',
      curiosidade:
        'Apesar do nome, normalmente não é preparado com carne de cabrito.',
    },

    {
      pais: 'Bolívia',
      prato: 'Salteña',
      capa: '/img/paises/bolivia.png',
      imagem: '/img/pratos/saltena.png',
      resumo: 'Massa assada com recheio bastante suculento.',
      descricao:
        'A salteña é uma massa assada recheada com carne, legumes e um caldo bastante temperado.',
      ingredientes:
        'Massa, carne, batata, legumes, ovo e temperos.',
      origem: 'Bolívia',
      curiosidade:
        'É muito consumida durante a manhã como um lanche tradicional.',
    },

    {
      pais: 'Equador',
      prato: 'Encebollado',
      capa: '/img/paises/equador.png',
      imagem: '/img/pratos/encebollado.png',
      resumo: 'Sopa de peixe com mandioca e cebola.',
      descricao:
        'O encebollado é uma sopa tradicional equatoriana preparada principalmente com peixe, mandioca e cebola.',
      ingredientes:
        'Peixe, mandioca, cebola, tomate, coentro e temperos.',
      origem: 'Equador',
      curiosidade:
        'É especialmente popular nas regiões costeiras do país.',
    },

    {
      pais: 'Paraguai',
      prato: 'Sopa Paraguaia',
      capa: '/img/paises/paraguai.png',
      imagem: '/img/pratos/sopa-paraguaia.png',
      resumo: 'Uma sopa que, curiosamente, é sólida.',
      descricao:
        'Apesar do nome, a sopa paraguaia é um prato assado semelhante a um bolo salgado preparado principalmente com milho.',
      ingredientes:
        'Milho, queijo, cebola, leite, ovos e gordura.',
      origem: 'Paraguai',
      curiosidade:
        'Seu nome chama atenção porque, diferente de uma sopa tradicional, ela não é líquida.',
    },

    {
      pais: 'Venezuela',
      prato: 'Arepa',
      capa: '/img/paises/venezuela.png',
      imagem: '/img/pratos/arepa.png',
      resumo: 'Massa de milho com diversos tipos de recheio.',
      descricao:
        'A arepa é feita com massa de milho e pode receber vários recheios, sendo muito presente no cotidiano venezuelano.',
      ingredientes:
        'Farinha de milho, água, sal e diferentes recheios.',
      origem: 'Venezuela',
      curiosidade:
        'Pode ser consumida no café da manhã, almoço ou jantar.',
    },

    {
      pais: 'Guiana',
      prato: 'Pepperpot',
      capa: '/img/paises/guiana.png',
      imagem: '/img/pratos/pepperpot.png',
      resumo: 'Ensopado de carne com sabor intenso.',
      descricao:
        'O pepperpot é um ensopado tradicional preparado com carne, especiarias e temperos marcantes.',
      ingredientes:
        'Carne, especiarias, ervas e temperos.',
      origem: 'Guiana',
      curiosidade:
        'É tradicionalmente servido em celebrações e ocasiões especiais.',
    },

    {
      pais: 'Suriname',
      prato: 'Pom',
      capa: '/img/paises/suriname.png',
      imagem: '/img/pratos/pom.png',
      resumo: 'Um prato marcado pela mistura de culturas.',
      descricao:
        'O pom é um prato assado bastante conhecido no Suriname e representa a diversidade cultural presente na gastronomia do país.',
      ingredientes:
        'Pomtajer, carne, frutas cítricas e temperos.',
      origem: 'Suriname',
      curiosidade:
        'É bastante servido em festas, aniversários e outras comemorações.',
    },
  ]

  const [selecionado, setSelecionado] = useState(null)

  return (
    <section id="sabores" className="sabores">
      <div className="container">

        <Reveal>
          <div className="sabores-cabecalho">
            <span className="section-tag">
              PELO CONTINENTE
            </span>

            <h2 className="sabores-title">
              12 países, muitos sabores
            </h2>

            <p>
              Viaje pela América do Sul através de paisagens,
              tradições e pratos que representam cada país.
            </p>
          </div>
        </Reveal>

        <div className="row g-3">

          {pratos.map((item, index) => (
            <div
              className="col-6 col-md-4 col-lg-3"
              key={item.pais}
            >
              <Reveal>
                <article className="sabor-card">

                  {/* FOTO DO PAÍS */}
                  <div className="sabor-card-imagem">
                    <img
                      src={item.capa}
                      alt={item.pais}
                    />
                  </div>

                  <div className="sabor-card-topo">

                    <span className="sabor-pais">
                      {item.pais}
                    </span>

                    <span className="sabor-numero">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                  </div>

                  <h3>{item.prato}</h3>

                  <p>{item.resumo}</p>

                  <button
                    className="sabor-btn"
                    onClick={() => setSelecionado(item)}
                  >
                    Ver detalhes
                    <span>→</span>
                  </button>

                </article>
              </Reveal>
            </div>
          ))}

        </div>
      </div>


      {/* MODAL */}

      {selecionado && (
        <div
          className="modal-sabor-fundo"
          onClick={() => setSelecionado(null)}
        >

          <div
            className="modal-sabor"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="modal-fechar"
              onClick={() => setSelecionado(null)}
              aria-label="Fechar"
            >
              ×
            </button>


            {/* FOTO DO PRATO */}

            <img
              src={selecionado.imagem}
              alt={selecionado.prato}
              className="modal-sabor-img"
            />


            <div className="modal-sabor-conteudo">

              <span className="modal-pais">
                {selecionado.pais}
              </span>

              <h2>
                {selecionado.prato}
              </h2>

              <p className="modal-descricao">
                {selecionado.descricao}
              </p>


              <div className="modal-info">

                <div>
                  <span>01</span>

                  <h4>
                    Principais ingredientes
                  </h4>

                  <p>
                    {selecionado.ingredientes}
                  </p>
                </div>


                <div>
                  <span>02</span>

                  <h4>
                    Origem
                  </h4>

                  <p>
                    {selecionado.origem}
                  </p>
                </div>


                <div>
                  <span>03</span>

                  <h4>
                    Curiosidade
                  </h4>

                  <p>
                    {selecionado.curiosidade}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Sabores