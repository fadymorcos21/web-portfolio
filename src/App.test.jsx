import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { apps } from "./data/portfolioData";

describe("Portfolio redesign", () => {
  test("renders sections in the required order", () => {
    render(<App />);

    const orderedIds = [
      "hero",
      "client-platforms",
      "experience",
      "apps",
      "about",
      "contact",
    ];

    const sections = orderedIds.map((id) => document.getElementById(id));

    sections.forEach((section) => {
      expect(section).toBeInTheDocument();
    });

    for (let index = 0; index < sections.length - 1; index += 1) {
      const current = sections[index];
      const next = sections[index + 1];
      expect(current.compareDocumentPosition(next) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
  });

  test("renders four client links with expected URLs", () => {
    render(<App />);

    const urls = [
      "https://www.betterlifevirtualclinic.com/",
      "https://wecaremed.ca/",
      "https://www.thompsonsquarepharmacy.ca/",
      "https://bondheadpharmacy.com/",
    ];

    const section = document.getElementById("client-platforms");
    expect(section).toBeInTheDocument();

    urls.forEach((url) => {
      const link = section.querySelector(`a[href="${url}"]`);
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  test("renders Story Bluff App Store link", () => {
    render(<App />);

    const link = screen.getByRole("link", { name: /app store/i });
    expect(link).toHaveAttribute("href", apps[0].appStoreUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });

  test("renders Story Bluff details inline without modal trigger", () => {
    render(<App />);
    expect(
      screen.getByText(/node\.js \+ redis backend with distributed event handling/i),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("storybluff-open")).not.toBeInTheDocument();
    expect(screen.queryByRole("dialog", { name: /story bluff/i })).not.toBeInTheDocument();
  });

  test("experience cards expand on hover/focus and support keyboard toggle", async () => {
    const user = userEvent.setup();
    render(<App />);

    const card = screen.getByRole("button", { name: /training specialist/i });

    await user.hover(card);
    expect(card).toHaveAttribute("aria-expanded", "true");

    await user.unhover(card);
    expect(card).toHaveAttribute("aria-expanded", "false");

    await user.click(card);
    expect(card).toHaveAttribute("aria-expanded", "true");

    card.focus();
    await user.keyboard("{Enter}");
    expect(card).toHaveAttribute("aria-expanded", "false");
  });
});
