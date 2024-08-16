class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <!-- Logo -->
      <!-- Barra de pesquisa-->
      <header>
        <nav class="navbar">
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="about.html">Sobre nós</a></li>
            <li><a href="eventos.html">Eventos</a></li>
          </ul>
        </nav>
      </header>
      <!-- Pedido de doação -->
    `;
  }
}

customElements.define('header-component', Header);
