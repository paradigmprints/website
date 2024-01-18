class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Footer -->
      <section class="container-fluid text-center">
        <p id="footer-content">
          Paradigm Prints &copy;
        </p>
      </section>
      `;

    // Wait for the DOM to be fully loaded
    document.addEventListener("DOMContentLoaded", () => {
      const footerContent = document.getElementById("footer-content");
      if (footerContent) {
        footerContent.innerHTML += new Date().getFullYear();
      }
    });
  }
}

customElements.define("main-footer", Footer);
