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
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <header
      id="hero"
      className="dotted-background brand-px flex h-[700px] flex-col justify-center lg:flex-row"
    >
      <div className="flex h-full w-full flex-col items-center justify-center text-center lg:h-auto lg:items-start lg:text-left">
        <Tagline>Revolutionizing Telecom</Tagline>
        <Title isH1>
          <span className="block">Expert Solutions,</span>
          <span className="block">Extraordinary Results</span>
        </Title>

        <Paragraph style="pb-12 pt-2 md:pt-0 md:pb-10 max-w-[650px] lg:max-w-[500px]">
          At Afrilion Consulting, we empower IT companies With 25+ years of
          expertise. We keep you competitive in a rapidly changing industry.
        </Paragraph>

        <SmoothScrollLink href="#cta" className="relative w-fit">
          <PrimaryButtons text="Book a Consultation" />
        </SmoothScrollLink>
      </div>
      <div className="relative hidden h-full w-full max-w-[450px] lg:block">
        <Image
          fill
          priority
          alt="hero"
          src="/hero.png"
          className="object-contain"
        />
      </div>

      {/* <section className="flex h-[15vh] flex-col items-center gap-4">
        <div className="flex items-center gap-4 text-[10px] text-light">
          <FontAwesomeIcon icon={faStar} className="opacity-50" />
          <h2 className="space-x-1 text-sm uppercase tracking-wide">
            our vendors experience
          </h2>
          <FontAwesomeIcon icon={faStar} className="opacity-50" />
        </div>
        <Carousel />
      </section> */}
    </header>
  );
}
