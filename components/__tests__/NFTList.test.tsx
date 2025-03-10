import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NFTList from "../NFTList";

describe("NFTList", () => {
  const mockCreator = {
    name: "John Doe",
    avatarUrl: "/mock-avatar.jpg",
    isOnline: true,
  };

  const mockItems = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    image: `/mock-image-${i}.jpg`,
    name: `NFT ${i}`,
    price: `${i}.5 ETH`,
    category: "Art",
    creator: mockCreator,
  }));

  it("renders without crashing", async () => {
    render(<NFTList items={mockItems} />);
    await waitFor(() => {
      const nftCards = screen.getAllByText(/NFT \d/);
      expect(nftCards).toHaveLength(mockItems.length);
    });
  });

  it("renders with title when provided", () => {
    const title = "Featured NFTs";
    render(<NFTList items={mockItems} title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("displays view more button when hasMore is true", () => {
    render(<NFTList items={mockItems} hasMore={true} />);
    expect(screen.getByText("View More")).toBeInTheDocument();
  });

  it("calls onLoadMore when view more button is clicked", () => {
    const onLoadMore = jest.fn();
    render(
      <NFTList items={mockItems} hasMore={true} onLoadMore={onLoadMore} />
    );

    fireEvent.click(screen.getByText("View More"));
    expect(onLoadMore).toHaveBeenCalled();
  });

  it("shows loading state in view more button", () => {
    render(<NFTList items={mockItems} hasMore={true} isLoading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("displays correct NFT information", async () => {
    render(<NFTList items={mockItems.slice(0, 1)} />);
    await waitFor(() => {
      expect(screen.getByText("NFT 0")).toBeInTheDocument();
      expect(screen.getByText("0.5 ETH")).toBeInTheDocument();
      expect(screen.getByText("Art")).toBeInTheDocument();
      expect(screen.getByText("John Doe")).toBeInTheDocument();
    });
  });

  it("displays no items message when array is empty", () => {
    render(<NFTList items={[]} />);
    expect(screen.getByText("No items found")).toBeInTheDocument();
  });
});
