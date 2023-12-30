document.addEventListener("DOMContentLoaded", () => {
  // Listen for the popstate event when the user navigates using browser buttons
  window.addEventListener("popstate", handleURL);

  // handle the initial URL
  handleURL();

  // For navigation links
  document.addEventListener("click", (e) => {
    const { target } = e;
    if (target.matches("nav a")) {
      e.preventDefault();
      route(target.href);
    }
  });
});

// create an object that maps the pages to the template, title, and description
const routes = {
  404: {
    template: "/pages/404.html",
    title: "404",
    description: "Page not found",
  },
  "/": {
    template: "/pages/home.html",
    title: "Home",
    description: "home page",
  },
  "/index.html": {
    template: "/pages/home.html",
    title: "Home",
    description: "home page",
  },
  "/contact-us": {
    template: "/pages/contact-us.html",
    title: "Contact Us",
    description: "Contact form page",
  },
  "/custom-prints": {
    template: "/pages/custom-prints.html",
    title: "Custom Prints",
    description: "Custom prints form page",
  },
  "/rent-a-printer": {
    template: "/pages/rent-a-printer.html",
    title: "Rent a Printer",
    description: "Rent a printer form page",
  },
};

// create a function that watches the url and calls the urlLocationHandler
const route = (url) => {
  //   event = event || window.event;
  //   event.preventDefault();
  window.history.pushState({}, "", url);
  handleURL();
};

// Handles the url routing
const handleURL = async () => {
  let location = window.location.pathname; // get the url path from the click
  if (location.length === 0) {
    location = "/";
  }
  document
      .querySelectorAll(".nav-link")
      .forEach((ele) => {
        ele.classList.remove("active-page")
        if (ele.pathname === location) {
          ele.classList.add("active-page");
        }
      });
  //   console.log(location);
  const route = routes[location] || routes["404"];

  try {
    const html = await fetch(route.template).then((response) =>
      response.text()
    );

    document.getElementById("content").innerHTML = html;
    document.title = route.title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", route.description);
  } catch (error) {
    console.error("Error fetching page's html:", error);
  }
};
