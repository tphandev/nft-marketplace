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
      }}
    >
      {children}
    </ConfigProvider>
  );
}
