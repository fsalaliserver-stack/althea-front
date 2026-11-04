//  menu burger
export function initialiserMenu() {
  const bouton = document.querySelector(".menu-bouton");
  if (!bouton) return;

  const estOuvert = () => bouton.getAttribute("aria-expanded") === "true";
  const regler = (ouvert) =>
    bouton.setAttribute("aria-expanded", String(ouvert));

  regler(false);
  bouton.addEventListener("click", () => regler(!estOuvert()));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && estOuvert()) {
      regler(false);
      bouton.focus(); 
    }
  });
}
