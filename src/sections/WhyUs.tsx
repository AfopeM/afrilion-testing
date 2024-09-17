"use client";
import Image from "next/image";
import React, { useState } from "react";
import whyUsData from "@/data/why-us.json";
import { motion, AnimatePresence } from "framer-motion";
import { Tagline, Title, Paragraph } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const { "why-us": whyUs } = whyUsData;

export default function WhyUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="why-us"
      aria-label="Why Choose Afrilion Consulting"
      className="brand-px dotted-background-dark brand-py flex flex-col items-center justify-center gap-16 text-light lg:flex-row"
    >
      <div className="flex w-full flex-col items-center justify-center gap-y-10">
        {/* Header Section */}
        <div className="text-center text-primary lg:self-start lg:text-start">
          <Tagline style="text-light">Your Success, Our Commitment</Tagline>
          <Title style="pb-2 max-w-[560px]">
            Why Choose Afrilion Consulting for Your Telecom Needs?
          </Title>
          <Paragraph style="max-w-[500px] text-light mx-auto lg:mx-0">
            At Afrilion Consulting, we are driven by a commitment to excellence,
            innovation, and customer satisfaction. Here&apos;s why we stand out:
          </Paragraph>
        </div>

        {/* Accordion Section */}
        <div
          role="list"
          className="flex h-4/5 w-full flex-col items-center justify-center gap-y-6 lg:items-start"
        >
          {Object.entries(whyUs).map(([title, content], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full max-w-[450px]"
              role="listitem"
            >
              {/* Accordion Header */}
              <div
                className={`${index === openIndex ? "translate-x-1 translate-y-1 hover:translate-x-1 hover:translate-y-1" : ""} brand-ease relative z-10 flex w-full cursor-pointer items-center justify-between rounded-md border border-primary bg-dark px-8 py-6 text-light hover:translate-x-0.5 hover:translate-y-0.5`}
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleToggle(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={openIndex === index}
                aria-controls={`content-${index}`}
              >
                <h4 className="font-semibold">{title}</h4>
                <motion.div
                  animate={{ rotate: openIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </motion.div>
              </div>
              {/* Accordion Background */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 block h-full w-full translate-x-1 translate-y-1 rounded-md bg-primary"
              />
              {/* Accordion Content */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`content-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                      height: { duration: 0.3 },
                    }}
                    className="relative z-10 my-6 overflow-hidden rounded-md px-4 pl-8 text-sm text-dark"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="text-base"
                    >
                      {content}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Image */}
      <div className="relative hidden h-96 w-full max-w-[375px] overflow-hidden rounded-md lg:block lg:h-[650px] xl:max-w-[450px]">
        <Image
          fill
          src="/why-us.jpg"
          alt="why-us by Jonas Stolle from unsplash"
          className="object-cover"
        />
      </div>
    </section>
  );
}
