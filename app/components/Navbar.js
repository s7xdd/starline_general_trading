"use client";
import React, { useState } from "react";
import {Navbar, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {ChevronDown} from "../components/Icons.js";
import Image from "next/image";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const menuItems = [
    {
      item: "Home",
      href: "/starline_general_trading"
    },
    {
      item: "About us",
      href: "/starline_general_trading/about"
    },
    {
      item: "Contact",
      href: "/starline_general_trading/contact"
    },
    {
      item: "Import and Export",
      href: "/starline_general_trading/services/import-export"
    },
    {
      item: "Ecommerce",
      href: "/starline_general_trading/services/ecommerce"
    },
    {
      item: "Procurement Outsourcing",
      href: "/starline_general_trading/services/procurement"
    },
    {
      item: "Logistics and Shippinig",
      href: "/starline_general_trading/services/logistics-shipping"
    }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/starline_general_trading">
            <img src={'./starline-new.png'} height={300} width={160}/>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive>
            <Link href="/" aria-current="page" className="font-bold">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/starline_general_trading/about" className="font-bold">
              About us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/starline_general_trading/contact" className="font-bold">
              Contact
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent font-bold"
                  endContent={icons.chevron}
                  radius="lg"
                  variant="light"
                  >
                  Services
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="Services"
              className="w-[200px]"
              itemClasses={{
                base: "gap-4",
              }}
              >
              <DropdownItem
                key="Import_and_Export"
                href="/services/import-export"
                >
                Import and Export
              </DropdownItem>
              <DropdownItem
                key="ecommerce"
                href="/services/ecommerce"
                >
                Ecommerce Services
              </DropdownItem>
              <DropdownItem
                key="procurement_outsourcing"
                href="/services/procurement"
                >
                Procurement Outsourcing
              </DropdownItem>
              <DropdownItem
                key="logistics_shipping"
                href="/services/logistics-shipping"
                >
                Logistics and Shipping
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
      </NavbarContent>
      <NavbarMenu className="bg-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-black border rounded-lg p-5"
              href={item.href}
              size="lg"
            >
              {item.item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
