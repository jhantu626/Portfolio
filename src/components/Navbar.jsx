import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";

export const PortfolioLogo = () => {
  return (
    <svg
      fill="none"
      height="48" // Increased size for better visibility
      viewBox="0 0 48 48"
      width="48"
    >
      <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2" />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="currentColor"
        fontSize="20"
        fontWeight="bold"
        dy=".3em"
      >
        JB
      </text>
    </svg>
  );
};

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Me",
    "Projects",
    "Skills",
    "Experience",
    "Contact",
    "Blog",
    "Portfolio",
    "Resume",
    "Testimonials",
    "Sign Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="cursor-pointer">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <PortfolioLogo />
          <p className="font-bold text-inherit text-xl">Jhantu Bala</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about-me" className="text-lg">
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#projects" className="text-lg">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#skills" className="text-lg">
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="text-lg"
            as={Link}
            color="primary"
            href="#contact"
            variant="flat"
          >
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-xl" // Increased font size
              color={
                index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
