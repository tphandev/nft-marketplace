import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders navigation links", () => {
    render(<Footer />);

    const expectedLinks = [
      "Home",
      "Whitepaper",
      "FAQs",
      "About us",
      "Marketplace",
      "News",
      "Our teams",
      "Roadmap",
      "Community",
    ];

    expectedLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it("renders contact information", () => {
    render(<Footer />);

    expect(screen.getByText("+84 986509559")).toBeInTheDocument();
    expect(screen.getByText("tphan.st@gmail.com")).toBeInTheDocument();
  });

  it("renders subscription form", () => {
    render(<Footer />);

    expect(
      screen.getByPlaceholderText("Your email address")
    ).toBeInTheDocument();
    expect(screen.getByText("Subscribe")).toBeInTheDocument();
  });

  it("renders footer bottom section", () => {
    render(<Footer />);

    expect(screen.getByText("©2025 All Rights reserved.")).toBeInTheDocument();

    const legalLinks = ["Security", "Legal", "Privacy"];
    legalLinks.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });
});
