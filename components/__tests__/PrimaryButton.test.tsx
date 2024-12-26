import { render, screen } from "@testing-library/react";
import { PrimaryButton } from "@/components/PrimaryButton";

describe("PrimaryButton", () => {
  it("renders button with correct default classes", () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass(
      "header-16-medium",
      "text-white",
      "rounded-[4px]",
      "bg-gradient"
    );
  });

  it("renders with additional className", () => {
    render(<PrimaryButton className="extra-class">Click me</PrimaryButton>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("extra-class");
  });
});
