"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <div className="lg:hidden">
        {/* Icono del menú o de cierre dependiendo del estado isOpen */}
        <div
          className={`relative inline-block transition-transform transform ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          <Image
            src={isOpen ? "close.svg" : "menu.svg"}
            alt={isOpen ? "Cerrar menú" : "Abrir menú"}
            width={32}
            height={32}
            className="cursor-pointer"
            onClick={toggleMenu}
          />
          {/* Texto de accesibilidad para el icono */}
          <span className="sr-only">
            {isOpen ? "Cerrar menú" : "Abrir menú"}
          </span>
        </div>
        {/* Menú desplegable */}
        {isOpen && (
          <ul className="flex flex-col items-center justify-center bg-black text-gray-50 absolute top-14 left-0 right-0 z-10 h-[calc(100svh-4rem)]">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="my-4">
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className="regular-16 cursor-pointer transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="my-4">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </li>
          </ul>
        )}
      </div>

      {/* Menú para pantallas grandes */}
      <div className="hidden lg:flex lg:items-center lg:gap-12 ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
