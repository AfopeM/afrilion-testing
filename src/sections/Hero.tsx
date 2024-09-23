"use client";
import Image from "next/image";
import {
  Title,
  Tagline,
  Paragraph,
  PrimaryButtons,
  SmoothScrollLink,
} from "@/components";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header id="hero" className="dotted-bg brand-px">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="brand-max-w flex h-[700px] flex-col items-center justify-center gap-10 lg:h-[650px] lg:flex-row"
      >
        {/* Hero Content */}
        <div className="lg:hauto flex h-full w-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
          <Tagline>Revolutionizing Telecom</Tagline>
          <Title isH1>
            <span className="mb-1 block lg:mb-0">Expert Solutions,</span>
            <span className="block">Extraordinary Results</span>
          </Title>

          <Paragraph style="pb-12 pt-2 md:pt-0 md:pb-10 max-w-[650px] lg:max-w-[500px]">
            Afrilion Consulting is a Nigerian professional services organization
            established to serve and provide innovative solutions to the
            telecommunication industry across the African landscape.
          </Paragraph>

          <SmoothScrollLink href="#cta" className="relative w-fit">
            <PrimaryButtons text="Book a Consultation" />
          </SmoothScrollLink>
        </div>

        {/* Image */}
        <div className="relative hidden h-full max-h-[450px] w-full max-w-[450px] lg:block">
          <Image
            fill
            priority
            alt="hero"
            src="/hero.png"
            className="object-contain"
          />
        </div>
      </motion.div>
    </header>
  );
}
