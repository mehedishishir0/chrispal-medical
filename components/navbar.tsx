"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("Home");
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-28 items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Image
            src="/images/logo.png"
            alt="Chrispal Medical Logo"
            width={150}
            height={150}
            className="object-cover"
          />
          <ul className="flex justify-between items-center gap-5 md:text-xl font-medium">
            <Link onClick={() => setActiveHash("Home")} href={"#/"}>
              <li className={`${activeHash === "Home" ? " border-b-2 border-black " : ""}`}>
                Home
              </li>
            </Link>
            <Link onClick={() => setActiveHash("About")} href={"#about"}>
              <li
                className={`${activeHash === "About" ? "border-b-2 border-black" : ""}`}
              >
                About
              </li>
            </Link>
            <Link onClick={() => setActiveHash("Services")} href={"#services"}>
              <li
                className={`${
                  activeHash === "Services" ? "border-b-2 border-black" : ""
                }`}
              >
                Services
              </li>
            </Link>
            <Link
              onClick={() => setActiveHash("Specialists")}
              href={"#specialists"}
            >
              <li
                className={`${
                  activeHash === "Specialists" ? "border-b-2 border-black" : ""
                }`}
              >
                Specialists
              </li>
            </Link>
            <Link
              onClick={() => setActiveHash("Testimonials")}
              href={"#testimonials"}
            >
              <li
                className={`${
                  activeHash === "Testimonials" ? "border-b-2 border-black" : ""
                }`}
              >
                Testimonials
              </li>
            </Link>
            <Link onClick={() => setActiveHash("Contact")} href={"#contact"}>
              <li
                className={`${activeHash === "Contact" ? "border-b-2 border-black" : ""}`}
              >
                Contact
              </li>
            </Link>
          </ul>
          <div>
            <Button className="cursor-pointer">Book an Appointment</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-between items-center w-full md:hidden">
          <Image
            src="/images/logo.png"
            alt="Chrispal Medical Logo"
            width={150}
            height={150}
            className="object-cover"
          />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col items-center">
              <SheetHeader>
                {/* Visually hidden title for accessibility */}
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 text-sm mt-4">
                <nav className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-4">
                    <Link
                      onClick={() => {setActiveHash("Home")
                        setOpen(false)
                      }}
                      href="#"
                      className="font-medium text-xl transition-colors hover:text-primary"
                    >
                      <li
                        className={`${
                          activeHash === "Home" ? "border-b-2 border-black" : ""
                        }`}
                      >
                        Home
                      </li>
                    </Link>
                    <Link
                      onClick={() => {setActiveHash("About") 
                      setOpen(false)}}
                      href="#about"
                      className="font-medium text-xl transition-colors hover:text-primary"
                    >
                      <li
                        className={`${
                          activeHash === "About" ? "border-b-2 border-black" : ""
                        }`}
                      >
                        About
                      </li>
                    </Link>
                    <Link
                      onClick={() => {setActiveHash("Services")
                        setOpen(false)
                      }}
                      href="#services"
                      className="font-medium text-xl transition-colors hover:text-primary"
                    >
                      <li
                        className={`${
                          activeHash === "Services" ? "border-b-2 border-black" : ""
                        }`}
                      >
                        Services
                      </li>
                    </Link>
                    <Link
                      onClick={() => {setActiveHash("Specialists")
                        setOpen(false)
                      }}
                      href="#specialists"
                      className="font-medium text-xl transition-colors hover:text-primary"
                    >
                      <li
                        className={`${
                          activeHash === "Specialists" ? "border-b-2 border-black" : ""
                        }`}
                      >
                        Specialists
                      </li>
                    </Link>
                    <Link
                      onClick={() => {setActiveHash("Testimonials")
                        setOpen(false)
                      }}
                      href="#testimonials"
                      className="font-medium text-xl transition-colors hover:text-primary"
                    >
                      <li
                        className={`${
                          activeHash === "Testimonials" ? "border-b-2 border-black" : ""
                        }`}
                      >
                        Testimonials
                      </li>
                    </Link>
                    <Link
                      onClick={() => {setActiveHash("Contact")
                        setOpen(false)
                      }}
                      href="#contact"
                      className="font-medium text-xl transition-colors hover:text-primary"
                    >
                      <li
                        className={`${
                          activeHash === "Contact" ? "border-b-2 border-black" : ""
                        }`}
                      >
                        Contact
                      </li>
                    </Link>
                  </ul>
                </nav>
                <Button>Book an Appointment</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
