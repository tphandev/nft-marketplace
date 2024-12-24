import { TEXT_STYLES } from "@/constants/designSystem";
import clsx from "clsx";

type TextVariant = keyof typeof TEXT_STYLES;
type TextTag = "p" | "span" | "div";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: TextTag;
}

const Text = ({
  children,
  className,
  variant,
  as: Component = "p",
  ...props
}: TextProps) => {
  return (
    <Component
      className={clsx(className, {
        [TEXT_STYLES[variant!]]: !!variant,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
