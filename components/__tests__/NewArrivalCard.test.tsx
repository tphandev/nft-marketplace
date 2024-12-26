import { render, screen } from "@testing-library/react";
import NewArrivalCard from "@/components/NewArrivalCard";

describe("NewArrivalCard", () => {
  const mockProps = {
    image: "/test-image.jpg",
    name: "Test Card",
  };

  it("renders the card with correct name and images", () => {
    render(<NewArrivalCard {...mockProps} />);

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByAltText("Test Card illustration")).toBeInTheDocument();
    expect(screen.getByAltText("Skyfall background")).toBeInTheDocument();
  });
});
