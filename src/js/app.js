import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

(function () {
  const links = document.querySelectorAll("a[href^='https://'], a[href^='http://']");
  const host = window.location.hostname;

  const isInternalLink = (link) => new URL(link).hostname === host;

  links.forEach((link) => {
    if (isInternalLink(link)) return;

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
    link.setAttribute("title", "Opens in a new window");
  });
})();
