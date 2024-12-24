"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "hidden items-center justify-between gap-12 text-white lg:flex title-14"
      )}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx(
            "relative group hover:text-gradient transition-colors",
            { "text-gradient": pathname === item.href }
          )}
        >
          {item.title}
          <div
            className={clsx(
              "absolute -bottom-2 left-1 w-0 h-1 bg-gradient group-hover:w-4 transition-all",
              {
                "!w-4": pathname === item.href,
              }
            )}
          />
        </Link>
      ))}
    </div>
  );
}
