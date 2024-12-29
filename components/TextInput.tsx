import { Input } from "antd";
import type { InputProps } from "antd/lib/input";

export default function TextInput({ className, ...restProps }: InputProps) {
  return (
    <Input
      {...restProps}
      size="large"
      style={{
        backgroundColor: "transparent",
        borderColor: "#89888B",
        borderRadius: "4px",
        color: "white",
      }}
      className={`header-16-medium mt-1 placeholder:!text-[#89888B] ${
        className || ""
      }`}
    />
  );
}
