import { PrimaryButton } from "./PrimaryButton";
import Link from "next/link";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const navigationLinks = [
  { text: "Home", href: "#" },
  { text: "Whitepaper", href: "#" },
  { text: "FAQs", href: "#" },
  { text: "About us", href: "#" },
  { text: "Marketplace", href: "#" },
  { text: "News", href: "#" },
  { text: "Our teams", href: "#" },
  { text: "Roadmap", href: "#" },
  { text: "Community", href: "#" },
];

const FooterSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="title-20 pb-2 lg:pb-8">{title}</h3>
    {children}
  </div>
);

const FooterLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="header-16-medium hover:text-gradient">
    {children}
  </Link>
);

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FooterSection title="NAVIGATION">
          <nav className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {navigationLinks.map((link) => (
              <FooterLink key={link.text} href={link.href}>
                {link.text}
              </FooterLink>
            ))}
          </nav>
        </FooterSection>

        <FooterSection title="CONTACT US">
          <div className="space-y-2 md:space-y-6 ">
            <p className="flex items-center">
              <PhoneOutlined className="mr-2 text-lg" />
              01234568910
            </p>
            <p className="flex items-center">
              <MailOutlined className="mr-2 text-lg" />
             tphan.st@gmail.com
            </p>
          </div>
        </FooterSection>

        <FooterSection title="SUBCRIBE TO RECEIVE OUR LATEST UPDATE">
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-3 py-2 bg-zinc-800 rounded border-[1px] text-white placeholder:text-gray-400"
            />
            <PrimaryButton>Subscribe</PrimaryButton>
          </div>
        </FooterSection>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-12 pt-8 border-t border-zinc-800">
        <p className="header-16-medium  mt-4 ">
          ©2025 All Rights reserved.
        </p>
        <div className="flex gap-6 md:mt-0">
          {["Security", "Legal", "Privacy"].map((text) => (
            <FooterLink key={text} href="#">
              <span className="header-16-medium hover:text-gradient">
                {text}
              </span>
            </FooterLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
