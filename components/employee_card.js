class EmployeeCard extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <!-- Employee Card -->
        <h1>Employee Card</h1>
        `;
    }
  }
  
  customElements.define("main-employeecard", EmployeeCard);
  