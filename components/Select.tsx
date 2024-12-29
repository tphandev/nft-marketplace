import React from "react";
import { Select as AntdSelect } from "antd";
import { SelectProps as AntdSelectProps } from "antd/lib/select";

const { Option } = AntdSelect;

interface SelectProps extends AntdSelectProps {
  options?: { value: string; label: string }[];
  label?: string;
}

export default function Select({ options, style, ...props }: SelectProps) {
  return (
    <div className="w-full">
      <label className="block header-16-semibold text-white mb-3">
        {props.label}
      </label>
      <AntdSelect
        variant="filled"
        style={{ ...style, width: 320, color: "white" }}
        {...props}
      >
        {options?.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </AntdSelect>
    </div>
  );
}
