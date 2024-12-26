import { render, screen } from "@testing-library/react";
import Hero from "../Hero";

describe("Hero", () => {
  it("renders hero component", () => {
    render(<Hero />);
    expect(
      screen.getByRole("img", { name: "Hero Background" })
    ).toBeInTheDocument();
  });

  it("displays new arrival image", () => {
    render(<Hero />);
    expect(
      screen.getByRole("img", { name: "New Arrival" })
    ).toBeInTheDocument();
  });

  it("displays yellow background", () => {
    render(<Hero />);
    expect(
      screen.getByRole("img", { name: "Yellow Background" })
    ).toBeInTheDocument();
  });

  it("contains HighlightNPC component with DJ", () => {
    render(<Hero />);
    expect(screen.getByText("THE DJ")).toBeInTheDocument();
  });
});
