import { render, screen } from "@testing-library/react";
import Creator from "../Creator";

// Mock next/image since it's not available in test environment
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: {
    src: string;
    alt: string;
    width: number;
    height: number;
    [key: string]: string | number | undefined;
  }) => {
    return <img {...props} />;
  },
}));

describe("Creator", () => {
  const defaultProps = {
    name: "John Doe",
    isOnline: true,
    avatarUrl: "/avatar.jpg",
  };

  it("renders creator name correctly", () => {
    render(<Creator {...defaultProps} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("renders avatar image with correct props", () => {
    render(<Creator {...defaultProps} />);
    const avatar = screen.getByAltText("John Doe's avatar");
    expect(avatar).toHaveAttribute("src", "/avatar.jpg");
    expect(avatar).toHaveAttribute("width", "32");
    expect(avatar).toHaveAttribute("height", "32");
  });

  it("shows green status indicator when online", () => {
    render(<Creator {...defaultProps} />);
    const statusIndicator = screen.getByTestId("status-indicator");
    expect(statusIndicator).toHaveClass("bg-green-500");
  });

  it("shows gray status indicator when offline", () => {
    render(<Creator {...defaultProps} isOnline={false} />);
    const statusIndicator = screen.getByTestId("status-indicator");
    expect(statusIndicator).toHaveClass("bg-gray-400");
  });
});
