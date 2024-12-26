import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders header component", () => {
    render(<Header />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("displays navigation items", () => {
    render(<Header />);
    expect(screen.getByText("HOME")).toBeInTheDocument();
    expect(screen.getByText("ABOUT US")).toBeInTheDocument();
    expect(screen.getByText("OUR TEAMS")).toBeInTheDocument();
    expect(screen.getByText("MARKETPLACE")).toBeInTheDocument();
    expect(screen.getByText("ROADMAP")).toBeInTheDocument();
    expect(screen.getByText("WHITEPAPER")).toBeInTheDocument();
  });

  it("displays connect wallet button", () => {
    render(<Header />);
    expect(screen.getByText("Connect Wallet")).toBeInTheDocument();
  });

  it("contains mobile menu", () => {
    render(<Header />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
