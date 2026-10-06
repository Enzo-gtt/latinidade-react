import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import Destaques from './sections/Destaques'
import Sabores from './sections/Sabores'
import Curiosidades from './sections/Curiosidades'
import Contato from './sections/Contato'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Destaques />
        <Sabores />
        <Curiosidades />
        <Contato />
      </main>

      <Footer />
    </>
  )
}

export default App