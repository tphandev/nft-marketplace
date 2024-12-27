import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useProducts } from "../useProducts";
import { getProducts } from "@/services/api";
import { ITEMS_PER_PAGE } from "@/constants/designSystem";

// Mock the API service
jest.mock("@/services/api");
const mockedGetProducts = getProducts as jest.MockedFunction<
  typeof getProducts
>;

// Test wrapper setup
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = "TestWrapper";
  return Wrapper;
};

describe("useProducts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch products successfully", async () => {
    const mockProducts = [
      {
        id: 1,
        title: "Metal Gear Girl",
        category: "Mythic",
        price: 30.09,
        isFavorite: false,
        createdAt: 1624533946000,
        theme: "Halloween",
        tier: "Premium",
        imageId: 8,
        author: {
          firstName: "Dewie",
          lastName: "Labeuil",
          email: "dlabeuilv@nba.com",
          gender: "Male",
          avatar:
            "https://robohash.org/nihiltotamdolorem.png?size=100x100&set=set1",
          onlineStatus: "idle",
        },
      },
      {
        id: 2,
        title: "Rhythm Ruler",
        category: "Epic",
        price: 52.57,
        isFavorite: true,
        createdAt: 1652687980000,
        theme: "Halloween",
        tier: "Deluxe",
        imageId: 11,
        author: {
          firstName: "Thaddeus",
          lastName: "Tumulty",
          email: "ttumultyt@t-online.de",
          gender: "Male",
          avatar:
            "https://robohash.org/perferendisitaquedolor.png?size=100x100&set=set1",
          onlineStatus: "offline",
        },
      },
    ];
    mockedGetProducts.mockResolvedValueOnce(mockProducts);

    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(mockProducts);
    expect(mockedGetProducts).toHaveBeenCalledWith(1, ITEMS_PER_PAGE);
  });

  it("should handle error when fetching products fails", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    mockedGetProducts.mockRejectedValueOnce(new Error("API Error"));

    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  it("should handle pagination", async () => {
    const page = 2;
    const limit = 10;

    renderHook(() => useProducts(page, limit), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(mockedGetProducts).toHaveBeenCalledWith(page, limit);
    });
  });
});
