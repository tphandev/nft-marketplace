import React from "react";
import { render, screen } from "@testing-library/react";
import NFTCard from "../NFTCard";

describe("NFTCard", () => {
  it("renders the component with the provided name and price", () => {
    render(
      <NFTCard
        image="/test-image.jpg"
        name="Test NFT"
        price="10 ETH"
        category="Art"
        creator={{
          name: "John Doe",
          isOnline: true,
          avatarUrl: "/avatar.jpg",
        }}
      />
    );
    expect(screen.getByText("Test NFT")).toBeInTheDocument();
    expect(screen.getByText("10 ETH")).toBeInTheDocument();
  });

  it("displays the category label", () => {
    render(
      <NFTCard
        image="/test-image.jpg"
        name="Test NFT"
        price="10 ETH"
        category="Epic"
        creator={{
          name: "John Doe",
          isOnline: true,
          avatarUrl: "/avatar.jpg",
        }}
      />
    );
    expect(screen.getByText("Epic")).toBeInTheDocument();
  });

  it("displays the image with the correct alt text", () => {
    render(
      <NFTCard
        image="/test-image.jpg"
        name="NFT Alt Test"
        price="5 ETH"
        category="Art"
        creator={{
          name: "John Doe",
          isOnline: true,
          avatarUrl: "/avatar.jpg",
        }}
      />
    );
    const imageElement = screen.getByAltText("NFT Alt Test");
    expect(imageElement).toBeInTheDocument();
  });

  it("uses the default gradient background if bgColor is not provided", () => {
    const { container } = render(
      <NFTCard
        image="/test-image.jpg"
        name="Gradient Test"
        price="5 ETH"
        category="Art"
        creator={{
          name: "John Doe",
          isOnline: true,
          avatarUrl: "/avatar.jpg",
        }}
      />
    );
    const gradientDiv = container.querySelector(".bg-gradient-to-b");
    expect(gradientDiv).toHaveClass("from-purple-600");
  });
});
