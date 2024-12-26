import { render, screen } from "@testing-library/react";
import MainLayout from "../MainLayout";

describe("MainLayout", () => {
  it("renders children correctly", () => {
    const testContent = <div data-testid="test-content">Test Content</div>;
    render(<MainLayout>{testContent}</MainLayout>);

    expect(screen.getByTestId("test-content")).toBeInTheDocument();
  });
});
