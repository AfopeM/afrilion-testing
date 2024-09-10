import React from "react";
import { Tagline, Title, Paragraph, Cards } from "@/components";

export default function Services() {
  return (
    <section
      id="services"
      className="brand-px flex w-full flex-col items-center justify-start gap-y-16 py-[125px]"
    >
      <div className="flex w-full flex-col items-center justify-center text-center">
        <Tagline>Our Expert Services</Tagline>
        <Title style="pb-2 max-w-[400px]">
          Driving Innovation & Operational Excellence
        </Title>
        <Paragraph style="max-w-[750px]">
          Delivering end-to-end telecom solutions that optimize performance,
          enhance customer experience, and fuel business growth across Africa.
        </Paragraph>
      </div>
      <Cards />
    </section>
  );
}
