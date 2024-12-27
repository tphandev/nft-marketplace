import { render, screen } from "@testing-library/react";
import ProductSection from "../ProductSection";
import { useProducts } from "@/hooks/useProducts";

// Mock the hooks and components
jest.mock("@/hooks/useProducts");
jest.mock("@/components/NFTList", () => ({
  __esModule: true,
  default: ({ items }: { items: { id: number; name: string }[] }) => (
    <div data-testid="nft-list">
      {items.map((item) => (
        <div key={item.id} data-testid="nft-item">
          {item.name}
        </div>
      ))}
    </div>
  ),
}));
jest.mock("@/components/NFTSkeleton", () => ({
  __esModule: true,
  default: () => <div data-testid="nft-skeleton">Loading...</div>,
}));

describe("ProductSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading state", () => {
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
      error: null,
      hasNextPage: false,
      fetchNextPage: jest.fn(),
      isFetchingNextPage: false,
    });

    render(<ProductSection />);
    expect(screen.getByTestId("nft-skeleton")).toBeInTheDocument();
  });

  it("shows error state", () => {
    const errorMessage = "Failed to fetch products";
    (useProducts as jest.Mock).mockReturnValue({
      isLoading: false,
      data: null,
      error: new Error(errorMessage),
      hasNextPage: false,
      fetchNextPage: jest.fn(),
      isFetchingNextPage: false,
    });

    render(<ProductSection />);
    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it("renders products successfully", () => {
    const mockProducts = [
      {
        id: 1,
        imageId: "img1",
        title: "NFT 1",
        price: 0.5,
        category: "Art",
        author: {
          firstName: "John",
          lastName: "Doe",
          onlineStatus: "online",
          avatar: "avatar.jpg",
        },
      },
    ];

    (useProducts as jest.Mock).mockReturnValue({
      isLoading: false,
      data: { pages: [mockProducts], pageParams: [1] },
      error: null,
      hasNextPage: true,
      fetchNextPage: jest.fn(),
      isFetchingNextPage: false,
    });

    render(<ProductSection />);

    expect(screen.getByTestId("nft-list")).toBeInTheDocument();
    expect(screen.getByTestId("nft-item")).toHaveTextContent("NFT 1");
  });
});
