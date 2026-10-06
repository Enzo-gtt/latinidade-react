import { useState } from 'react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import Destaques from './sections/Destaques'
import Sabores from './sections/Sabores'
import Curiosidades from './sections/Curiosidades'
import Contato from './sections/Contato'

function App() {
  const [pratoSelecionado, setPratoSelecionado] = useState(null)

  function abrirPrato(pais) {
    // cria um novo objeto toda vez,
    // permitindo abrir o mesmo prato novamente
    setPratoSelecionado({ pais })
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

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