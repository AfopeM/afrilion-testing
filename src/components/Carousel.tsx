"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import vendorsData from "../data/vendors.json";

const { vendors } = vendorsData;

export default function Carousel() {
  return (
    <section className="relative flex h-full w-full overflow-hidden bg-light">
      <motion.div
        className="flex items-center gap-12"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {[...Object.entries(vendors), ...Object.entries(vendors)].map(
          ([name, src], index) => (
            <article
              key={`${name}-${index}`}
              className={` ${
                name === "ibm" || name === "nokia"
                  ? "h-10"
                  : name === "csg" || name === "avaya"
                    ? "mt-4 h-9"
                    : "h-14"
              } relative flex w-36 flex-shrink-0 items-center justify-center`}
            >
              <Image src={src} alt={name} fill className="object-contain" />
            </article>
          ),
        )}
      </motion.div>
    </section>
  );
}
