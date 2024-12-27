import { render } from "@testing-library/react";
import NFTSkeleton from "../NFTSkeleton";
import { ITEMS_PER_PAGE } from "@/constants/designSystem";

describe("NFTSkeleton", () => {
  it("renders the correct number of skeleton cards", () => {
    render(<NFTSkeleton />);
    const cards = document.querySelectorAll(".ant-card");
    expect(cards).toHaveLength(ITEMS_PER_PAGE);
  });

  it("renders skeleton elements within each card", () => {
    render(<NFTSkeleton />);

    // Check for skeleton elements
    const skeletonElements = document.querySelectorAll(".ant-skeleton-image");
    expect(skeletonElements).toHaveLength(ITEMS_PER_PAGE);

    // Check for title skeletons
    const titleSkeletons = document.querySelectorAll(".ant-skeleton-title");
    expect(titleSkeletons.length).toBeGreaterThan(0);

    // Check for avatar skeletons
    const avatarSkeletons = document.querySelectorAll(".ant-skeleton-avatar");
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
    const cards = document.querySelectorAll(".ant-card");
    cards.forEach((card) => {
      expect(card).toHaveClass("p-2", "!bg-[#3A3841]/60");
    });
  });
});
