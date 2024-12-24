import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import { PrimaryButton } from "./PrimaryButton";

const navigationItems = [
  { title: "HOME", href: "/" },
  { title: "ABOUT US", href: "#" },
  { title: "OUR TEAMS", href: "#" },
  { title: "MARKETPLACE", href: "#" },
  { title: "ROADMAP", href: "#" },
  { title: "WHITEPAPER", href: "#" },
];

export default function NavBar() {
  return (
    <div
      className={
        "lg:mf-grid top-0 p-8 md:px-8 xl:px-0 fixed z-20 w-full bg-[#17161A]/70"
      }
    >
      <div className="flex justify-between items-center lg:col-span-12 lg:gap-16">
        <Menu items={navigationItems} />
        <div className="flex flex-1 items-center justify-end gap-4 lg:flex-1">
          <PrimaryButton>Connect Wallet</PrimaryButton>
          <MobileMenu items={navigationItems} />
        </div>
      </div>
    </div>
  );
}
