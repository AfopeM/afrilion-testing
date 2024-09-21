"use client";
import Image from "next/image";
import MNOdata from "@/data/vendors.json";
import { useState } from "react";
import { useMobileScreen } from "@/hooks/useMobile";
import { useDesktopScreen } from "@/hooks/useDesktop";
import { motion, AnimatePresence } from "framer-motion";
import { Title, Paragraph, Tagline } from "@/components";

const { MNO } = MNOdata;

export default function OurTeam() {
  const isDesktop = useDesktopScreen();
  const [showMore, setShowMore] = useState(false);

  const isMobile = useMobileScreen();
  const [showMoreTeam, setShowMoreTeam] = useState(false);

  return (
    <section
      id="our-team"
      className="brand-px brand-py dotted-bg-light flex flex-col items-center justify-center gap-y-16"
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center">
        <Tagline>Introduction to Afrilion Consulting</Tagline>
        <Title style="w-[400px] lg:w-[700px]">
          Pioneering Telecom Solutions in Africa
        </Title>
      </div>

      <div className="brand-max-w flex flex-col items-center justify-center gap-y-20">
        {/* Founder */}
        <div className="grid w-full grid-cols-1 items-center justify-center gap-6 text-center lg:grid-cols-2 lg:justify-between lg:gap-10 lg:text-left">
          <div className="relative mx-auto h-[450px] w-full max-w-[450px] overflow-hidden rounded-md bg-dark shadow-lg lg:h-[570px] xl:mx-0 xl:h-full">
            <Image
              fill
              alt="founder"
              src={"/founder.png"}
              className="object-cover"
            />
          </div>
          <div className="mx-auto max-w-[800px]">
            <Tagline>Our Founder</Tagline>
            <Title isSub>Kehinde Matilukuro</Title>
            <Paragraph style="pt-4 flex-col flex justify-between gap-4 text-sm">
              <span>
                a distinguished leader and{" "}
                <strong>
                  an Accredited Management Consultant, brings over 25 years of
                  telecom expertise
                </strong>{" "}
                to Afrilion Consulting.
              </span>
              <span>
                Having worked with both vendors and mobile network operators
                (MNOs),{" "}
                <strong>
                  he has spearheaded BSS/OSS transformations for major telecom
                  players in Nigeria.
                </strong>
              </span>
              <AnimatePresence>
                {(showMore || isDesktop) && (
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="block pb-4">
                      <strong>
                        Kehinde&apos;s accomplishments span multiple industries,
                        including Public Sector, Insurance, IT, Banking, and
                        Telecom. As a Huawei-certified expert in project
                        delivery and an MBA holder,
                      </strong>{" "}
                      Kehinde is dedicated to driving innovation with integrity,
                      ensuring that every project achieves excellence.
                    </span>
                    <span>
                      His leadership is rooted in strategic vision and a
                      commitment to fostering sustainable success for clients.
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Paragraph>
            {!isDesktop && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="brand-ease mt-6 w-1/4 rounded-md bg-primary bg-opacity-40 py-2 text-xs tracking-wider hover:bg-opacity-100 xl:w-full"
              >
                {showMore ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>

        {/* Team */}
        <div className="grid grid-cols-1 items-center justify-center gap-6 text-center lg:grid-cols-2 lg:gap-10 lg:text-left">
          <div className="relative h-56 w-full overflow-hidden rounded-md shadow-lg lg:h-[570px] xl:mx-0 xl:h-full">
            <Image fill alt="team" src={"/team.jpg"} className="object-cover" />
          </div>
          <div className="lg:col-start-1 lg:row-start-1">
            <Tagline>Our Team</Tagline>
            <Title isSub>Dedicated Experts Driving Telecom Innovation</Title>
            <Paragraph style="mt-8 flex-col flex justify-between gap-6 text-sm">
              <span>
                <strong>
                  At Afrilion Consulting, our strength lies in the collective
                  expertise and dedication of our seasoned team.
                </strong>{" "}
                With a diverse background in vendor environments and telecom
                operations, our professionals have led the successful delivery
                of <strong>over 60 mission-critical solutions.</strong>
              </span>
              <AnimatePresence>
                {(showMoreTeam || !isMobile) && (
                  <motion.span
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="block"
                  >
                    <span className="block pb-4">
                      Our team is driven by
                      <strong>
                        passion, knowledge, and a deep understanding of the
                        telecom industry and the regulatory landscape in Africa,
                        particularly Nigeria.
                      </strong>
                      Whether it’s deploying BSS/OSS and VAS solutions or
                      streamlining business processes, we bring excellence to
                      every project.
                    </span>
                    <span>
                      We believe in
                      <strong>
                        continuous improvement and responsible innovation,
                      </strong>
                      working hand in hand with our clients to deliver outcomes
                      that matter.
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </Paragraph>
            {isMobile && (
              <button
                onClick={() => setShowMoreTeam(!showMoreTeam)}
                className="brand-ease mt-4 w-1/4 rounded-md bg-primary bg-opacity-40 py-2 text-xs tracking-wider hover:bg-opacity-100"
              >
                {showMoreTeam ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>

        {/* MNO experience */}
        <div className="w-full max-w-3xl text-center">
          <Tagline>MNO expertise</Tagline>
          <Title style="max-w-xs md:max-w-none mx-auto" isSub>
            Our team is profiencent with these MNO&apos;s
          </Title>
          <span className="mt-4 block h-[1px] w-full bg-primary opacity-45" />
          <div className="flex flex-wrap justify-between justify-items-center">
            {Object.entries(MNO).map(([name, src], index) => {
              return (
                <div
                  key={name + index}
                  className="relative h-32 w-32 xl:h-48 xl:w-48"
                >
                  <Image
                    fill
                    src={src}
                    alt={`${name} logo image`}
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
