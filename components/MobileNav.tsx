"use client";
import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  items: {
    title: string;
    href: string;
  }[];
}

export default function MobileNav({ items }: MobileMenuProps) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="lg:hidden">
      <Button size="large" ghost icon={<MenuOutlined />} onClick={showDrawer} />
      <Drawer onClose={onClose} open={visible} className="bg-black">
        <nav
          className={clsx(
            "items-center justify-between gap-12  flex flex-col title-20"
          )}
        >
          {items.map((item) => (
            <Link
              key={`${item.href}_${item.title}`}
              href={item.href}
              className={clsx(
                "relative group hover:text-gradient transition-colors text-gradient",
                { "text-black": pathname !== item.href }
              )}
              onClick={onClose}
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
        </nav>
      </Drawer>
    </div>
  );
}
