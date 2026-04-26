import { Navbar as HeroNavbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Socmed", path: "/socmed" },
  ];

  return (
    <HeroNavbar onMenuOpenChange={setIsMenuOpen} className="bg-background border-b border-white/10" maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-foreground"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-xl tracking-tighter">MyPortfolio.</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.name}-${index}`} isActive={location.pathname === item.path}>
            <Link color={location.pathname === item.path ? "foreground" : "foreground"} className={`text-sm tracking-widest uppercase ${location.pathname === item.path ? 'font-bold' : 'opacity-70 hover:opacity-100 transition-opacity'}`} as={RouterLink} to={item.path}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      
      <NavbarContent justify="end">
      </NavbarContent>

      <NavbarMenu className="bg-background/90 backdrop-blur-md pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={location.pathname === item.path ? "foreground" : "foreground"}
              className={`w-full text-2xl uppercase tracking-widest ${location.pathname === item.path ? 'font-bold' : 'opacity-70'}`}
              as={RouterLink}
              to={item.path}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
