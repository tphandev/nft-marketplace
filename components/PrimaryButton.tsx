import clsx from "clsx";

export function PrimaryButton({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        "header-16-medium text-white rounded-[4px] px-5 py-2 bg-gradient hover:opacity-90 transition-opacity",
        className
      )}
      {...props}
    />
  );
}
