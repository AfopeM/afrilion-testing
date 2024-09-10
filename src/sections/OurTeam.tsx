"use client";
import Image from "next/image";
import { useState } from "react";
import { useMobileScreen } from "@/hooks/useMobile";
import { useDesktopScreen } from "@/hooks/useDesktop";
import { motion, AnimatePresence } from "framer-motion";
import { Title, Paragraph, Tagline, PrimaryButtons } from "@/components";

export default function OurTeam() {
  const isDesktop = useDesktopScreen();
  const [showMore, setShowMore] = useState(false);

  const isMobile = useMobileScreen();
  const [showMoreTeam, setShowMoreTeam] = useState(false);

  return (
    <section
      id="our-team"
      className="brand-px flex flex-col items-center justify-center gap-y-10 py-[125px]"
    >
      {/* Title */}
      <div className="flex flex-col items-center justify-center text-center">
        <Tagline>Introduction to Afrilion Consulting</Tagline>
        <Title style="w-[400px] lg:w-[700px]">
          Pioneering Telecom Solutions in Africa
        </Title>
      </div>
      {/* Founder */}
      <div className="grid w-full max-w-[1000px] grid-cols-1 items-center justify-center gap-5 rounded-md bg-light px-12 py-10 text-center shadow-lg xl:grid-cols-2 xl:text-left">
        <div className="relative mx-auto h-96 max-h-[700px] w-full max-w-[400px] overflow-hidden rounded-md bg-dark shadow-lg xl:h-full">
          <Image
            fill
            alt="founder"
            src={"/founder.png"}
            className="object-cover"
          />
        </div>
        <div className="mx-auto max-w-[800px]">
          <Tagline>Our Founder</Tagline>
          <Title>Kehinde Matilukuro</Title>
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
                      Telecom. As a Huawei-certified expert in project delivery
                      and an MBA holder,
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
              className="relative mt-6 h-10 w-fit text-sm"
            >
              <PrimaryButtons blue text={showMore ? "See Less" : "See More"} />
            </button>
          )}
        </div>
      </div>

      {/* Team */}
      <div className="w-full gap-10 rounded-md bg-light px-12 py-10 text-center shadow-lg lg:text-left">
        <Tagline>Our Team</Tagline>
        <Title>Dedicated Experts Driving Telecom Innovation</Title>
        <div className="relative mx-auto mt-6 h-56 w-full overflow-hidden rounded-md lg:h-72">
          <Image fill alt="team" src={"/team.jpg"} className="object-cover" />
        </div>
        <Paragraph style="pt-6 flex-col flex justify-between gap-6 text-sm">
          <span>
            <strong>
              At Afrilion Consulting, our strength lies in the collective
              expertise and dedication of our seasoned team.
            </strong>{" "}
            With a diverse background in vendor environments and telecom
            operations, our professionals have led the successful delivery of{" "}
            <strong>over 60 mission-critical solutions.</strong>
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
                    passion, knowledge, and a deep understanding of the telecom
                    industry and the regulatory landscape in Africa,
                    particularly Nigeria.
                  </strong>
                  Whether it’s deploying BSS/OSS and VAS solutions or
                  streamlining business processes, we bring excellence to every
                  project.
                </span>
                <span>
                  We believe in
                  <strong>
                    continuous improvement and responsible innovation,
                  </strong>
                  working hand in hand with our clients to deliver outcomes that
                  matter.
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </Paragraph>
        {isMobile && (
          <button
            onClick={() => setShowMoreTeam(!showMoreTeam)}
            className="relative mt-6 h-10 w-fit text-sm"
          >
            <PrimaryButtons
              blue
              text={showMoreTeam ? "See Less" : "See More"}
            />
          </button>
        )}
      </div>
    </section>
  );
}
