import Image from "next/image";
import Link from "next/link";
import React from "react";
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
            <Link href={"#/"}>
              <li>Home</li>
            </Link>
            <Link href={"#about"}>
              <li>About</li>
            </Link>
            <Link href={"#services"}>
              <li>Services</li>
            </Link>
            <Link href={"#specialists"}>
              <li>Specialists</li>
            </Link>
            <Link href={"#testimonials"}>
              <li>Testimonials</li>
            </Link>
            <Link href={"#contact"}>
              <li>Contact</li>
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
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex flex-col justify-center items-center"
            >
              <SheetHeader>
                {/* Visually hidden title for accessibility */}
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 text-sm mt-4">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="#"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link
                    href="#about"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    About
                  </Link>
                  <Link
                    href="#services"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    Services
                  </Link>
                  <Link
                    href="#specialists"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    Specialists
                  </Link>
                  <Link
                    href="#testimonials"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="#contact"
                    className="font-medium transition-colors hover:text-primary"
                  >
                    Contact
                  </Link>
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
