class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css" />
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <ul class="social-row">
          <li><a href="https://github.com/my-github-profile"><i class="ti ti-brand-whatsapp"></i></a></li>  
          <li><a href="https://github.com/my-github-profile"><i class="ti ti-brand-instagram"></i></a></li> 
          <li><a href="https://github.com/my-github-profile"><i class="ti ti-brand-github"></i></a></li>
          <li><a href="https://twitter.com/my-twitter-profile"><i class="ti ti-brand-x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="ti ti-brand-linkedin"></i></a></li>  
          <li><a href="https://github.com/my-github-profile"><i class="ti ti-brand-facebook"></i></a></li>
          <li><a href="https://github.com/my-github-profile"><i class="ti ti-brand-telegram"></i></a></li>
          
        </ul>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
