const tipToggle = document.querySelector("[data-tip-toggle]");
const tipBanner = document.querySelector("[data-tip-banner]");

if (tipToggle && tipBanner) {
  tipToggle.addEventListener("click", () => {
    const isHidden = tipBanner.hasAttribute("hidden");

    if (isHidden) {
      tipBanner.removeAttribute("hidden");
    } else {
      tipBanner.setAttribute("hidden", "");
    }
  });
}
