export function scrollToSection(id, options = {}) {
  const section = document.getElementById(id);
  if (!section) return;

  const header = document.querySelector("header");
  const headerOffset = header ? header.getBoundingClientRect().height : 0;
  const extraOffset = options.extraOffset ?? 10;
  const top =
    section.getBoundingClientRect().top + window.scrollY - headerOffset - extraOffset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}
