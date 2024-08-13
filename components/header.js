class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="about.html">Sobre nós</a></li>
            <li><a href="eventos.html">Eventos</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
