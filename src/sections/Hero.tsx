"use client";
import Image from "next/image";
import {
  Title,
  Tagline,
  Carousel,
  Paragraph,
  PrimaryButtons,
  SmoothScrollLink,
} from "@/components";

export default function Hero() {
  return (
    <header id="hero" className="dotted-background h-screen">
      <section className="brand-px flex h-[87vh] w-full flex-col items-center justify-between gap-10 lg:flex-row">
        <div className="mt-20 flex h-full w-full flex-col items-center justify-center text-center lg:h-auto lg:items-start lg:text-left">
          <Tagline>Revolutionizing Telecom</Tagline>
          <Title isH1>
            <span className="block">Expert Solutions,</span>
            <span className="block">Extraordinary Results</span>
          </Title>

          <Paragraph style="pb-12 pt-2 md:pt-0 md:pb-10 md:text-lg max-w-[650px] lg:max-w-[500px]">
            At Afrilion Consulting, we empower IT companies With 25+ years of
            expertise. We keep you competitive in a rapidly changing industry.
          </Paragraph>

          <SmoothScrollLink href="#cta" className="relative w-fit">
            <PrimaryButtons text="Book a Consultation" />
          </SmoothScrollLink>
        </div>
        <div className="relative hidden h-full w-full max-w-[450px] rounded-md lg:block">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
      </section>
      <Carousel height="h-[13vh]" />
    </header>
  );
}
