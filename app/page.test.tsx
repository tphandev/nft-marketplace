import { render, screen } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

// Mock child components
jest.mock("@/components/Hero", () => {
  return function MockHero() {
    return <div data-testid="mock-hero">Hero Component</div>;
  };
});

jest.mock("@/components/MainLayout", () => {
  return function MockMainLayout({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock-main-layout">{children}</div>;
  };
});

jest.mock("@/components/NFTList", () => {
  return function MockNFTList({
    items,
    title,
  }: {
    items: unknown[];
    title: string;
  }) {
    return (
      <div data-testid="mock-nft-list">
        <h2>{title}</h2>
        <div>NFT Count: {items.length}</div>
      </div>
    );
  };
});

jest.mock("@/components/ProductSection", () => {
  return function MockProductSection() {
    return (
      <div data-testid="mock-nft-list">
        <h2>Featured NFTs</h2>
        <div>NFT Count: 14</div>
      </div>
    );
  };
});

describe("Home Component", () => {
  it("renders the main layout with hero and NFT list", () => {
    render(<Home />);

    expect(screen.getByTestId("mock-main-layout")).toBeInTheDocument();
    expect(screen.getByTestId("mock-hero")).toBeInTheDocument();
    expect(screen.getByTestId("mock-nft-list")).toBeInTheDocument();
  });

  it("passes correct title to NFT list", () => {
    render(<Home />);

    expect(screen.getByText("Featured NFTs")).toBeInTheDocument();
  });

  it("passes correct number of NFT items", () => {
    render(<Home />);

    expect(screen.getByText("NFT Count: 14")).toBeInTheDocument();
  });
});
