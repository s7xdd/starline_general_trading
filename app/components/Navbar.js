'use client';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import Image from 'next/image'; 
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "../components/Icons.js";
import logo from '../../public/starline-new.png';
import { CiGlobe } from "react-icons/ci";
import { MdComputer } from "react-icons/md";


export default function NavbarComponent() {
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        globe: <CiGlobe className="text-warning" fill="currentColor" size={25} />,
        ecommerce: <MdComputer className="text-success" fill="currentColor" size={25} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={25} />,
        flash: <Flash className="text-primary" fill="currentColor" size={25} />,
        server: <Server className="text-success" fill="currentColor" size={25} />,
        user: <TagUser className="text-danger" fill="currentColor" size={25} />,
      };
  return (
    <Navbar className="p-3 bg-white">
      <NavbarBrand>
        <Link href="/">
          <Image src={logo} height={55}/>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-[50px]" justify="center">
        <NavbarItem isActive>
          <Link href="/" aria-current="page" className="font-bold">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about" className="font-bold">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact" className="font-bold">
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