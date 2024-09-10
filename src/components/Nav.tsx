"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButtons, SmoothScrollLink } from "./Buttons";

import React, { useState, useEffect } from "react";
import { useMobileScreen } from "@/hooks/useMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// Section names
const sections = ["services", "why us", "our team"];

// SmoothScrollLink props
interface SmoothScrollLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

// Main Nav component
export default function Nav() {
  const isMobile = useMobileScreen();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  // Mobile Navigation component
  const NavMobile = () => (
    <motion.div
      key="mobile-nav"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 right-0 top-28 z-50"
    >
      <ul className="mx-auto flex w-2/3 flex-col items-center justify-center gap-4 space-y-6 rounded-md bg-light px-12 py-8 shadow-lg md:w-1/2">
        {sections.map((section) => (
          <li key={section}>
            <SmoothScrollLink
              setIsOpen={setIsOpen}
              href={`#${section.replace(" ", "-")}`}
              className="brand-ease mx-auto rounded-md px-6 py-4 text-center hover:scale-105 hover:bg-primary hover:bg-opacity-20"
            >
              {section}
            </SmoothScrollLink>
          </li>
        ))}
        <li>
          <SmoothScrollLink
            href="#cta"
            className="relative mx-auto w-fit"
            setIsOpen={setIsOpen}
          >
            <PrimaryButtons blue text="get started" />
          </SmoothScrollLink>
        </li>
      </ul>
    </motion.div>
  );

  // Desktop Navigation component
  const NavDesktop = () => (
    <ul className="flex w-[55%] max-w-[800px] justify-between">
      {sections.map((section) => (
        <motion.li
          key={section}
          initial="rest"
          whileHover="hover"
          className="brand-ease mx-auto w-fit cursor-pointer rounded-md px-4 py-2 text-center hover:scale-105 hover:bg-primary hover:bg-opacity-20"
        >
          <SmoothScrollLink
            href={`#${section.replace(" ", "-")}`}
            className="focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-0"
          >
            {section}
          </SmoothScrollLink>
        </motion.li>
      ))}
    </ul>
  );

  // Main return statement
  return (
    <nav className="dotted-background brand-px fixed left-0 top-0 z-50 flex h-24 w-full items-center justify-between border-b border-dark capitalize tracking-wide shadow-lg md:h-24">
      <SmoothScrollLink
        setIsOpen={setIsOpen}
        href="#hero"
        className="relative h-2/3 w-2/5 max-w-[175px] rounded-md focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-0 lg:h-1/2"
      >
        <Image src="/logo.svg" alt="logo" fill className="object-contain" />
      </SmoothScrollLink>
      {/* Mobile Navigation */}
      {isMobile ? (
        <>
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="relative flex flex-col items-center justify-center overflow-hidden p-4 focus:rounded focus:outline-none focus:ring-[1px] focus:ring-secondary focus:ring-opacity-0"
          >
            <motion.div
              animate={{ y: isOpen ? 0 : "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute"
            >
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </motion.div>
            <motion.div
              animate={{ y: isOpen ? "100%" : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute"
            >
              <FontAwesomeIcon icon={faBars} className="text-2xl" />
            </motion.div>
          </button>
          <AnimatePresence>{isOpen && <NavMobile />}</AnimatePresence>
        </>
      ) : (
        <>
          {/* Desktop Navigation */}
          <NavDesktop />
          <SmoothScrollLink href="#cta" className="relative w-fit">
            <PrimaryButtons text="get started" />
          </SmoothScrollLink>
        </>
      )}
    </nav>
  );
}
