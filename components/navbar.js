class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
    `
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand h1" href="./">
            <img
              src="assets/PPLogo.JPEG"
              alt="Logo"
              width="30"
              height="30"
              class="d-inline-block align-text-top"
            />
            Paradigm Prints
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse flex-row-reverse"
            id="navbarNavAltMarkup"
          >
            <nav class="navbar-nav">
              <a class="nav-link" href="/custom-prints">Custom Prints</a>
              <a class="nav-link" href="/rent-a-printer">Rent a Printer</a>
              <a class="nav-link" href="/contact-us">Contact Us</a>
              <a href="#"></a>
            </nav>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('main-navbar', Navbar);
