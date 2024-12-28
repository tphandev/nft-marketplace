import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useProducts } from "../useProducts";
import { getProducts } from "@/services/api";
import { ITEMS_PER_PAGE } from "@/constants/designSystem";
import { FilterParams } from "@/types/filters";

jest.mock("@/services/api");
const mockedGetProducts = getProducts as jest.MockedFunction<
  typeof getProducts
>;

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
    const filters = undefined;
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

    expect(result.current.data?.pages[0]).toEqual(mockProducts);
    expect(mockedGetProducts).toHaveBeenCalledWith(1, ITEMS_PER_PAGE, filters);
  });

  it("should fetch products successfully with filters", async () => {
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
    const filters: FilterParams = { category: "Mythic" };
    mockedGetProducts.mockResolvedValueOnce(mockProducts);

    const { result } = renderHook(() => useProducts(ITEMS_PER_PAGE, filters), {
      wrapper: createWrapper(),
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.pages[0]).toEqual(mockProducts);
    expect(mockedGetProducts).toHaveBeenCalledWith(1, ITEMS_PER_PAGE, filters);
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

    expect(result.current.data?.pages[0]).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });

  it("should handle infinite pagination", async () => {
    const firstPageProducts = Array(ITEMS_PER_PAGE).fill({ id: 1 });
    const secondPageProducts = Array(ITEMS_PER_PAGE).fill({ id: 2 });
    const filters = undefined;

    mockedGetProducts
      .mockResolvedValueOnce(firstPageProducts)
      .mockResolvedValueOnce(secondPageProducts);

    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    // Check first page
    expect(result.current.data?.pages[0]).toEqual(firstPageProducts);

    // Fetch next page
    await result.current.fetchNextPage();

    await waitFor(() => {
      expect(result.current.data?.pages).toHaveLength(2);
    });

    expect(mockedGetProducts).toHaveBeenCalledTimes(2);
    expect(mockedGetProducts).toHaveBeenNthCalledWith(
      1,
      1,
      ITEMS_PER_PAGE,
      filters
    );
    expect(mockedGetProducts).toHaveBeenNthCalledWith(
      2,
      2,
      ITEMS_PER_PAGE,
      filters
    );
  });

  it("should handle infinite pagination with filters", async () => {
    const firstPageProducts = Array(ITEMS_PER_PAGE).fill({ id: 1 });
    const secondPageProducts = Array(ITEMS_PER_PAGE).fill({ id: 2 });
    const filters: FilterParams = { category: "Mythic" };

    mockedGetProducts
      .mockResolvedValueOnce(firstPageProducts)
      .mockResolvedValueOnce(secondPageProducts);

    const { result } = renderHook(() => useProducts(ITEMS_PER_PAGE, filters), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.pages[0]).toEqual(firstPageProducts);

    await result.current.fetchNextPage();

    await waitFor(() => {
      expect(result.current.data?.pages).toHaveLength(2);
    });

    expect(mockedGetProducts).toHaveBeenCalledTimes(2);
    expect(mockedGetProducts).toHaveBeenNthCalledWith(
      1,
      1,
      ITEMS_PER_PAGE,
      filters
    );
    expect(mockedGetProducts).toHaveBeenNthCalledWith(
      2,
      2,
      ITEMS_PER_PAGE,
      filters
    );
  });

  it("should refetch when filters change", async () => {
    const mockProducts = Array(ITEMS_PER_PAGE).fill({ id: 1 });
    const initialFilters: FilterParams = { category: "Mythic" };
    const newFilters: FilterParams = { category: "Epic" };

    mockedGetProducts.mockResolvedValue(mockProducts);

    const { result, rerender } = renderHook(
      ({ filters }) => useProducts(ITEMS_PER_PAGE, filters),
      {
        wrapper: createWrapper(),
        initialProps: { filters: initialFilters },
      }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    // Rerender with new filters
    rerender({ filters: newFilters });

    await waitFor(() => {
      expect(mockedGetProducts).toHaveBeenCalledWith(
        1,
        ITEMS_PER_PAGE,
        newFilters
      );
    });
  });

  it("should not have next page when results are less than limit", async () => {
    const partialPage = Array(ITEMS_PER_PAGE - 1).fill({ id: 1 });
    mockedGetProducts.mockResolvedValueOnce(partialPage);

    const { result } = renderHook(() => useProducts(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.hasNextPage).toBe(false);
  });
});
