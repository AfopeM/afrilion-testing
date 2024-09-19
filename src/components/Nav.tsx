"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useMobileScreen } from "@/hooks/useMobile";
import { motion, AnimatePresence } from "framer-motion";
import { PrimaryButtons, SmoothScrollLink } from "./Buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

// Section names
const sections = ["services", "why us", "our team"];

// Main Nav component
export default function Nav() {
  const isMobile = useMobileScreen();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile Navigation component
  const NavMobile = () => (
    <motion.div
      key="mobile-nav"
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      className={` ${isScrolled ? "top-20" : "top-24"} fixed left-0 right-0 z-50`}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <ul className="mx-auto flex w-2/3 flex-col items-center justify-center gap-10 rounded-md bg-light px-12 py-8 shadow-lg md:w-1/2">
        {sections.map((section) => (
          <li key={section}>
            <SmoothScrollLink
              setIsOpen={setIsOpen}
              href={`#${section.replace(" ", "-")}`}
              className="brand-ease mx-auto rounded-md px-4 py-3 text-center hover:scale-105 hover:bg-primary hover:bg-opacity-20"
            >
              {section}
            </SmoothScrollLink>
          </li>
        ))}
        <li>
          <SmoothScrollLink
            href="#cta"
            setIsOpen={setIsOpen}
            className="h8 relative w-fit"
          >
            <PrimaryButtons blue text="get started" />
          </SmoothScrollLink>
        </li>
      </ul>
    </motion.div>
  );

  // Desktop Navigation component
  const NavDesktop = () => (
    <ul className="flex w-[62%] max-w-[700px] justify-around lg:justify-between xl:justify-around">
      {sections.map((section) => (
        <motion.li
          key={section}
          initial="rest"
          whileHover="hover"
          className="brand-ease cursor-pointer rounded-md px-4 py-2 text-center hover:bg-dark hover:bg-opacity-10"
        >
          <SmoothScrollLink href={`#${section.replace(" ", "-")}`}>
            {section}
          </SmoothScrollLink>
        </motion.li>
      ))}
    </ul>
  );

  // Main return statement
  return (
    <nav
      className={`dotted-background brand-px brand-ease fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-dark text-sm capitalize tracking-wide ${
        isScrolled ? "h-16 shadow-lg" : "h-20"
      }`}
    >
      <SmoothScrollLink
        href="#hero"
        setIsOpen={setIsOpen}
        aria-label="Go to top of page"
        className="relative h-2/3 w-2/5 max-w-[175px] justify-self-start rounded-md lg:h-1/2"
      >
        <Image
          fill
          src="/logo.svg"
          alt="Afrilion Consulting logo"
          className="object-contain"
        />
      </SmoothScrollLink>
      {/* Mobile Navigation */}
      {isMobile ? (
        <button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="relative flex flex-col items-center justify-center overflow-hidden p-4"
        >
          <motion.div
            animate={{ y: isOpen ? 0 : "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute"
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-2xl"
              aria-hidden="true"
            />
          </motion.div>
          <motion.div
            animate={{ y: isOpen ? "100%" : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl"
              aria-hidden="true"
            />
          </motion.div>
        </button>
      ) : (
        <div className="flex w-[70%] items-center justify-end gap-4 lg:w-3/5 lg:gap-8">
          {/* Desktop Navigation */}
          <NavDesktop />
          <SmoothScrollLink
            href="#cta"
            aria-label="Get started"
            className="relative h-10 w-fit text-[15px] lg:text-base"
          >
            <PrimaryButtons
              textSize="text-xs tracking-widest"
              text="get started"
            />
          </SmoothScrollLink>
        </div>
      )}
      <AnimatePresence>{isOpen && isMobile && <NavMobile />}</AnimatePresence>
    </nav>
  );
}
