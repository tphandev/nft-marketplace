import { COLORS } from "@/constants/designSystem";
import { ConfigProvider } from "antd";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: COLORS.primary,
          fontFamily: "var(--font-inter)",
        },
        components: {
          Slider: {
            handleSizeHover: 16,
            handleSize: 16,
            railSize: 8,
            railBg: "#3A3841",
            railHoverBg: "#3A3841",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
