"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import vendorsData from "../data/vendors.json";

const { vendors } = vendorsData;

export default function Carousel() {
  return (
    <section className="relative flex w-full overflow-hidden bg-light py-8">
      <motion.div
        className="flex gap-12"
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
              className="relative flex h-14 w-36 flex-shrink-0 items-center justify-center"
            >
              <Image src={src} alt={name} fill className="object-contain" />
            </article>
          ),
        )}
      </motion.div>
    </section>
  );
}
