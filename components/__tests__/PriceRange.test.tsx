import { render, screen } from "@testing-library/react";
import PriceRange from "../PriceRange";
import { useDebounce } from "@/hooks/useDebounce";

// Mock the useDebounce hook
jest.mock("@/hooks/useDebounce", () => ({
  useDebounce: jest.fn((value) => value), // Return value immediately for testing
}));

describe("PriceRange", () => {
  const mockOnChange = jest.fn();
  const defaultProps = {
    initialValue: { min: 1, max: 100 },
    onChange: mockOnChange,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders with initial values", () => {
    render(<PriceRange {...defaultProps} />);

    expect(screen.getByText("PRICE")).toBeInTheDocument();
    expect(screen.getByText("1 ETH")).toBeInTheDocument();
    expect(screen.getByText("100 ETH")).toBeInTheDocument();
  });

  it("renders with default min/max when initial values are undefined", () => {
    render(
      <PriceRange
        initialValue={{ min: undefined, max: undefined }}
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText("0.01 ETH")).toBeInTheDocument();
    expect(screen.getByText("200 ETH")).toBeInTheDocument();
  });

  it("debounces price range updates", () => {
    (useDebounce as jest.Mock).mockImplementation((value) => ({
      min: value.min + 1,
      max: value.max + 1,
    }));

    render(<PriceRange {...defaultProps} />);

    expect(useDebounce).toHaveBeenCalledWith({ min: 1, max: 100 }, 500);
  });
});
