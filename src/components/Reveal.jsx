import { useEffect, useRef, useState } from 'react'

function Reveal({ children }) {
  const elemento = useRef(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
        }
      },
      { threshold: 0.15 }
    )

    if (elemento.current) {
      observer.observe(elemento.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={elemento}
      className={`reveal ${visivel ? 'reveal-visible' : ''}`}
    >
      {children}
    </div>
  )
}

export default Reveal