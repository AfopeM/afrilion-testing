"use client";
import React from "react";
import { Tagline } from "./Typography";
import servicesData from "@/data/services.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGears,
  faPuzzlePiece,
  IconDefinition,
  faClipboardCheck,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface Service {
  icon: string;
  description: string;
}

const iconMap: { [key: string]: IconDefinition } = {
  faGears,
  faPuzzlePiece,
  faClipboardCheck,
  faMagnifyingGlass,
};

export default function Cards() {
  const { services } = servicesData;
  return (
    <div className="grid grid-cols-1 items-center justify-between gap-12 lg:grid-cols-2 lg:gap-24">
      {Object.entries(services).map(([key, { icon, description }], index) => {
        const IconComponent = iconMap[icon as keyof typeof iconMap] || faGears;
        return (
          <motion.article
            key={key}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex h-72 max-w-[350px] flex-col items-center justify-center rounded-md bg-light px-10 text-center shadow-lg hover:shadow-xl"
          >
            <FontAwesomeIcon
              icon={IconComponent}
              className="text-4xl"
              aria-hidden="true"
            />
            <div className="pb-1 pt-6">
              <h3 className="text-2xl font-black tracking-tight">{key}</h3>
              <Tagline textSize="text-xs lg:text-sm">service</Tagline>
            </div>
            <p className="text-sm leading-6 tracking-wide opacity-70 md:text-base">
              {description}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
