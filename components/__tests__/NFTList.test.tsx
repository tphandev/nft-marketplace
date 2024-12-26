import { render, screen } from "@testing-library/react";
import NFTList from "../NFTList";
import { useInView } from "react-intersection-observer";

// Mock the react-intersection-observer
jest.mock("react-intersection-observer", () => ({
  useInView: jest.fn(),
}));

const mockUseInView = useInView as jest.Mock;

describe("NFTList", () => {
  const mockItems = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    image: `/mock-image-${i}.jpg`,
    name: `NFT ${i}`,
    price: `${i}.5 ETH`,
    category: "Art",
  }));

  beforeEach(() => {
    mockUseInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: false,
    }));
  });

  it("renders without crashing", () => {
    render(<NFTList items={mockItems} />);
    const nftCards = screen.getAllByText(/NFT \d/);
    expect(nftCards).toHaveLength(8); // Initial ITEMS_PER_PAGE
  });

  it("renders with title when provided", () => {
    const title = "Featured NFTs";
    render(<NFTList items={mockItems} title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("loads more items when scrolling near bottom", () => {
    mockUseInView.mockImplementation(() => ({
      ref: jest.fn(),
      inView: true,
    }));

    render(<NFTList items={mockItems} />);
    const nftCards = screen.getAllByText(/NFT \d/);
    expect(nftCards).toHaveLength(12); // All items should be loaded
  });

  it("displays correct NFT information", () => {
    render(<NFTList items={mockItems.slice(0, 1)} />);
    expect(screen.getByText("NFT 0")).toBeInTheDocument();
    expect(screen.getByText("0.5 ETH")).toBeInTheDocument();
    expect(screen.getByText("Art")).toBeInTheDocument();
  });

  it("handles empty items array", () => {
    render(<NFTList items={[]} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
