import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../useDebounce";

describe("useDebounce", () => {
  jest.useFakeTimers();

  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });

  it("should update value after delay", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "initial", delay: 500 } }
    );

    rerender({ value: "updated", delay: 500 });
    expect(result.current).toBe("initial");

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe("updated");
  });

  it("should clear timeout on unmount", () => {
    const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");
    const { unmount } = renderHook(() => useDebounce("test", 500));

    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });

  it("should handle multiple rapid changes", () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value: "initial", delay: 500 } }
    );

    rerender({ value: "change1", delay: 500 });
    rerender({ value: "change2", delay: 500 });
    rerender({ value: "final", delay: 500 });

    expect(result.current).toBe("initial");

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBe("final");
  });
});
