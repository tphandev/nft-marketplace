import { render, screen, fireEvent } from "@testing-library/react";
import CategorySelector from "../CategorySelector";
import { Category } from "@/types/filters";

describe("CategorySelector", () => {
  const mockCategories: Category[] = ["All", "Epic", "Legendary"];
  const mockOnCategoryChange = jest.fn();

  beforeEach(() => {
    mockOnCategoryChange.mockClear();
  });

  it("renders all categories", () => {
    render(
      <CategorySelector
        categories={mockCategories}
        selectedCategory="All"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    mockCategories.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it("highlights selected category", () => {
    render(
      <CategorySelector
        categories={mockCategories}
        selectedCategory="Epic"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    const selectedLabel = screen.getByText("Epic").closest("label");
    expect(selectedLabel).toHaveClass("bg-gradient");

    const unselectedLabel = screen.getByText("Legendary").closest("label");
    expect(unselectedLabel).toHaveClass("bg-gradient-secondary");
  });

  it("calls onCategoryChange when selecting a category", () => {
    render(
      <CategorySelector
        categories={mockCategories}
        selectedCategory="All"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    fireEvent.click(screen.getByText("Legendary"));
    expect(mockOnCategoryChange).toHaveBeenCalledWith("Legendary");
  });

  it("maintains scroll container properties", () => {
    render(
      <CategorySelector
        categories={mockCategories}
        selectedCategory="All"
        onCategoryChange={mockOnCategoryChange}
      />
    );

    const container = screen.getByRole("group", { name: /categories/i });
    expect(container).toHaveClass(
      "overflow-x-auto",
      "scrolling-touch",
      "custom-scrollbar"
    );
  });
});
