import { useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import Explore from './sections/Explore'
import Destaques from './sections/Destaques'
import Sabores from './sections/Sabores'
import Curiosidades from './sections/Curiosidades'
import Contato from './sections/Contato'

function App() {
  const [pratoSelecionado, setPratoSelecionado] = useState(null)

  function abrirPrato(pais) {
    setPratoSelecionado({ pais })
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Explore />

        <Destaques
          onConhecerPrato={abrirPrato}
        />

        <Sabores
          pratoSelecionado={pratoSelecionado}
        />

        <Curiosidades />

        <Contato />
      </main>

      <Footer />
    </>
  )
}

export default App