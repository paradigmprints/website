document.querySelectorAll(".nav-link").forEach((ele) =>
  ele.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelectorAll(".nav-link")
      .forEach((ele) => ele.classList.remove("active-page"));
    this.classList.add("active-page")
  })
);