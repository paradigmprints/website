class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Navbar -->
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid d-flex align-items-center flex-row-reverse">
    <button
      class="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="toggler-icon top-bar"></span>
      <span class="toggler-icon middle-bar"></span>
      <span class="toggler-icon bottom-bar"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <nav class="navbar-nav w-100 justify-content-between">
        <a class="nav-link me-5" href="/">HOME</a>
        <a class="nav-link me-5" href="/custom">CUSTOM PRINTS</a>
        <a class="nav-link me-5" href="/rental">PRINTER RENTALS</a>
        <a class="nav-link" href="/contact">CONTACT US</a>
      </nav>
    </div>
  </div>
</nav>
    `;
  }
}

customElements.define("main-navbar", Navbar);
