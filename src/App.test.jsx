import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

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

  test("opens and closes Story Bluff modal", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByTestId("storybluff-open"));
    expect(screen.getByRole("dialog", { name: /story bluff/i })).toBeInTheDocument();

    await user.click(screen.getByLabelText(/close story bluff details/i));
    await waitFor(() => {
      expect(screen.queryByRole("dialog", { name: /story bluff/i })).not.toBeInTheDocument();
    });
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
