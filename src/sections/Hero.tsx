"use client";
import Image from "next/image";
import {
  Tagline,
  Paragraph,
  Title,
  PrimaryButtons,
  SmoothScrollLink,
} from "@/components";

export default function Hero() {
  return (
    <header
      id="hero"
      className="dotted-background brand-px flex h-[820px] flex-col items-center justify-between gap-10 pb-[125px] pt-[220px] md:h-[950px] lg:h-[780px] lg:flex-row"
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-center lg:h-auto lg:items-start lg:text-left">
        <Tagline>Revolutionizing Telecom</Tagline>
        <Title isH1>
          <span className="block">Expert Solutions,</span>
          <span className="block">Extraordinary Results</span>
        </Title>

        <Paragraph style="pb-12 pt-2 md:pt-0 md:pb-10 max-w-[650px] lg:max-w-[500px]">
          At Afrilion Consulting, we empower telecom companies With 25+ years of
          expertise. We keep you competitive in a rapidly changing industry.
        </Paragraph>

        <SmoothScrollLink href="#cta" className="relative w-fit">
          <PrimaryButtons text="Book a Consultation" />
        </SmoothScrollLink>
      </div>
      <div className="relative hidden h-full w-full max-w-[450px] rounded-md md:block">
        <Image src="/hero.svg" alt="hero" fill className="object-contain" />
      </div>
    </header>
  );
}
