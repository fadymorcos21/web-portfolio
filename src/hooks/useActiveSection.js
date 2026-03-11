import { useEffect, useState } from "react";

const sectionIds = [
  "hero",
  "client-platforms",
  "experience",
  "apps",
  "about",
  "contact",
];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!observedSections.length) {
      return undefined;
    }

    let frameId = null;
    const scheduleFrame =
      window.requestAnimationFrame ?? ((callback) => window.setTimeout(callback, 16));
    const cancelFrame =
      window.cancelAnimationFrame ?? ((id) => window.clearTimeout(id));

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.35;

      let lastPassed = observedSections[0];
      let closest = observedSections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      observedSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportAnchor);

        if (distance < closestDistance) {
          closest = section;
          closestDistance = distance;
        }

        if (rect.top <= viewportAnchor) {
          lastPassed = section;
        }
      });

      const nextActive = (lastPassed ?? closest).id;
      setActiveSection((prev) => (prev === nextActive ? prev : nextActive));
    };

    const requestUpdate = () => {
      if (frameId !== null) return;
      frameId = scheduleFrame(() => {
        updateActiveSection();
        frameId = null;
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frameId !== null) {
        cancelFrame(frameId);
      }
    };
  }, []);

  return { activeSection, sectionIds };
}
