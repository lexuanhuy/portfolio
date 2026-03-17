import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import CyberNavigation from "../CyberNavigation";
import { describe, it, expect } from "vitest";

describe("CyberNavigation", () => {
  it("renders all navigation items", () => {
    render(
      <MemoryRouter>
        <CyberNavigation />
      </MemoryRouter>,
    );

    expect(screen.getByText("Kỹ Năng")).toBeInTheDocument();
    expect(screen.getByText("Dự Án")).toBeInTheDocument();
    expect(screen.getByText("Về Tôi")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Liên Hệ")).toBeInTheDocument();
  });

  it("has correct paths for links", () => {
    render(
      <MemoryRouter>
        <CyberNavigation />
      </MemoryRouter>,
    );

    const skillsLink = screen.getByText("Kỹ Năng").closest("a");
    expect(skillsLink).toHaveAttribute("href", "/skills");

    const projectsLink = screen.getByText("Dự Án").closest("a");
    expect(projectsLink).toHaveAttribute("href", "/projects");
  });
});
