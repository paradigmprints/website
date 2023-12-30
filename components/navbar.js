class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid flex-row-reverse">
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
            class="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <nav class="navbar-nav w-100 justify-content-between">
              <a class="nav-link" href="/">HOME</a>
              <a class="nav-link" href="/">CUSTOM PRINTS</a>
              <a class="nav-link" href="/">PRINTER RENTALS</a>
              <a class="nav-link" href="/">CONTACT US</a>
            </nav>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("main-navbar", Navbar);
