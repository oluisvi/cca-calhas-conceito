const phone = "5512988213833";
const serviceButtons = [...document.querySelectorAll(".service-item")];
const selectedService = document.querySelector("#selected-service");
const serviceContact = document.querySelector("#service-contact");

function setService(button) {
  const service = button.dataset.service;
  serviceButtons.forEach((item) => {
    const active = item === button;
    item.classList.toggle("is-selected", active);
    item.setAttribute("aria-pressed", String(active));
  });
  selectedService.textContent = service;
  const message = `Olá, gostaria de conversar sobre ${service.toLowerCase()} com a CCA Calhas. Poderiam me orientar sobre os próximos passos e a disponibilidade?`;
  serviceContact.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

serviceButtons.forEach((button) => button.addEventListener("click", () => setService(button)));

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  siteNav.classList.toggle("is-open", !isOpen);
});
siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  siteNav.classList.remove("is-open");
}));
