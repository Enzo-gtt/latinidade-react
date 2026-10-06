function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-latinidade">

      <div className="container">

        <a
          className="navbar-brand"
          href="#inicio"
        >
          LATINIDADE
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuPrincipal"
          aria-controls="menuPrincipal"
          aria-expanded="false"
          aria-label="Abrir menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menuPrincipal"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a
                className="nav-link"
                href="#inicio"
              >
                Início
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#explore"
              >
                Explore
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#destaques"
              >
                Gastronomia
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#sabores"
              >
                Sabores
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#curiosidades"
              >
                Curiosidades
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar