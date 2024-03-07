document.addEventListener("DOMContentLoaded", () => {
  updateConsole();
  toggle();
});

const updateConsole = () => {
  console.log("Hello World! (It is traditional i can't stop myself)");
};

const toggle = () => {
  let clickedbefore = localStorage.getItem("clickedbefore");

  if (!clickedbefore) {
    localStorage.setItem("clickedbefore", "false");
  }
  const elements = document.querySelectorAll("[data-toggle]");

  elements.forEach((element) => {
  
    if (JSON.parse(clickedbefore) === true) {
      toggleClasses(element);
    }

    element.addEventListener("click", (event) => {
      event.preventDefault();

      let targetElement = toggleClasses(element);
      if (targetElement.classList.contains("toggled")) {
        localStorage.setItem("clickedbefore", "true");
      } else {
        localStorage.setItem("clickedbefore", "false");
      }
    });
  });
};

const toggleClasses = (element) => {
  const targetID = element.getAttribute("data-toggle");
  const targetElement = document.getElementById(targetID);
  targetElement.classList.toggle("toggled");
  element.classList.toggle("active");
  return targetElement;
};
