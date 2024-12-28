import { render } from "@testing-library/react";
import NFTSkeleton from "../NFTSkeleton";
import { ITEMS_PER_PAGE } from "@/constants/designSystem";

describe("NFTSkeleton", () => {
  it("renders the correct number of skeleton cards", () => {
    render(<NFTSkeleton />);
    const cards = document.querySelectorAll(".skeleton-card");
    expect(cards).toHaveLength(ITEMS_PER_PAGE);
  });

  it("renders skeleton elements within each card", () => {
    render(<NFTSkeleton />);

    // Check for skeleton elements
    const skeletonElements = document.querySelectorAll(".skeleton-image");
    expect(skeletonElements).toHaveLength(ITEMS_PER_PAGE);

    // Check for details skeletons
    const avatarSkeletons = document.querySelectorAll(".skeleton-details");
    expect(avatarSkeletons).toHaveLength(ITEMS_PER_PAGE);
  });

  it("applies correct styling classes", () => {
    render(<NFTSkeleton />);

    // Check container grid
    const container = document.querySelector(".grid");
    expect(container).toHaveClass(
      "grid-cols-1",
      "md:grid-cols-2",
      "lg:grid-cols-3",
      "xl:grid-cols-4"
    );

    // Check card styling
    const cards = document.querySelectorAll(".skeleton-card");
    cards.forEach((card) => {
      expect(card).toHaveClass("p-4", "bg-gray-800", "animate-pulse");
    });
  });
});
