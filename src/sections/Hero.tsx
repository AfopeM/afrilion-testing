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
      className="dotted-background brand-px flex h-screen flex-col items-center justify-between gap-10 pb-[125px] pt-[205px] lg:h-[780px] lg:flex-row"
    >
      <div className="flex w-full flex-col items-center justify-center text-center lg:items-start lg:text-left">
        <Tagline>Revolutionizing Telecom</Tagline>
        <Title isH1>
          <span className="block">Expert Solutions,</span>
          <span className="block">Extraordinary Results</span>
        </Title>

        <Paragraph style="pb-6 max-w-[500px]">
          At Afrilion Consulting, we empower telecom companies With 25+ years of
          expertise. We keep you competitive in a rapidly changing industry.
        </Paragraph>

        <SmoothScrollLink href="#cta" className="relative w-fit">
          <PrimaryButtons text="Book a Consultation" />
        </SmoothScrollLink>
      </div>
      <div className="relative block h-full w-full rounded-md lg:h-2/3 xl:max-w-[500px]">
        <Image src="/hero.svg" alt="hero" fill objectFit="contain" />
      </div>
    </header>
  );
}
