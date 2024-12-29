import { render, screen, fireEvent, act } from "@testing-library/react";
import SearchInput from "../SearchInput";

jest.useFakeTimers();

describe("SearchInput", () => {
  it("renders with initial value", () => {
    const onSearch = jest.fn();
    render(<SearchInput onSearch={onSearch} value="initial" />);

    expect(screen.getByPlaceholderText("Quick Search")).toHaveValue("initial");
  });

  it("calls onSearch with debounced value when input changes", () => {
    const onSearch = jest.fn();
    render(<SearchInput onSearch={onSearch} />);

    const input = screen.getByPlaceholderText("Quick Search");
    fireEvent.change(input, { target: { value: "test" } });

    expect(onSearch).toHaveBeenCalledTimes(1); // initial call

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(onSearch).toHaveBeenCalledTimes(2); // debounced call

    expect(onSearch).toHaveBeenCalledWith("test");
  });

  it("updates input value when prop value changes", () => {
    const onSearch = jest.fn();
    const { rerender } = render(
      <SearchInput onSearch={onSearch} value="initial" />
    );

    rerender(<SearchInput onSearch={onSearch} value="updated" />);

    expect(screen.getByPlaceholderText("Quick Search")).toHaveValue("updated");
  });
});
