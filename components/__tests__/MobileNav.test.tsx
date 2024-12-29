import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MobileNav from "../MobileNav";
import { usePathname } from "next/navigation";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

const mockItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
];

describe("MobileNav", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  it("renders mobile nav button", () => {
    render(<MobileNav items={mockItems} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens drawer when button is clicked", () => {
    render(<MobileNav items={mockItems} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Check if drawer content is visible
    mockItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("highlights active link based on current path", () => {
    (usePathname as jest.Mock).mockReturnValue("/about");
    render(<MobileNav items={mockItems} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const aboutLink = screen.getByText("About").closest("a");
    expect(aboutLink).not.toHaveClass("text-black");
  });

  it("closes drawer when link is clicked", () => {
    render(<MobileNav items={mockItems} />);

    // Open drawer
    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Click a link
    const link = screen.getByText("Home");
    fireEvent.click(link);

    // Verify drawer is closed (content should not be visible)
    expect(screen.queryByText("Home")).not.toBeVisible();
  });
});
