'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Image from 'next/image'; 
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "../components/Icons.js";
import logo from '../../public/starline-new.png';


export default function NavbarComponent() {
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
      };
  return (
    <Navbar className="p-3 bg-white">
      <NavbarBrand>
        <Image src={logo} height={55}/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-[50px]" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about">
            About us
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
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
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Import_and_Export"
              startContent={icons.scale}
            >
              Import and Export
            </DropdownItem>
            <DropdownItem
              key="ecommerce"
              startContent={icons.activity}
            >
              Ecommerce Services
            </DropdownItem>
            <DropdownItem
              key="procurement_outsourcing"
              startContent={icons.flash}
            >
              Procurement Outsourcing
            </DropdownItem>
            <DropdownItem
              key="stainless_steel_cleaning"
              startContent={icons.server}
            >
              Stainless Steel Cleaning
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
}