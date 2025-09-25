"use client";
import { useState } from "react";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const navLink = [
  { href: "/", label: "Home" },
  { href: "#Solution", label: "Solution" },
  { href: "#OurMission", label: "Our Mission" },
  { href: "#playStore", label: "Our App" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const showDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <nav>
      <div className="xl:container w-[98%] mx-auto flex justify-between items-center py-2">
        {/* Left side - Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={logo}
              width={500}
              height={500}
              alt="logo"
              className="md:-ml-2 lg:-ml-5 rounded-md w-full h-auto max-w-[120px] sm:max-w-[120px] md:max-w-[200px] lg:max-w-[250px]"
            />
          </Link>
        </div>

        {/* Center - Desktop Navigation Links */}
        <ul className="hidden md:flex gap-4 flex-1 justify-center">
          {navLink.map((link) => (
            <li key={link.href}>
              <ActiveLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        {/* Right side - Contact Us Button (Desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <Link href="#contact">
            <button className="bg-[#222B52] rounded-3xl text-white px-5 py-3 font-semibold">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Drawer Button */}
        <Button
          type="text"
          className="md:hidden"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />

        {/* Drawer for Mobile Navigation */}
        <Drawer
          title="Menu"
          placement="left" // opens from left
          onClose={closeDrawer}
          open={isDrawerOpen}
          width={200} // set width to 200px
        >
          <ul className="flex flex-col gap-4">
            {navLink.map((link) => (
              <li key={link.href} onClick={closeDrawer}>
                <ActiveLink href={link.href} label={link.label} />
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <Link href="#contact">
              <button
                className="bg-[#222B52] rounded-3xl text-white px-5 py-3 font-semibold"
                onClick={closeDrawer}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
